import React from 'react';
import InputBase from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = (props) => {
  return (
    <Paper elevation={4}>
      <InputBase 
        value={props.value}
        onChange={e => props.onChange(e)}
        placeholder="Search for tracks"
      />
      <IconButton onClick={props.onClick}>
        <SearchIcon />
      </IconButton>
      {props.renderTracks}
    </Paper>
  );
}

export default SearchBar;