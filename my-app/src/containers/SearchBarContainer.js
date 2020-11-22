import React, { useState } from 'react';
import axios from 'axios';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import SearchBar from '../components/SearchBar';

const SearchBarContainer = (props) => {
  const [tracks, setTracks] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState('');
  const [value, setValue] = useState('');

  const search = async key => {
    const response = await axios(`http://127.0.0.1:5000/api/search?key=${key}`);
    const tracks = await response.data;
    setTracks(tracks.tracks.items);
  };

  const startSearch = () => {
    search(value);
  };

  const onChange = (e) => {
    setValue(e.target.value);
    // remove search results when search bar is cleared
    if (value === '') {
      setTracks([]);
    }
  }

  const renderTracks = () => {
    let searchedTracks;
    if (tracks) {
      searchedTracks = 
        // TODO split to component: Track
        <List>
          {tracks.map((track) => 
            <ListItem key={track.id}> 
              <Avatar variant="square" alt="album-cover" src={track.album.images[0].url}/>
              <ListItemText primary={track.name} secondary={(track.artists).map((artist) => artist.name).join(', ')}/> 
            </ListItem>)}
        </List>; 
    }
    return value ? searchedTracks :  null;
  }

  return (
    <SearchBar
      value={value}
      onChange={onChange}
      onClick={startSearch}
      renderTracks={renderTracks()}
    />
  );
}

export default SearchBarContainer;