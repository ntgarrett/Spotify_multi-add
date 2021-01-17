import axios from 'axios';

const API_ENDPOINT = "https://5yuy2loja7.execute-api.us-east-2.amazonaws.com/dev";

const instance = axios.create({
  baseURL: API_ENDPOINT,
  withCredentials: true,
  timeout: 5000
});


const GetAuthURL = async (id) => {
  return await instance({
    method: 'get',
    url: 'verify',
    headers: {
      'Authorization': id
    },
  });
};

const SendCallbackCode = async (id, authCode) => {
  let data = { code: authCode };
  return await instance({
    method: 'post',
    url: 'callback',
    data: data,
    headers: {
      'Authorization': id
    },
  });
};

const RetrievePlaylists = async (id) => {
  return await instance({
    method: 'get',
    url: API_ENDPOINT + 'playlists',
    headers: {
      'Authorization': id
    },
  });
};

const SearchForTrack = async (id, key) => {
  return await instance({
    method: 'get',
    url: `search?key=${key}`,
    headers: {
      'Authorization': id,
    },
  });
};

const AddTrackToPlaylists = async (id, trackID, playlists) => {
  let data = { Track_ID: trackID, Playlist_IDs: playlists };
  return await instance({
    method: 'post',
    url: 'addtrack',
    headers: {
      'Authorization': id,
    },
    data: data,
  });
};

const SignOut = async (id) => {
  return await instance({
    method: 'post',
    url: 'signout',
    headers: {
      'Authorization': id,
    },
  });
};

export { RetrievePlaylists, SearchForTrack, AddTrackToPlaylists, GetAuthURL, SendCallbackCode, SignOut, API_ENDPOINT };