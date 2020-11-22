import axios from 'axios';

const API_ENDPOINT = "http://127.0.0.1:5000/api/"

async function RetrievePlaylists() {
  return await axios.get(API_ENDPOINT + "playlists");
};

async function SearchForTrack(key) {
  return await axios.get(API_ENDPOINT + `search?key=${key}`)
}

export { RetrievePlaylists, SearchForTrack, API_ENDPOINT };