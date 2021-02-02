import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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

const UnauthorizedPage = (props) => {
  const { history, classes, logoutPressed } = props;
  const { setAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    setAuthenticated(false);
  }, [setAuthenticated]);

  return (
    logoutPressed ?
    <Redirect to="/"/>
    :
    <div className={classes.root}>
      <Typography
        className={classes.title}
        variant="h1"
      >
        401: Unauthorized
        </Typography>
      <Button
        className={classes.button}
        size="large"
        variant="contained"
        onClick={() => {
          history.push("/");
        }}
      >
        Return to Login
        </Button>
    </div>
  );
};

export default withStyles(styles)(UnauthorizedPage);