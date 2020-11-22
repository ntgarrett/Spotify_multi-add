import React from 'react';
import './App.css';
import Header from './components/Header';
import SearchBarContainer from './containers/SearchBarContainer';
import PlaylistsContainer from './containers/PlaylistsContainer';

function App() {
  return (
    <div>
      <Header/>
      <SearchBarContainer/>
      <PlaylistsContainer/>
    </div>
  );
}

export default App;