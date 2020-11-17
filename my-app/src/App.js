import React from 'react';
import './App.css';
import Header from './Header';
import SearchBar from './SearchBar';
import Playlists from './Playlists';

function App() {
  return (
    <div>
      <Header></Header>
      <SearchBar></SearchBar>
      <Playlists></Playlists>
    </div>
  );
}

export default App;
