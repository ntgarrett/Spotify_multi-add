import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

const Track = (props) => {
  const {track} = props;

  return (
    <ListItem>
      <Avatar variant="square" alt="album-cover" src={track.album.images[0].url}/>
      <ListItemText primary={track.name} secondary={(track.artists).map((artist) => artist.name).join(', ')}/>
    </ListItem>
  );
}

export default Track;