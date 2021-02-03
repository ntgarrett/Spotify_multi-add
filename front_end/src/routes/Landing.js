import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useCookies } from 'react-cookie';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  description: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "Didact Gothic",
    paddingTop: "25vh",
  },
  inforoot: {
    display: "flex",
    justifyContent: "center",
  },
  info: {

    textAlign: "center",
    fontFamily: "Didact Gothic",
    padding: theme.spacing(4)
  },
  loginbutton: {
    display: "flex",
    fontFamily: "Didact Gothic",
    fontSize: "1.5em",
    textTransform: "none",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

const Landing = (props) => {
  const { history, classes } = props;
  const [cookies, setCookie] = useCookies(["userID"]);

  useEffect(() => {
    if (typeof cookies.userID == "undefined") {
      const id = uuidv4();
      setCookie("userID", id, {
        expires: new Date(1894060029000)
      });
    }
  });

  useEffect(() => {
    localStorage.setItem("userStatus", "false");
  }, []);

  return (
    <div className={classes.root}>
      <Typography
        className={classes.description}
        variant="h4"
      >
        Add tracks to multiple playlists simultaneously
      </Typography>
      <div className={classes.inforoot}>
        <Typography
          className={classes.info}
          variant="body1"
        >
          You need&nbsp;
          <Link
            href="https://www.spotify.com/us/premium/"
            target="_blank"
            rel="noreferrer"
            color="textSecondary"
          >
            Spotify Premium
          </Link>
          &nbsp;to use this website
        </Typography>
      </div>
      <Button
        className={classes.loginbutton}
        size="large"
        variant="contained"
        color="primary"
        onClick={() => history.push("/login")}
      >
        Login with Spotify
        </Button>
    </div>
  );
};

export default withStyles(styles)(Landing);