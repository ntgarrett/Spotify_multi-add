import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Playlists from '../components/Playlists';

function PlaylistsContainer(props) {
  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylists, setSelectedPlaylists] = useState([]);

  const handleChange = (e, playlist) => {
    const checkedList = selectedPlaylists;

    if (e.target.checked) {
      checkedList.push(playlist);
    } else {
      const index = checkedList.indexOf(playlist);
      checkedList.splice(index, 1);
    }
    setSelectedPlaylists(checkedList);
    console.log(selectedPlaylists);
  }

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/playlists')
      .then((response) => {
        setPlaylists(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Playlists 
      playlists={playlists} 
      handleChange={handleChange}
    />
  );
}

export default PlaylistsContainer;