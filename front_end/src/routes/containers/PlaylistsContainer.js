import React, { useEffect } from 'react';
import Playlists from '../components/Playlists';

const PlaylistsContainer = (props) => {
  const { playlists, setPlaylists, filtered, setSelectedPlaylists } = props;

  useEffect(() => {
    let plists = [...playlists];
    let selected = [];
    plists.forEach((plist) => {
      if (plist.isChecked) {
        selected.push(plist);
      }
    });
    setSelectedPlaylists(selected);
  }, [playlists, setSelectedPlaylists]);

  const handleChecked = (event, playlist) => {
    setPlaylists((prevPlaylists) => prevPlaylists.map((item) => {
      if (item !== playlist) return item;
      return { ...playlist, isChecked: event.target.checked }
    }));
  };

  return (
    <Playlists
      playlists={playlists}
      handleChecked={handleChecked}
      filtered={filtered}
    />
  );
};

export default PlaylistsContainer;