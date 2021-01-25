import axios from 'axios';

const API_ENDPOINT = 
  process.env.NODE_ENV === "production"
  ? "https://9z83vi2nh9.execute-api.us-east-2.amazonaws.com/dev"
  : "http://localhost:5000/";

const instance = axios.create({
  baseURL: API_ENDPOINT,
  withCredentials: true,
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
    url: 'playlists',
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