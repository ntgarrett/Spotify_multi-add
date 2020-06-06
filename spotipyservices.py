import os
import sys
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials

if (len(sys.argv) != 2):
    print("Usage: python spotipyservices.py [your-spotify-username]")
    print("Specify your Spotify username")
    sys.exit()

client_id = os.getenv('SPOTIPY_CLIENT_ID')
client_secret = os.getenv('SPOTIPY_CLIENT_SECRET')
redirect_uri = os.getenv('SPOTIPY_REDIRECT_URI')
scope = "playlist-modify-public"
username = sys.argv[1]

token = spotipy.util.prompt_for_user_token(username, scope, client_id=client_id, client_secret=client_secret, redirect_uri=redirect_uri)

if token:
    sp = spotipy.Spotify(auth=token)
    print("Authorized", username)
else:
    print("Failed to authorize", username)
