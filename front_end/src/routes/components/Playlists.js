import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CheckBox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

const Playlists = (props) => {
    const plistItems = props.playlists.map((playlist) =>
    <ListItem key={playlist.id}>
      <ListItemText>
        <Typography
          noWrap
          style={{
            marginLeft: "1em",
            fontFamily: "Didact Gothic",
            fontSize: "1.2em",
          }}
        >
          {playlist.name}
        </Typography>
      </ListItemText>
      <ListItemIcon>
        <CheckBox onChange={(e) => props.handleChange(e, playlist)} />
      </ListItemIcon>
    </ListItem>

  );
  return (
    <div>
      <List>
        {plistItems}
      </List>
    </div>
  );
}

export default Playlists;