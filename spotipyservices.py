import os
import sys
import spotipy

if (len(sys.argv) > 1):
    username = sys.argv[1]
else:
    print("Usage: python spotipyservices.py [your-spotify-username]")
    print("Specify your Spotify username.")
    sys.exit()

# Auth
client_id = os.getenv('SPOTIPY_CLIENT_ID')
client_secret = os.getenv('SPOTIPY_CLIENT_SECRET')
redirect_uri = os.getenv('SPOTIPY_REDIRECT_URI')
scope = "playlist-modify-public playlist-modify-private playlist-read-private user-read-private"
token = spotipy.util.prompt_for_user_token(username, scope, client_id=client_id, client_secret=client_secret, redirect_uri=redirect_uri)
sp = spotipy.Spotify(auth=token)

# Methods
def list_my_playlists():
    playlists = sp.user_playlists(username)
    while playlists:
        for i, playlist in enumerate(playlists['items']):
            if (playlist['owner']['id'] == username):
                print("%s %s" % (playlist['id'], playlist['name']))
        if playlists['next']:
            playlists = sp.next(playlists)
        else:
            playlists = None

def find_song(key):
	return sp.search(q=key,type='track',market="from_token")

def add_track_to_playlists(track, selectedPlaylists):
    for playlist in selectedPlaylists:
        sp.user_playlist_add_tracks(username,playlist,track)
