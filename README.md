<img src="front_end/src/assets/appicon.svg" align="right" height="120px" />

# Spotify Multi-Add &nbsp; [![guide](https://img.shields.io/badge/Link-https%3A%2F%2Fmultiplaylistadd.com-brightgreen)](https://multiplaylistadd.com)

> **Spotify Multi-Add** is a full stack application to search for tracks and add them to 
> more than one of your playlists simultaneously.

If you have a [Spotify](https://www.spotify.com/) account, go to https://multiplaylistadd.com to access the app. 
<br>
<br>
## Select a track and add it to more than one playlist
Adding a track to multiple playlists is made easy. Simply search for and select a track, then check the playlists you'd like to add it to. If you have a lot of playlists, use the filter to find specific ones.
<br>
<br>
<img src="demo/DesktopDemo.gif">
<br>
<br>

## Responsive styling
Mobile browsing is supported: 
<p align="center"><img src="demo/MobileDemo.gif" width=35%></p>

## Technologies
Spotify Multi-Add uses the [Spotipy](https://spotipy.readthedocs.io/en/2.16.1/) library to implement [Spotify Authorization Code Flow](https://developer.spotify.com/documentation/general/guides/authorization-guide/#authorization-code-flow). The Flask server is converted into a Serverless AWS Lambda function via [Zappa](https://github.com/Miserlou/Zappa). The frontend is hosted with AWS Amplify and changes pushed to the master branch are built and deployed automatically.
<br>
<br>
## Service Architecture

<img src="demo/ArchitectureDiagram.png">