import React from 'react';
import AddButton from '../components/AddButton';
import { AddTrackToPlaylists } from '../../utils/api';

const AddButtonContainer = (props) => {
  const {selectedTrack, selectedPlaylists} = props;

  const handleClick = () => {
    try {
      AddTrackToPlaylists(selectedTrack.uri, selectedPlaylists)
        .then((response) => {
          console.log(response);
        }); 
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AddButton 
      handleClick={handleClick}
      selectedTrack={selectedTrack}
      selectedPlaylists={selectedPlaylists}
    />
  );
}

export default AddButtonContainer;