import os
import sys
import spotipy
import time
import boto3
import uuid
from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
from dotenv import load_dotenv
from s3_cache_handler import S3CacheHandler

load_dotenv()

app = Flask(__name__)
app.secret_key = os.getenv('SECRET_KEY')
CORS(app, supports_credentials=True)

CLI_ID = os.getenv('SPOTIPY_CLIENT_ID')
CLI_SECRET = os.getenv('SPOTIPY_CLIENT_SECRET')
REDIR_URI = os.getenv('SPOTIPY_REDIRECT_URI')
SCOPE = 'playlist-modify-public playlist-modify-private playlist-read-private user-read-private'
SHOW_DIALOG = True

def cache_env(userID):
  if (sys.argv[1] == "dev"):
    # Cache is stored locally in project directory
    return spotipy.CacheFileHandler(userID)
  else:
    # Cache is stored in AWS S3 bucket
    return S3CacheHandler(f'.cache/{userID}')

@app.before_request
def before_request():
  userID = request.headers.get('Authorization')
  CacheHandler = cache_env(userID)
  token = CacheHandler.get_cached_token()
  if (token is not None):
    current_time = int(time.time())
    token_is_expired = CacheHandler.get_cached_token().get('expires_at') - current_time < 60
    if (token_is_expired): 
      refresh_token(userID, CacheHandler)

@app.route('/verify')
def verify():
  userID = request.headers.get('Authorization')
  oauth = spotipy.oauth2.SpotifyOAuth(client_id=CLI_ID, client_secret=CLI_SECRET, redirect_uri=REDIR_URI, cache_handler=cache_env(userID), scope=SCOPE, show_dialog=SHOW_DIALOG)
  auth_url = oauth.get_authorize_url()
  
  res = make_response({'auth_url': auth_url})
  return res

@app.route('/callback', methods=['POST'])
def callback():
  userID = request.headers.get('Authorization')
  oauth = spotipy.oauth2.SpotifyOAuth(client_id=CLI_ID, client_secret=CLI_SECRET, redirect_uri=REDIR_URI, cache_handler=cache_env(userID), scope=SCOPE, show_dialog=SHOW_DIALOG, requests_timeout=5)
  code = request.get_json().get('code')
  token = oauth.get_access_token(code)

  if token:
    res = make_response("Success", 200)
  else:
    res = make_response("Internal Server Error", 500)
  return res

@app.route('/playlists')
def playlists():
  userID = request.headers.get('Authorization')
  CacheHandler = cache_env(userID)
  sp = spotipy.Spotify(auth=CacheHandler.get_cached_token().get('access_token'))
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
  userID = request.headers.get('Authorization')
  CacheHandler = cache_env(userID)
  sp = spotipy.Spotify(auth=CacheHandler.get_cached_token().get('access_token'))
  key = request.args.get('key')

  res = make_response(sp.search(q=key,limit=20,type='track',market="from_token"))
  return res

@app.route("/addtrack", methods=['POST'])
def addtrack():
  userID = request.headers.get('Authorization')
  CacheHandler = cache_env(userID)
  sp = spotipy.Spotify(auth=CacheHandler.get_cached_token().get('access_token'))
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
  CacheHandler = cache_env(userID)
  
  if (sys.argv[1] == "dev"):
    os.remove(userID)
  else:
    CacheHandler.delete_cached_token()

  res = make_response("Signed out", 200)
  return res
    
def refresh_token(userID, CacheHandler):
  oauth = spotipy.oauth2.SpotifyOAuth(client_id=CLI_ID, client_secret=CLI_SECRET, redirect_uri=REDIR_URI, cache_handler=CacheHandler, scope=SCOPE, show_dialog=SHOW_DIALOG)
  new_token = oauth.refresh_access_token(CacheHandler.get_cached_token().get('refresh_token'))
  CacheHandler.save_token_to_cache(new_token)

if __name__ == '__main__':
  app.run()