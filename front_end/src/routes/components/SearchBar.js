import React from 'react';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  paper: {
    borderBottomLeftRadius: "0",
    borderBottomRightRadius: "0",
  },
  input: {
    fontFamily: "Didact Gothic",
    display: "flex",
    padding: "0.5em",
  },
});

const SearchBar = (props) => {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.paper} elevation={0}>
        <Input
          className={classes.input}
          type="search"
          value={props.value}
          onChange={e => props.onChange(e)}
          placeholder="Search for tracks"
          disableUnderline={false}
          onKeyDown={props.onChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={props.onClick}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </Paper>
    </div>
  );
}

export default withStyles(styles)(SearchBar);