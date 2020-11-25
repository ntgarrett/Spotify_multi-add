import React from 'react';
import TrackContainer from '../containers/TrackContainer';
import List from '@material-ui/core/List';

const TrackResults = (props) => {
  const {tracks, setSelectedTrack, selectedTrack} = props;
  
  return (
    <List>
      {tracks.map((track) => {
        return (
          <TrackContainer 
            key={track.id}
            track={track}
            setSelectedTrack={setSelectedTrack}
            selectedTrack={selectedTrack}
          />
        );
      })}
    </List>
  );
}

export default TrackResults;