import React from 'react';
import Logo from '../../assets/appicon.svg';
import Tooltip from '@material-ui/core/Tooltip';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import Typography from "@material-ui/core/Typography";
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {
    flexShrink: 0,
  },
  title: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Didact Gothic",
    padding: "1vh",
    marginRight: "auto",
    marginLeft: "0.5vw",
  },
  logoutbutton: {
    fontFamily: "Didact Gothic",
    display: "flex",
    marginLeft: "auto",
  },
});

const AppLogo = () => {
  return (
    <img
      src={Logo}
      style={{ height: 30, width: 30 }}
      alt="website logo"
    />
  );
};

const TopBar = (props) => {
  const { classes, theme, setTheme, handle_Sign_Out, authenticated } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <ToolBar>
          <AppLogo />
          <Typography className={classes.title} variant={window.outerWidth > 600 ? "h6" : "body2"}>
            Spotify Multi-Add
          </Typography>
          <Button
            className={classes.logoutbutton}
            onClick={handle_Sign_Out}
            disabled={!authenticated}
            style={{ opacity: authenticated ? "1" : "0" }}
          >
            Sign Out
          </Button>
          <Tooltip 
            title="Toggle theme" 
            arrow
            TransitionComponent={({ children }) => children}  
          >
            <IconButton
              onClick={() => {
                localStorage.setItem("themePreference", !theme);
                setTheme(!theme);
              }}
            >
              <InvertColorsIcon />
            </IconButton>
          </Tooltip>
        </ToolBar>
      </AppBar>
    </div>
  );
};

export default (withStyles)(styles)(TopBar);