import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = () => ({
  root: {
    minWidth: "100vw",
    minHeight: "100vh",
    background: "linear-gradient(#000000, #1db950)",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Didact Gothic",
    fontSize: "4em",
    color: "white",
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
  const { history, classes } = props;
  return (
    <div className={classes.root}>
      <Typography
        className={classes.title}
      >
        401: Unauthorized Access
      </Typography>
      <Button
        className={classes.button}
        size="large"
        variant="contained"
        onClick={() => {history.push("/")}}
      >
        Go to Login
      </Button>
    </div>
  );
}

export default withStyles(styles)(UnauthorizedPage);