import React from 'react';
import TrackResults from '../components/TrackResults';

const TrackResultsContainer = (props) => {
  const {tracks, setSelectedTrack, selectedTrack} = props;

  return (
    <TrackResults
      tracks={tracks}
      setSelectedTrack={setSelectedTrack}
      selectedTrack={selectedTrack}
    />
  );
}

export default TrackResultsContainer;