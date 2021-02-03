import React, { useState } from 'react';
import AddMessage from '../components/AddMessage';

const AddMessageContainer = (props) => {
  const { selectedTrack, selectedPlaylists } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const selectedTrackInfo = (Object.keys(selectedTrack).length === 0)
    ? 'No track selected'
    : 'Track: "' + selectedTrack.name + '" - ' + (selectedTrack.artists).map((artist) => artist.name).join(', ')

  const selectedPlaylistsInfo = (Object.keys(selectedPlaylists).length === 0)
    ? 'No playlists selected'
    : 'Playlists (' + (Object.keys(selectedPlaylists).length) + '): ' + selectedPlaylists.map((playlist) => playlist.name).join(', ')

  return (
    <AddMessage
      id={id}
      anchorEl={anchorEl}
      open={open}
      selectedTrackInfo={selectedTrackInfo}
      selectedPlaylistsInfo={selectedPlaylistsInfo}
      handleClick={handleClick}
      handlePopoverClose={handlePopoverClose}
    />
  );
};

export default AddMessageContainer;