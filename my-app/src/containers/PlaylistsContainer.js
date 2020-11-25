import React, { useState, useEffect } from 'react';
import { RetrievePlaylists } from '../utils/api';
import Playlists from '../components/Playlists';

const PlaylistsContainer = (props) => {
  const [playlists, setPlaylists] = useState([]);
  const {selectedPlaylists, setSelectedPlaylists} = props;

  const handleChange = (e, playlist) => {
    const checkedList = selectedPlaylists;

    if (e.target.checked) {
      checkedList.push(playlist.id);
    } else {
      const index = checkedList.indexOf(playlist);
      checkedList.splice(index, 1);
    }
    setSelectedPlaylists(checkedList);
  }

  useEffect(() => {
    try {
      RetrievePlaylists()
        .then((response) => {
          setPlaylists(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Playlists 
      playlists={playlists} 
      handleChange={handleChange}
    />
  );
}

export default PlaylistsContainer;