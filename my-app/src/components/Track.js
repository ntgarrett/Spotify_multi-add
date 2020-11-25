import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ButtonBase from '@material-ui/core/ButtonBase'

const Track = (props) => {
  const {track} = props;

  return (
    <ButtonBase key={track.id} onClick={e => {props.handleClick(e,track)}}>
      <ListItem>
        <Avatar variant="square" alt="album-cover" src={track.album.images[0].url} />
        <ListItemText primary={track.name} secondary={(track.artists).map((artist) => artist.name).join(', ')} />
      </ListItem>
    </ButtonBase>
  );
}

export default Track;