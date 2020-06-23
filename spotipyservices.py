import os
import sys
import spotipy

if (len(sys.argv) != 2):
    print("Usage: python spotipyservices.py [your-spotify-username]")
    print("Specify your Spotify username.")
    sys.exit()

# Auth
client_id = os.getenv('SPOTIPY_CLIENT_ID')
client_secret = os.getenv('SPOTIPY_CLIENT_SECRET')
redirect_uri = os.getenv('SPOTIPY_REDIRECT_URI')

scope = "playlist-modify-public user-read-private"
username = sys.argv[1]
token = spotipy.util.prompt_for_user_token(username, scope, client_id=client_id, client_secret=client_secret, redirect_uri=redirect_uri)
sp = spotipy.Spotify(auth=token)

# Methods
def list_my_playlists():
    playlists = sp.user_playlists(username)
    while playlists:
        for i, playlist in enumerate(playlists['items']):
            print("%4d %s %s" % (i + 1 + playlists['offset'], playlist['uri'],  playlist['name']))
        if playlists['next']:
            playlists = sp.next(playlists)
        else:
            playlists = None

def find_song(key):
	return sp.search(q=key,type='track',market="from_token",limit=5)

# Script
if token:
    print("Authorized", username)
    list_my_playlists()

    print("Search for track: ", end='')
    q = input()
    print(find_song(q))

else:
    print("Failed to authorize", username)
