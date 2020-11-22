import React from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './containers/SearchBar';
import PlaylistsContainer from './containers/PlaylistsContainer';

function App() {
  return (
    <div>
      <Header/>
      <SearchBar/>
      <PlaylistsContainer/>
    </div>
  );
}

export default App;