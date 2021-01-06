import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Didact Gothic",
    fontSize: "4em",
    color: "white",
  },
  description: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Didact Gothic",
    fontSize: "1.2em",
    color: "white",
    paddingTop: "2vh",
  }
});

const Header = (props) => {
  const { classes } = props;

  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item>
        <Typography className={classes.title}>
          Spotify Multi-Add
        </Typography>
        <Typography className={classes.description}>
          Select a track, the playlist(s) to add it to, then click the add button!
        </Typography>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Header);