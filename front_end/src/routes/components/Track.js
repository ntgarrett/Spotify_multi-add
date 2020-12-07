import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  button: {
    width: "100%",
  },
  trackinfo: {
    marginLeft: "1.5em",
  },
  primary: {
    fontFamily: "Didact Gothic",
    maxWidth: "100%",
  },
  secondary: {
    fontFamily: "Didact Gothic",
    fontSize: "1em",
    fontStyle: "italic",
  },
});

const Track = (props) => {
  const { classes, track } = props;

  return (
    <div>
      <ButtonBase
        className={classes.button}
        key={track.id}
        onClick={e => { props.handleClick(e, track) }}
      >
        <ListItem>
          <Avatar variant="square" alt="album-cover" src={track.album.images[0].url} />
          <ListItemText 
            className={classes.trackinfo}
            primary={<Typography noWrap className={classes.primary}>{track.name}</Typography>}
            secondary={<Typography noWrap className={classes.secondary}>{(track.artists).map((artist) => artist.name).join(', ')}</Typography>}
          />
        </ListItem>
      </ButtonBase>
    </div>
  );
}

export default withStyles(styles)(Track);