import React from 'react';
import TrackResults from '../components/TrackResults';

const TrackResultsContainer = (props) => {
  const {tracks, setSelectedTrack, selectedTrack, theme, loading} = props;

  return (
    <TrackResults
      tracks={tracks}
      theme={theme}
      setSelectedTrack={setSelectedTrack}
      selectedTrack={selectedTrack}
      loading={loading}
    />
  );
};

export default TrackResultsContainer;