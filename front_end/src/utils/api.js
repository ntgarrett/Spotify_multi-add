const axios = require('axios');
const API_ENDPOINT = "https://localhost:5000/api/";

const GetAuthURL = async (id) => {
  return await axios({
    method: 'get',
    url: API_ENDPOINT + 'verify',
    headers: {
      'Authorization': id
    },
    withCredentials: true
  });
};

const SendCallbackCode = async (id, authCode) => {
  let data = { code: authCode };
  return await axios({
    method: 'post',
    url: API_ENDPOINT + 'callback',
    data: data,
    headers: {
      'Authorization': id
    },
    withCredentials: true,
  });
};

const RetrievePlaylists = async (id) => {
  return await axios({
    method: 'get',
    url: API_ENDPOINT + 'playlists',
    headers: {
      'Authorization': id
    },
    withCredentials: true,
  });
};

const SearchForTrack = async (id, key) => {
  return await axios({
    method: 'get',
    url: API_ENDPOINT + `search?key=${key}`,
    headers: {
      'Authorization': id,
    },
    withCredentials: true,
  });
};

const AddTrackToPlaylists = async (id, trackID, playlists) => {
  let data = { Track_ID: trackID, Playlist_IDs: playlists };
  return await axios({
    method: 'post',
    url: API_ENDPOINT + 'addtrack',
    headers: {
      'Authorization': id,
    },
    data: data,
    withCredentials: true,
  });
};

const SignOut = async (id) => {
  return await axios({
    method: 'post',
    url: API_ENDPOINT + 'signout',
    headers: {
      'Authorization': id,
    },
    withCredentials: true,
  });
};

export { RetrievePlaylists, SearchForTrack, AddTrackToPlaylists, GetAuthURL, SendCallbackCode, SignOut, API_ENDPOINT };