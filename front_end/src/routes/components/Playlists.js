import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CheckBox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  headingpaper: {
    borderBottomLeftRadius: "0",
    borderBottomRightRadius: "0",
  },
  headingtitle: {
    display: "flex",
    justifyContent: "center",
    padding: "0.4em",
    fontFamily: "Didact Gothic",
    fontSize: "1.3em",
  },
  itemlist: {
    overflow: "auto",
    maxHeight: "50vh",
    borderTopLeftRadius: "0",
    borderTopRightRadius: "0",
  },
  text: {
    marginLeft: "1em",
    fontFamily: "Didact Gothic",
    fontSize: "1.2em",
  }
});

const Playlists = (props) => {
  const { classes } = props;

  const plistItems = props.playlists.map((playlist) =>
    <ListItem key={playlist.id}>
      <ListItemText>
        <Typography
          noWrap
          className={classes.text}
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
      <Paper className={classes.headingpaper} elevation={0}>
        <Typography className={classes.headingtitle}>
          My Playlists
        </Typography>
      </Paper>
      <Paper className={classes.itemlist} style={{ visibility: props.playlists.length > 0 ? "visible" : "hidden" }}>
        <List>
          {plistItems}
        </List>
      </Paper>
    </div>
  );
}

export default withStyles(styles)(Playlists);