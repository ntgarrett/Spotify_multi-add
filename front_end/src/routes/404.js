import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { AuthContext } from '../utils/Context';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
  title: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Didact Gothic",
    paddingTop: "15vh",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Didact Gothic",
    fontSize: "1.5em",
    textTransform: "none",
    marginTop: "15vh",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

const PageNotFound = (props) => {
  const { history, classes, logoutPressed } = props;
  const { authenticated } = useContext(AuthContext);

  const determineRedirect = () => {
    const userStatus = localStorage.getItem('userStatus');
    if (authenticated && userStatus === "true") {
      return "/app";
    } else {
      return "/";
    }
  };

  return (
    logoutPressed ?
    <Redirect to="/"/>
    :
    <div className={classes.root}>
      <Typography
        className={classes.title}
        variant="h1"
      >
        404: Page Not Found
        </Typography>
      <Button
        className={classes.button}
        size="large"
        variant="contained"
        onClick={() => {
          history.push({determineRedirect});
        }}
      >
        Return to Application
        </Button>
    </div>
  );
};

export default withStyles(styles)(PageNotFound);