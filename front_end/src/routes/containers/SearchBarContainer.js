import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import { SearchForTrack } from '../../utils/api';
import { useCookies } from 'react-cookie';

const SearchBarContainer = (props) => {
  const { setTracks, setSelectedTrack} = props;
  const [value, setValue] = useState('');
  const [idCookie] = useCookies(['userID']);
  
  useEffect(() => {
    if (value.length === 0) {
      setTracks([]);
      setSelectedTrack({});
    }
  }, [value, setTracks, setSelectedTrack]);

  function search() {
      SearchForTrack(idCookie.userID, value)
        .then((response) => {
            const trackResults = response.data;
            setTracks(trackResults.tracks.items);
        })
        .catch((error) => {
          console.log(error);
        });

  };

  const onChange = e => {
    setValue(e.target.value);
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