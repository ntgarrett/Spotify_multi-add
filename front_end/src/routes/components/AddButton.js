import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  button: {
    fontFamily: "Didact Gothic",
    textTransform: "none",
  },
  text: {
    fontFamily: "Didact Gothic",
    padding: theme.spacing(1),
  },
});

const AddButton = (props) => {
  const { classes, selectedTrack, selectedPlaylists, handleClick } = props;
  return (
    <div>
      <Button
        className={classes.button}
        size="large"
        variant="contained"
        onClick={handleClick}
        disabled={((Object.keys(selectedTrack).length === 0) || (selectedPlaylists.length === 0))}
      >
        <Typography
          className={classes.text}
          variant="h5"
        >
          Add to Playlist(s)
        </Typography>
      </Button>
    </div>
  );
}

export default withStyles(styles)(AddButton);