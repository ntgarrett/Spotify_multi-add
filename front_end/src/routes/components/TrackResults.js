import React from 'react';
import TrackContainer from '../containers/TrackContainer';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import { Grid } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  paper: {
    overflow: "auto",
    maxHeight: "50vh",
    borderTopLeftRadius: "0",
    borderTopRightRadius: "0",
    
  },
});

const TrackResults = (props) => {
  const { classes, tracks, setSelectedTrack, selectedTrack } = props;

  return (
    <div>
      <Paper
        className={classes.paper}
        style={{ visibility: tracks.length > 0 ? "visible" : "hidden" }}
      >
        <List>
          {tracks.map((track) => {
            return (
              <Grid item key={track.id}>
                <TrackContainer
                  track={track}
                  setSelectedTrack={setSelectedTrack}
                  selectedTrack={selectedTrack}
                />
              </Grid>
            );
          })}
        </List>
      </Paper>
    </div>
  );
}

export default withStyles(styles)(TrackResults);