import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    flexShrink: 0,
  },
  bottombar: {
    top: "auto",
    bottom: 0,
    flexShrink: 0,
  },
  about: {
    fontFamily: "Didact Gothic",
  },
  text: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Didact Gothic",
    padding: theme.spacing(2)
  },
});

const BottomBar = (props) => {
  const { classes, anchorEl, id, open, handleClick, handleClose } = props;

  const preventDefault = (event) => event.preventDefault;

  return (
    <AppBar className={classes.bottombar}>
      <ToolBar>
        <Tooltip 
          title="View additional information" 
          placement="top" 
          arrow
          TransitionComponent={({ children }) => children}  
        >
          <Button
            className={classes.about}
            onClick={handleClick}
          >
            About
          </Button>
        </Tooltip>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          color="primary"
        >
          <Typography className={classes.text}>
            This is a website I created to practice developing a full-stack application from scratch. Search for and select a track, then select one or more playlists to add it to.<br /><br />Contact: garrett.nick.96@gmail.com<br /><br />This website requires the use of cookies in order to function properly. The cookie is created only to generate a unique identity for your device in order to establish a connection to Spotify's web services. No personal or Spotify account information is stored or used by this website's cookie.
          </Typography>
        </Popover>
        <Tooltip 
          title="My GitHub Profile" 
          arrow
          TransitionComponent={({ children }) => children}  
        >
          <Link
            href="https://github.com/ntgarrett"
            target="_blank"
            rel="noreferrer"
            onClick={preventDefault}
            style={{ marginLeft: "auto" }}
          >
            <IconButton>
              <GitHubIcon />
            </IconButton>
          </Link>
        </Tooltip>
        <Tooltip 
          title="My LinkedIn Profile" 
          arrow
          TransitionComponent={({ children }) => children}    
        >
          <Link
            href="https://www.linkedin.com/in/ntgarrett/"
            target="_blank"
            rel="noreferrer"
            onClick={preventDefault}
          >
            <IconButton>
              <LinkedInIcon />
            </IconButton>
          </Link>
        </Tooltip>
      </ToolBar>
    </AppBar>
  );
};

export default (withStyles)(styles)(BottomBar);
