import React from 'React';
import TrackResults from '../components/TrackResults';

const TrackResultsContainer = (props) => {
  const {tracks, setSelectedTrack} = props;



  return (
    <TrackResults
      tracks={tracks}
    />
  );
}

export default TrackResultsContainer;