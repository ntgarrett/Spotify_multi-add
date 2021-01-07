import React, { useState } from 'react';
import './App.css';
import { SignOut } from '../utils/api';
import { useCookies } from 'react-cookie';
import { Redirect } from 'react-router-dom';
import Header from './components/Header';
import SearchBarContainer from './containers/SearchBarContainer';
import PlaylistsContainer from './containers/PlaylistsContainer';
import TrackResultsContainer from './containers/TrackResultsContainer';
import AddButtonContainer from './containers/AddButtonContainer';
import AddMessage from './components/AddMessage';
import Snackbar from '@material-ui/core/Snackbar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Typography, Container, CircularProgress } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
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
    paddingTop: "3vh",
  },
  addbutton: {
    justifyContent: "center",
    marginTop: "5vh",
  },
  noresults: {
    fontFamily: "Didact Gothic",
    fontStyle: "Italic",
    color: "grey",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    marginTop: "5vh",
  },
  plistheading: {
    display: "flex",
    justifyContent: "center",
    padding: "0.4em",
    fontFamily: "Didact Gothic",
    fontSize: "1.3em",
  },
  plistheadingbox: {
    borderBottomLeftRadius: "0",
    borderBottomRightRadius: "0",
  },
  plistcontents: {
    overflow: "auto",
    height: "50vh",
    borderTopLeftRadius: "0",
    borderTopRightRadius: "0",
  },
  trackresultsbox: {
    overflow: "auto",
    height: "50vh",
    borderTopLeftRadius: "0",
    borderTopRightRadius: "0",
  },
  signoutbutton: {
    color: "white",
    fontFamily: "Didact Gothic",
    marginLeft: "auto",
    marginRight: "4vw",
    marginTop: "1vh",
  },
});

const App = (props) => {
  const { classes } = props;
  const [tracks, setTracks] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState({});
  const [noResults, setNoResults] = useState(false);
  const [selectedPlaylists, setSelectedPlaylists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["userID"]);

  const handle_Success_Close = () => {
    setSuccess(false);
  };

  const handle_Error_Close = () => {
    setError(false);
  };

  const handle_Sign_Out = () => {
    SignOut(cookies.userID)
  };

  return (
    (typeof cookies.userID == "undefined") ?
      <Redirect to="/" />
      :
      <div className={classes.root}>
        <Toolbar
          style={{ minHeight: "3vh" }}
        >
          <Button
            className={classes.signoutbutton}
            onClick={handle_Sign_Out}
          >
            Sign Out
          </Button>
        </Toolbar>
        <Header />
        <Grid container>
          <Grid item xs={12} sm={6}>
            <div className={classes.cell}>
              <SearchBarContainer
                setTracks={setTracks}
                setSelectedTrack={setSelectedTrack}
                setNoResults={setNoResults}
                setLoading={setLoading}
              />
              <Paper className={classes.trackresultsbox}>
                {noResults ?
                  <Typography className={classes.noresults}>
                    No results found
                  </Typography>
                  :
                  (
                    loading ?
                      <Container
                        style={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <CircularProgress />
                      </Container>
                      :
                      <TrackResultsContainer
                        tracks={tracks}
                        setSelectedTrack={setSelectedTrack}
                        selectedTrack={selectedTrack}
                      />
                  )
                }
              </Paper>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.cell}>
              <Paper className={classes.plistheadingbox} elevation={0}>
                <Typography className={classes.plistheading}>
                  My Playlists
              </Typography>
              </Paper>
              <Paper className={classes.plistcontents}>
                <PlaylistsContainer
                  selectedPlaylists={selectedPlaylists}
                  setSelectedPlaylists={setSelectedPlaylists}
                />
              </Paper>
            </div>
          </Grid>
        </Grid>
        <Grid container className={classes.addbutton}>
          <Grid item>
            <AddMessage
              selectedTrack={selectedTrack}
              selectedPlaylists={selectedPlaylists}
            />
            <AddButtonContainer
              selectedTrack={selectedTrack}
              setSelectedTrack={setSelectedTrack}
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
            theme="light"
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