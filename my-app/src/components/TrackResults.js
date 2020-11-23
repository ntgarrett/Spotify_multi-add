import React from 'react';
import Track from '../components/Track';
import List from '@material-ui/core/List';

const TrackResults = (props) => {
  const {tracks} = props;
  
  return (
    <List>
      {tracks.map((track) => {
        return (<Track key={track.id} track={track} />);
      })}
    </List>
  );
}

export default TrackResults;