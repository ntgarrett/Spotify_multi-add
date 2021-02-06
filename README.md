<img src="front_end/src/assets/appicon.svg" align="right" height="120px" />

# Spotify Multi-Add &nbsp; [![guide](https://img.shields.io/badge/Link-https%3A%2F%2Fmultiplaylistadd.com-blue)](https://multiplaylistadd.com)
> **Spotify Multi-Add** is a full stack application to search for tracks and add them to more than one of your playlists simultaneously.

If you have a [Spotify](https://www.spotify.com/) account, go to https://multiplaylistadd.com to access the app. 

In order to learn how to develop a full stack application and utilize technologies that are common in the field, something that I didn't learn in college, I built this website from the ground up to strengthen my skills and knowledge base in web development.

* [Usage](https://github.com/ntgarrett/Spotify_multi-add#select-a-track-and-add-it-to-more-than-one-playlist)
* [Front End](front_end/README.md) 
* [Back End](back_end/README.md)
* [Todo List](https://github.com/ntgarrett/Spotify_multi-add#todo-list)
* [Contact](https://github.com/ntgarrett/Spotify_multi-add#contact)

## Service Architecture

<img src="demo/ArchitectureDiagram.png">
<br>

[![guide](https://img.shields.io/badge/POSTMAN%20DOCUMENTATION-FF6C37?style=for-the-badge&logo=postman&logoColor=white)](https://documenter.getpostman.com/view/11631692/TW74iQBZ)
<br>
<br>

## Technologies 
![image](https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)&nbsp;![image](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)&nbsp;![image](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)&nbsp;![image](https://img.shields.io/badge/Spotify-1ED760?&style=for-the-badge&logo=spotify&logoColor=white)&nbsp;![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)&nbsp;![image](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white) 

Spotify Multi-Add uses the [Spotipy](https://spotipy.readthedocs.io/en/2.16.1/) library to implement [Spotify Authorization Code Flow](https://developer.spotify.com/documentation/general/guides/authorization-guide/#authorization-code-flow). The Flask server is converted into a Serverless AWS Lambda function and deployed via [Zappa](https://github.com/Miserlou/Zappa). The front end is hosted with AWS Amplify and changes pushed to the master branch are built and deployed automatically.
<br>
<br>

## Select a track and add it to more than one playlist

Adding a track to multiple playlists is made easy. Simply search for and select a track, then check the playlists you'd like to add it to. If you have a lot of playlists, use the filter to find specific ones. Press the play button on the track to open it in Spotify.

<img src="demo/DesktopDemo.gif">
<br>

## Responsive styling

Mobile browsing is supported:

<p align="center"><img src="demo/MobileDemo.gif" width=35%></p>

## Todo List

* Improve server error handling
* Implement analytics
* Add a "Create a playlist" feature
<br>
<br>

## Contact

[![guide](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ntgarrett/)&nbsp;![image](https://img.shields.io/badge/garrett.nick.96%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white) 