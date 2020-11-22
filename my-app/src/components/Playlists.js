import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CheckBox from '@material-ui/core/Checkbox';

const Playlists = (props) => {
  const plistItems = props.playlists.map((playlist) =>
    <ListItem key={playlist.id}>
      <ListItemText primary={playlist.name} />
      <ListItemIcon>
        <CheckBox onChange={(e) => props.handleChange(e, playlist)}
        />
      </ListItemIcon>
    </ListItem>

  );
  return (
    <List>
      {plistItems}
    </List>
  );
}

export default Playlists;
