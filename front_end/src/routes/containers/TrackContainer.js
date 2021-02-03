import React from 'react';
import Track from '../components/Track';

const TrackContainer = (props) => {
  const {track, setSelectedTrack, selectedTrack, theme} = props;

  const handleClick = (e,track) => {
    if (track === selectedTrack) {
      setSelectedTrack({});
    } else {
      setSelectedTrack(track);
    }
  }

  return (
    <Track 
      track={track}
      handleClick={handleClick}
      selectedTrack={selectedTrack}
      theme={theme}
    />
  );
};

export default TrackContainer;