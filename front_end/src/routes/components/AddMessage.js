import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  text: {
    justifyContent: "center",
    display: "flex",
    marginBottom: "3vh",
    fontFamily: "Didact Gothic",
    fontSize: "1.5em",
    color: "white",
  },
});

const AddMessage = (props) => {
  const { classes, selectedTrack, selectedPlaylists } = props;

  return (
    <Typography
      noWrap
      component="span"
      className={classes.text}
      style={{ opacity: (Object.keys(selectedTrack).length === 0) ? "0" : "1" }}
    >
      Add "{selectedTrack.name}" to {selectedPlaylists.length} Playlist(s)
    </Typography>
  );
};

export default (withStyles)(styles)(AddMessage);