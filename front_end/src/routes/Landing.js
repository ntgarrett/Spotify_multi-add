import React from 'react';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {
    minWidth: "100vw",
    minHeight: "100vh",
    background: "linear-gradient(#000000, #1db950)",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Didact Gothic",
    fontSize: "6em",
    color: "white",
    paddingTop: "15vh",
  },
  about: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Didact Gothic",
    fontSize: "1.5em",
    color: "white",
    paddingTop: "5vh",
  },
  info: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Didact Gothic",
    fontSize: "1.2em",
    color: "white",
    paddingTop: "15vh",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Didact Gothic",
    fontSize: "1.5em",
    textTransform: "none",
    marginTop: "5vh",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

const Landing = (props) => {
  const { history, classes } = props;

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>
        Spotify Multi-Add
      </Typography>
      <Typography className={classes.about}>
        Search for tracks, and add them to one or more of your playlists
      </Typography>
      <Typography className={classes.info}>
       * You need a Spotify premium account to use this website *
      </Typography>
      <Button
        className={classes.button}
        size="large"
        variant="contained"
        onClick={() => history.push("/login")}
      >
        Login with Spotify
      </Button>
    </div>
  );
};

export default withStyles(styles)(Landing);