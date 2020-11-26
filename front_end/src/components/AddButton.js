import React from 'react';
import Button from '@material-ui/core/Button';

const AddButton = (props) => {
  return (
    <Button
      variant="outlined"
      onClick={props.handleClick}
      disabled={((Object.keys(props.selectedTrack).length === 0) || (props.selectedPlaylists.length === 0))}
    >
      Add to Playlist(s)
    </Button>
  );
}

export default AddButton;