import React from 'react';
import Button from '@material-ui/core/Button';

const AddButton = (props) => {
  return (
    <Button
      variant="outlined"
      onClick={props.handleClick}
      disabled={!((props.selectedTrack !== "") && (props.selectedPlaylists !== []))}>
      Add to Playlist(s)
    </Button>
  );
}

export default AddButton;