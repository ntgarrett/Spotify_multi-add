import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import { SearchForTrack } from '../../utils/api';
import { useCookies } from 'react-cookie';

const SearchBarContainer = (props) => {
  const { setTracks, setSelectedTrack, setNoResults, setLoading, setGoTo401 } = props;
  
  const [value, setValue] = useState('');
  const [cookies] = useCookies(['userID']);
  const [prevValue, setPrevValue] = useState('');

  useEffect(() => {
    if (value.length === 0) {
      setTracks([]);
      setSelectedTrack({});
      setPrevValue('');
    }
  }, [value, setTracks, setSelectedTrack, setPrevValue]);

  function search() {
    setLoading(true);
    setNoResults(false);
    var re = /^\s+$/;
    var emptyQuery = re.exec(value);

    if (value.trim() !== prevValue.trim() && !emptyQuery) {
      SearchForTrack(cookies.userID, value.trim())
        .then((response) => {
          const trackResults = response.data;
          if (trackResults.tracks.items.length === 0) {
            setNoResults(true);
          }
          setTracks(trackResults.tracks.items);
          setPrevValue(value.trim());

        })
        .catch((error) => {
          console.log(error);
          if (error.response.status === 401) {
            setGoTo401(true);
          }
        });
    };
    setLoading(false);
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
};

export default SearchBarContainer;