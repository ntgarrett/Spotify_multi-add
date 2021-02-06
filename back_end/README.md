<img src="../front_end/src/assets/appicon.svg" align="right" height="120px" />

# Spotify Multi-Add Back End&nbsp; [![guide](https://img.shields.io/badge/Link-https%3A%2F%2Fmultiplaylistadd.com-brightgreen)](https://multiplaylistadd.com)

> **Spotify Multi-Add** is a full stack application to search for tracks and add them to 
> more than one of your playlists simultaneously.

## Deployment

The Spotify Multi-Add backend is written in Python, using the [Spotipy](https://spotipy.readthedocs.io/en/2.16.1/) library. The API is a Flask WSGI server that is converted into an AWS serverless Lambda function and deployed automatically to AWS via [Zappa](https://github.com/Miserlou/Zappa).

## API Documentation

See the [Postman](https://documenter.getpostman.com/view/11631692/TW74iQBZ) documentation for API requests.