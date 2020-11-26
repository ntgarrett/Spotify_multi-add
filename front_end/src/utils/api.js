import axios from 'axios';

const API_ENDPOINT = "http://127.0.0.1:5000/api/";

async function RetrievePlaylists() {
  return await axios.get(API_ENDPOINT + "playlists");
}

async function SearchForTrack(key) {
  return await axios.get(API_ENDPOINT + `search?key=${key}`);
}

async function AddTrackToPlaylists(trackID, playlists) {
  let data = { Track_ID: trackID, Playlist_IDs: playlists};
  return await axios.post((API_ENDPOINT + 'addtrack'), data);
}

export { RetrievePlaylists, SearchForTrack, AddTrackToPlaylists, API_ENDPOINT };