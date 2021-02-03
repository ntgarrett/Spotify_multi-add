import React, { useEffect } from 'react';
import PlaylistFilter from '../components/PlaylistFilter';
import { RetrievePlaylists } from '../../utils/api';
import { useCookies } from 'react-cookie';
import { useStateWithCallbackLazy } from 'use-state-with-callback';

const PlaylistFilterContainer = (props) => {
  const { setPlaylists, setFiltered, setGoTo401 } = props;
  const [cookies] = useCookies(['userID']);
  const [value, setValue] = useStateWithCallbackLazy('');

  useEffect(() => {
    if (typeof cookies.userID != "undefined") {
      RetrievePlaylists(cookies.userID)
        .then((response) => {
          setPlaylists(response.data);
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status === 401) {
            setGoTo401(true);
          }
      });
    }
  }, [cookies.userID, setPlaylists, setGoTo401]);

  useEffect(() => {
    if (value.length === 0) {
      setFiltered(null);
    }
    else {
      setFiltered(value);
    }
  }, [value, setFiltered]);

  function filter(value) {
    setFiltered(value);
  };

  const onChange = e => {
    setValue(e.target.value, () => {
      filter(value);
    });
  };

  return (
    <PlaylistFilter
      value={value}
      onChange={onChange}
    />
  );
};

export default PlaylistFilterContainer;