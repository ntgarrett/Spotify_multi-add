import os
import sys
import spotipy
import time
import uuid
from flask import Flask, request, jsonify, session, make_response
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
app.config.update(
  SESSION_COOKIE_SECURE=True,
  SESSION_COOKIE_HTTPONLY=True,
  SESSION_COOKIE_SAMESITE='NONE'
)
app.secret_key = os.getenv('SECRET_KEY')
CORS(app, supports_credentials=True)

CLI_ID = os.getenv('SPOTIPY_CLIENT_ID')
CLI_SECRET = os.getenv('SPOTIPY_CLIENT_SECRET')
REDIR_URI = os.getenv('SPOTIPY_REDIRECT_URI')
SCOPE = 'playlist-modify-public playlist-modify-private playlist-read-private user-read-private'
SHOW_DIALOG = True
caches_folder = './.spotify_caches/'

@app.before_request
def before_request():
  if 'token' in session:
    userID = request.headers.get('Authorization')
    current_time = int(time.time())
    token_is_expired = session.get('token').get('expires_at') - current_time < 60
    if (token_is_expired): 
      refresh_token(userID)

@app.route('/verify')
def verify():
  userID = request.headers.get('Authorization')
  oauth = spotipy.oauth2.SpotifyOAuth(client_id=CLI_ID, client_secret=CLI_SECRET, redirect_uri=REDIR_URI, scope=SCOPE, cache_path=(caches_folder + userID), show_dialog=SHOW_DIALOG)
  auth_url = oauth.get_authorize_url()
  
  return make_response({'auth_url': auth_url})

@app.route('/callback', methods=['POST'])
def callback():
  userID = request.headers.get('Authorization')
  oauth = spotipy.oauth2.SpotifyOAuth(client_id=CLI_ID, client_secret=CLI_SECRET, redirect_uri=REDIR_URI, scope=SCOPE, cache_path=(caches_folder + userID), show_dialog=SHOW_DIALOG)
  code = request.get_json().get('code')
  token = oauth.get_access_token(code)
 
  if (token):
    session['token'] = token
    return "Logged in successfully", 200
  else:
    return "Internal Server Error", 500

@app.route('/playlists')
def playlists():
  sp = spotipy.Spotify(auth=session['token'].get('access_token'))
  username = sp.current_user().get('id')
  
  playlists = sp.user_playlists(username)
  results = []
  while playlists:
    for i, playlist in enumerate(playlists['items']):
      if (playlist['owner']['id'] == username):
        results.append({
          "id": playlist['id'],
          "name": playlist['name'] 
        })
    if playlists['next']:
      playlists = sp.next(playlists)
    else:
      playlists = None

    res = make_response(jsonify(results))
    return res

@app.route('/search')
def search():
  sp = spotipy.Spotify(auth=session['token'].get('access_token'))
  key = request.args.get('key')

  res = make_response(sp.search(q=key,limit=20,type='track',market="from_token"))
  return res

@app.route("/addtrack", methods=['POST'])
def addtrack():
  sp = spotipy.Spotify(auth=session['token'].get('access_token'))
  username = sp.current_user().get('id')
  
  req_data = request.get_json()
  track_id = req_data['Track_ID']
  playlist_ids = req_data['Playlist_IDs']

  for playlist in playlist_ids:
    sp.user_playlist_add_tracks(username,playlist,[track_id])

  res = make_response("Added " + str(track_id) + " to playlists: " + str(playlist_ids))
  return res

@app.route('/signout', methods=['POST'])
def signout():
  userID = request.headers.get('Authorization')
  os.remove(caches_folder + str(userID))
  session.clear()
  return "Signed out successfully", 200
    
def refresh_token(userID):
  oauth = spotipy.oauth2.SpotifyOAuth(client_id=CLI_ID, client_secret=CLI_SECRET, redirect_uri=REDIR_URI, scope=SCOPE, cache_path=(caches_folder + userID), show_dialog=SHOW_DIALOG)
  new_token = oauth.refresh_access_token(session.get('token').get('refresh_token'))
  session['token'] = new_token

if __name__ == '__main__':
  app.run()