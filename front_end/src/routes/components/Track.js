import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ButtonBase from '@material-ui/core/ButtonBase';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  trackinfo: {
    marginLeft: "1.5em",
    marginRight: "1em",
  },
  title: {
    fontFamily: "Didact Gothic",
    maxWidth: "100%",
  },
  artist: {
    fontFamily: "Didact Gothic",
  },
  playbutton: {
    marginRight: "0.5em",
  },
});

const Track = (props) => {
  const { classes, track, handleClick, selectedTrack, theme } = props;

  function colorSelector(track, selectedTrack) {
    return (track === selectedTrack)
      ? (theme ? "#b6b6b6" : "#595959")
      : "inherit";
  }

  const preventDefault = (event) => event.preventDefault;

  return (
    <div>
      <ButtonBase
        key={track.id}
        onClick={e => { handleClick(e, track) }}
        style={{
          width: "100%",
          backgroundColor: colorSelector(track.id, selectedTrack.id),
        }}
      >
        <ListItem>
          <Avatar variant="square" alt="album-cover" src={track.album.images[0].url} />
          <ListItemText
            className={classes.trackinfo}
            primary={
              <Typography
                className={classes.title}
                noWrap
                variant="body1"
              >
                {track.name}
              </Typography>
            }
            secondary={
              <Typography
                className={classes.artist}
                noWrap
                variant="body2"
              >
                {(track.artists).map((artist) => artist.name).join(', ')}
              </Typography>
            }
          />
          <Tooltip 
            title="Open in Spotify App"
            TransitionComponent={({ children }) => children}    
          >
            <Link
              href={track.uri}
              onClick={preventDefault}
              className={classes.playbutton}
            >
              <PlayCircleFilledIcon color="secondary"/>
            </Link>
          </Tooltip>
        </ListItem>
      </ButtonBase>
    </div>
  );
};

export default withStyles(styles)(Track);