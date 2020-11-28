import React from 'react';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = (props) => {
  return (
    <Paper elevation={4}>
      <Input 
        type="search"
        value={props.value}
        onChange={e => props.onChange(e)}
        placeholder="Search for tracks"
        onKeyDown={props.onChange}
      />
      <IconButton onClick={props.onClick}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;