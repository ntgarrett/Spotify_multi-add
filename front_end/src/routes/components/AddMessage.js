import React from 'react';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  popover: {
    fontFamily: "Didact Gothic",
    padding: theme.spacing(2),
  },
  text: {
    fontFamily: "Didact Gothic",
    color: "white",
  },
});

const AddMessage = (props) => {
  const { classes, id, open, handleClick, handlePopoverClose, anchorEl, selectedTrackInfo, selectedPlaylistsInfo } = props;

  return (
    <div className={classes.root}>
      <Typography
        variant="h6"
        className={classes.text}
        onClick={handleClick}
      >
        View Selected Tracks/Playlists
      </Typography>
      <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          color="primary"
      >
        <Typography className={classes.popover}>
          {selectedTrackInfo} <br/> <br/>
          {selectedPlaylistsInfo}
        </Typography>
      </Popover>
    </div>
  );
};

export default (withStyles)(styles)(AddMessage);