import React from 'react';
import AddButton from '../components/AddButton';
import { AddTrackToPlaylists } from '../../utils/api';
import { useCookies } from 'react-cookie';

const AddButtonContainer = (props) => {
  const { selectedTrack, setSelectedTrack, selectedPlaylists, setSuccess, setGoTo401 } = props;
  const [cookies] = useCookies(['userID']);

  const playlistIDs = (selectedPlaylists) => {
    let plistIDs = []
    selectedPlaylists.forEach((plist) => {
      plistIDs.push(plist.id);
    });
    return plistIDs;
  }

  const handleClick = () => {
    AddTrackToPlaylists(cookies.userID, selectedTrack.uri, playlistIDs(selectedPlaylists))
      .then(() => {
        setSuccess(true);
        setSelectedTrack({});
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 401) {
          setGoTo401(true);
        }
      });
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