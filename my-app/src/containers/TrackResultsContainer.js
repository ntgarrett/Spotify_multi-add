import React from 'react';
import TrackResults from '../components/TrackResults';

const TrackResultsContainer = (props) => {
  const {tracks, setSelectedTrack} = props;

  return (
    <TrackResults
      tracks={tracks}
      setSelectedTrack={setSelectedTrack}
    />
  );
}

export default TrackResultsContainer;