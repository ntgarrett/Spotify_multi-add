import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    justifyContent: "center",
    display: "flex",
  },
  button: {
    fontFamily: "Didact Gothic",
    fontSize: "1.5em",
    //textPrimary: "white",
    textTransform: "none",
  }
});

const AddButton = (props) => {
  const { classes, selectedTrack, selectedPlaylists, handleClick } = props;
  return (
    <div className={classes.root}>
      <Button
        theme="dark"
        className={classes.button}
        size="large"
        variant="contained"
        onClick={handleClick}
        disabled={((Object.keys(selectedTrack).length === 0) || (selectedPlaylists.length === 0))}
      >
        Add to Playlist(s)
      </Button>
    </div>
  );
}

export default withStyles(styles)(AddButton);