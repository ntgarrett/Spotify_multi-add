import React from 'react';
import axios from 'axios';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
      loading: false,
      value: ''
    }
  }

  search = async key => {
    this.setState({ loading: true });
    const response = await axios(`http://127.0.0.1:5000/api/search?key=${key}`);
    const tracks = await response.data;

    this.setState({ tracks: tracks.tracks.items, loading: false });
  };

  onKeyDown = async e => {
    this.search(e.target.value);
    this.setState({ value: e.target.value });
  };

  get renderTracks() {
    let tracks = <h1>No tracks found</h1>;
    if (this.state.tracks) {
      tracks = <ul>{this.state.tracks.map((track) => <li key={track.id}>{track.name}</li>)}</ul>;
    }

    return tracks;
  }

  render() {
    return (
      <div>
        <input 
          value={this.state.value}
          onChange={e => this.setState({value: e.target.value})}
          onKeyPress={e => {
            if (e.key === 'Enter') {
              this.onKeyDown(e);
            }
          }}
          placeholder="Search for tracks"
        />
        {this.renderTracks}
      </div>
    );
  }
}
