import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useCookies } from 'react-cookie';

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

const PageNotFound = (props) => {
  const { history, classes } = props;
  const [cookies] = useCookies('userID');
  return (
    <div className={classes.root}>
      <Typography
        className={classes.title}
      >
        404: Page Not Found
      </Typography>
      <Button
        className={classes.button}
        size="large"
        variant="contained"
        onClick={() => {
          history.push("/");
        }}
      >
        Return to Application
      </Button>
    </div>
  );
}

export default withStyles(styles)(PageNotFound);