import React from 'react';
import TrackContainer from '../containers/TrackContainer';
import List from '@material-ui/core/List';
import { Grid } from '@material-ui/core/';

const TrackResults = (props) => {
  const { tracks, setSelectedTrack, selectedTrack } = props;

  return (
    <div>
      <List style={{ visibility: tracks.length > 0 ? "visible" : "hidden" }}>
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
    </div>
  );
}

export default TrackResults;