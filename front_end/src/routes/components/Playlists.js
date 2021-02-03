import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CheckBox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

const Playlists = (props) => {
  const { playlists, handleChecked, filtered } = props;

  const plistItems = filtered
    ? playlists.filter(plist => plist.name.toLowerCase().includes(filtered.toLowerCase()))
    : playlists;

  return (
    <div>
      <List>
        {plistItems.map((playlist) => {
          return (
            <ListItem key={playlist.id}>
              <ListItemText>
                <Typography
                  noWrap
                  variant="body1"
                  style={{
                    marginLeft: "1em",
                    fontFamily: "Didact Gothic",
                  }}
                >
                  {playlist.name}
                </Typography>
              </ListItemText>
              <ListItemIcon>
                <CheckBox onChange={(e) => handleChecked(e, playlist)} checked={playlist.isChecked}/>
              </ListItemIcon>
            </ListItem>
          )
        })}
      </List>
    </div>
  );
};

export default Playlists;