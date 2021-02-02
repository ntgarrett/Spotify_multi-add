import React, { useState, useEffect, useContext } from 'react';
import { useCookies } from 'react-cookie';
import { AuthContext } from '../utils/Context';
import { Redirect } from 'react-router-dom';
import SearchBarContainer from './containers/SearchBarContainer';
import PlaylistsContainer from './containers/PlaylistsContainer';
import TrackResultsContainer from './containers/TrackResultsContainer';
import AddButtonContainer from './containers/AddButtonContainer';
import PlaylistFilterContainer from './containers/PlaylistFilterContainer';
import AddMessageContainer from './containers/AddMessageContainer';
import Snackbar from '@material-ui/core/Snackbar';
import Paper from '@material-ui/core/Paper';
import { Grid, Typography } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  cell: {
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    height: "50vh",
    paddingTop: theme.spacing(6),
    width: "40vw",
    [theme.breakpoints.down('sm')]: {
      width: "95%"
    },
    paddingBottom: theme.spacing(3),
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
    padding: theme.spacing(1),
    fontFamily: "Didact Gothic",
  },
  plistheadingpaper: {
    borderBottomLeftRadius: "0",
    borderBottomRightRadius: "0",
  },
  plistcontents: {
    overflow: "auto",
    height: "100%",
    borderTopLeftRadius: "0",
    borderTopRightRadius: "0",
  },
  trackresultsbox: {
    overflow: "auto",
    height: "100%",
    borderTopLeftRadius: "0",
    borderTopRightRadius: "0",
  },
  bottom: {
    flexGrow: 1,
  },
  addmessage: {
    marginTop: theme.spacing(10),
    padding: theme.spacing(2),
  },
  addbutton: {
    justifyContent: "center",
    display: "flex",
    [theme.breakpoints.down('sm')]: {
      marginBottom: "10em",
    },
  },
});

const MainPage = (props) => {
  const { classes, theme } = props;
  const [cookies] = useCookies(["userID"]);

  const { authenticated, setAuthenticated } = useContext(AuthContext);
  const [goTo401, setGoTo401] = useState(false);

  const [tracks, setTracks] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState({});
  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylists, setSelectedPlaylists] = useState([]);

  const [filtered, setFiltered] = useState(null);
  const [noResults, setNoResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (typeof cookies.userID == "undefined") {
      setAuthenticated(false);
    }
  }, [cookies.userID, setAuthenticated]);

  const handleSnackBarClose = () => {
    setSuccess(false);
  };

  return (
    authenticated && goTo401 === false ?
      (<div className={classes.root}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <div className={classes.cell}>
              <SearchBarContainer
                setTracks={setTracks}
                setSelectedTrack={setSelectedTrack}
                setNoResults={setNoResults}
                setLoading={setLoading}
                setGoTo401={setGoTo401}
              />
              <Paper className={classes.trackresultsbox}>
                {noResults ?
                  <Typography className={classes.noresults}>
                    No results found
                  </Typography>
                  :
                  <TrackResultsContainer
                    tracks={tracks}
                    theme={theme}
                    setSelectedTrack={setSelectedTrack}
                    selectedTrack={selectedTrack}
                    loading={loading}
                  />
              }
            </Paper>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.cell}>
              <div>
                <PlaylistFilterContainer
                  setPlaylists={setPlaylists}
                  setFiltered={setFiltered}
                  setGoTo401={setGoTo401}
                />
              </div>
              <Paper className={classes.plistcontents}>
                <PlaylistsContainer
                  playlists={playlists}
                  setPlaylists={setPlaylists}
                  filtered={filtered}
                  setSelectedPlaylists={setSelectedPlaylists}
                />
              </Paper>
            </div>
          </Grid>
        </Grid>
        <Grid container className={classes.bottom}>
          <Grid item xs={12}>
            <div className={classes.addmessage}>
              <AddMessageContainer
                selectedTrack={selectedTrack}
                selectedPlaylists={selectedPlaylists}
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.addbutton}>
              <AddButtonContainer
                selectedTrack={selectedTrack}
                setSelectedTrack={setSelectedTrack}
                selectedPlaylists={selectedPlaylists}
                setSuccess={setSuccess}
                setGoTo401={setGoTo401}
              />
            </div>
          </Grid>
        </Grid>
        <Snackbar
          open={success}
          autoHideDuration={3000}
          onClose={handleSnackBarClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          message="Success!"
        />
      </div>)
      : (goTo401 
        ? <Redirect to="/unauthorized"/>
        : <Redirect to="/" /> )
  );
};

export default withStyles(styles)(MainPage);