import React from 'react';
import AddButton from '../components/AddButton';
import { AddTrackToPlaylists } from '../../utils/api';
import { useCookies } from 'react-cookie';

const AddButtonContainer = (props) => {
  const {selectedTrack, setSelectedTrack, selectedPlaylists, setSuccess, setError} = props;
  const [cookies] = useCookies(['userID']);

  const handleClick = () => {
    try {
      AddTrackToPlaylists(cookies.userID, selectedTrack.uri, selectedPlaylists)
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            setSuccess(true);
            setSelectedTrack({});
          }
          else {
            setError(true);
          }
        }); 
    } catch (error) {
      setError(true);
    }
  };

  return (
    <AddButton 
      handleClick={handleClick}
      selectedTrack={selectedTrack}
      selectedPlaylists={selectedPlaylists}
    />
  );
};

export default AddButtonContainer;