import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import { SearchForTrack } from '../utils/api';

const SearchBarContainer = (props) => {
  const {setTracks} = props;
  const [value, setValue] = useState('');

  function search() {
    try {
      SearchForTrack(value)
        .then((response) => {
          const trackResults = response.data;
          setTracks(trackResults.tracks.items);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = e => {
    setValue(e.target.value);
    if (value === '') {
      setTracks([]);
    }
    if (e.key === 'Enter') {
      search();
    }
  }

  return (
    <SearchBar
      value={value}
      onChange={onChange}
      onClick={search}
    />
  );
}

export default SearchBarContainer;