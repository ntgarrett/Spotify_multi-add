import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBarContainer from './containers/SearchBarContainer';
import PlaylistsContainer from './containers/PlaylistsContainer';
import TrackResultsContainer from './containers/TrackResultsContainer';
import AddButtonContainer from './containers/AddButtonContainer';
import AddMessage from './components/AddMessage';
import Snackbar from '@material-ui/core/Snackbar';
import { Grid } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    minWidth: "100vw",
    minHeight: "100vh",
    background: "linear-gradient(#000000, #1db950)",
  },
  cell: {
    justifyContent: "center",
    width: "40vw",
    marginLeft: "auto",
    marginRight: "auto",
  },
  end: {
    justifyContent: "center",
    marginTop: "7vh",
  },
});

const App = (props) => {
  const { classes } = props;
  const [tracks, setTracks] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState({});
  const [selectedPlaylists, setSelectedPlaylists] = useState([]);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handle_Success_Close = () => {
    setSuccess(false);
  };

  const handle_Error_Close = () => {
    setError(false);
  };

  return (
    <div className={classes.root}>
      <Header />
      <Grid container>
        <Grid item xs={12} sm={6}>
          <div className={classes.cell}>
            <SearchBarContainer
              setTracks={setTracks}
              setSelectedTrack={setSelectedTrack}
            />
            <TrackResultsContainer
              tracks={tracks}
              setSelectedTrack={setSelectedTrack}
              selectedTrack={selectedTrack}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.cell}>
            <PlaylistsContainer
              selectedPlaylists={selectedPlaylists}
              setSelectedPlaylists={setSelectedPlaylists}
            />
          </div>
        </Grid>
      </Grid>
      <Grid container className={classes.end}>
        <Grid item>
          <AddMessage
            selectedTrack={selectedTrack}
            selectedPlaylists={selectedPlaylists}
          />
          <AddButtonContainer
            selectedTrack={selectedTrack}
            selectedPlaylists={selectedPlaylists}
            setSuccess={setSuccess}
            setError={setError}
          />
        </Grid>
      </Grid>
      <div>
        <Snackbar
          open={success}
          autoHideDuration={3000}
          onClose={handle_Success_Close}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          message="Success!"
        />
        <Snackbar
          open={error}
          autoHideDuration={3000}
          onClose={handle_Error_Close}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          message="Oops! Something went wrong."
        />
      </div>
    </div>
  );
}

export default withStyles(styles)(App);