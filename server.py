import os
import sys
import spotipy
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

if (len(sys.argv) > 1):
  username = sys.argv[1]
else:
  print("Usage: python server.py [your-spotify-username]")
  print("Specify your Spotify username.")
  sys.exit()

# Auth
client_id = os.getenv('SPOTIPY_CLIENT_ID')
client_secret = os.getenv('SPOTIPY_CLIENT_SECRET')
redirect_uri = os.getenv('SPOTIPY_REDIRECT_URI')
scope = "playlist-modify-public playlist-modify-private playlist-read-private user-read-private"
token = spotipy.util.prompt_for_user_token(username, scope, client_id=client_id, client_secret=client_secret, redirect_uri=redirect_uri)
sp = spotipy.Spotify(auth=token)

# Spotipy methods
def list_my_playlists():
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
    return jsonify(results)

def find_song(key):
  return sp.search(q=key,type='track',market="from_token")

def add_track_to_playlists(track, selectedPlaylists):
  for playlist in selectedPlaylists:
    sp.user_playlist_add_tracks(username,playlist,track)

app = Flask(__name__)
CORS(app, resources=r'/api/*')

@app.route('/api')
def index():
  return "Authorized {}".format(username)

@app.route('/api/playlists')
def playlists():
  return list_my_playlists()

@app.route('/api/search')
def search():
  key = request.args.get('key')
  return find_song(key)

@app.route('/api/addtrack', methods=['POST'])
def addtrack():
  req_data = request.get_json()
  track_id = (req_data['Track_ID'])
  playlist_ids = req_data["Playlist_IDs"]
  add_track_to_playlists([track_id], playlist_ids)
  return "Added " + str(track_id) + " to playlists: " + str(playlist_ids)
    
if __name__ == '__main__':
  app.run()
