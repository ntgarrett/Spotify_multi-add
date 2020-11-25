import React from 'react';
import Track from '../components/Track';

const TrackContainer = (props) => {
  const {track, setSelectedTrack} = props;

  function handleClick(e,track) {
    setSelectedTrack(track);
  }

  return (
    <Track 
      track={track}
      handleClick={handleClick}
    />
  );
}

export default TrackContainer;