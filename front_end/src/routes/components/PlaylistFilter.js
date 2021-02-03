import React from 'react';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  paper: {
    borderBottomLeftRadius: "0",
    borderBottomRightRadius: "0",
  },
  input: {
    fontFamily: "Didact Gothic",
    justifyContent: "center",
    display: "flex",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: "1em",
    paddingRight: "1em",
  },
});

const PlaylistFilter = (props) => {
  const { classes, value, onChange } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={0}>
          <Input
            className={classes.input}
            type="search"
            value={value}
            onChange={e => onChange(e)}
            placeholder="Filter playlists"
            disableUnderline={false}
            onKeyDown={onChange}
          />
      </Paper>
    </div>
  );
};

export default withStyles(styles)(PlaylistFilter);