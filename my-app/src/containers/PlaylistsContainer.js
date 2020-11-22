import React from 'react';
import axios from 'axios';
import Playlists from '../components/Playlists';

export default class PlaylistsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlists: [],
      selectedPlaylists: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, playlist) {
    const checkedList = this.state.selectedPlaylists;

    if (event.target.checked) {
      checkedList.push(playlist);
    } else {
      const index = checkedList.indexOf(playlist);
      checkedList.splice(index, 1);
    }
    this.setState({ selectedPlaylists: checkedList });
    console.log(this.state.selectedPlaylists);
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:5000/api/playlists')
      .then((response) => {
        this.setState({ playlists: response.data });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <Playlists 
        playlists={this.state.playlists} 
        handleChange={this.handleChange}
      />
    );
  }
}