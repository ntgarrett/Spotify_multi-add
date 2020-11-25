import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBarContainer from './containers/SearchBarContainer';
import PlaylistsContainer from './containers/PlaylistsContainer';
import TrackResultsContainer from './containers/TrackResultsContainer';
import { Grid } from '@material-ui/core/';

function App() {
  const [tracks, setTracks] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState('');
  const [selectedPlaylists, setSelectedPlaylists] = useState([]);

  return (
    <div>
      <Header />
      <Grid container alignContent="flex-start">
          <Grid item xs={12} sm={6}>
            <SearchBarContainer 
              setTracks={setTracks}
              />
            <TrackResultsContainer 
              tracks={tracks}
              setSelectedTrack={setSelectedTrack}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <PlaylistsContainer 
              selectedPlaylists={selectedPlaylists}
              setSelectedPlaylists={setSelectedPlaylists}/>
          </Grid> 
      </Grid>
    </div>
  );
}

export default App;