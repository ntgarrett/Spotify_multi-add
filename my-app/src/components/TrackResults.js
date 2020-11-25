import React from 'react';
import TrackContainer from '../containers/TrackContainer';
import List from '@material-ui/core/List';
import { Grid } from '@material-ui/core/';

const TrackResults = (props) => {
  const {tracks, setSelectedTrack, selectedTrack} = props;

  return (
    <List>
      {tracks.map((track) => {
        return (
          <Grid item xs={12} sm={6} key={track.id}>
            <TrackContainer
              track={track}
              setSelectedTrack={setSelectedTrack}
              selectedTrack={selectedTrack}
            />
          </Grid>
        );
      })}
    </List>
  );
}

export default TrackResults;