import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBarContainer from './containers/SearchBarContainer';
import PlaylistsContainer from './containers/PlaylistsContainer';
import TrackResultsContainer from './containers/TrackResultsContainer';
import AddButtonContainer from './containers/AddButtonContainer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Grid } from '@material-ui/core/';

const App = () => {
  const [tracks, setTracks] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState({});
  const [selectedPlaylists, setSelectedPlaylists] = useState([]);

  return (
    <BrowserRouter>
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
              selectedTrack={selectedTrack}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <PlaylistsContainer
              selectedPlaylists={selectedPlaylists}
              setSelectedPlaylists={setSelectedPlaylists} />
          </Grid>
        </Grid>
        <AddButtonContainer
          selectedTrack={selectedTrack}
          selectedPlaylists={selectedPlaylists}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;