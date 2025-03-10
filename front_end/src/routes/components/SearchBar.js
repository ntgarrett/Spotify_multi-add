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
    justifyContent: "center",
    display: "flex",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: "1em",
  },
});

const SearchBar = (props) => {
  const { classes, value, onChange, onClick } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={0} id="searchInput">
          <Input
            id="searchText"
            className={classes.input}
            type="search"
            value={value}
            onChange={e => onChange(e)}
            placeholder="Search for tracks"
            disableUnderline={false}
            onKeyDown={onChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={onClick}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
          />
      </Paper>
    </div>
  );
};

export default withStyles(styles)(SearchBar);