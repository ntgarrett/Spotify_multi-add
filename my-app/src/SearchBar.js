import React from 'react';
import axios from 'axios';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import InputBase from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
      selectedTrack: null,
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

  startSearch() {
    this.search(this.state.value);
  };

  get renderTracks() {
    let tracks;
    if (this.state.tracks) {
      tracks = <List>{this.state.tracks.map((track) => 
        <ListItem key={track.id}> 
          <Avatar variant="square" alt="album-cover" src={track.album.images[0].url}/>
          <ListItemText primary={track.name} secondary={(track.artists).map((artist) => artist.name).join(', ')}/> 
        </ListItem>)}
      </List>; 
    }
    return this.state.value ? tracks :  null;
  }

  render() {
    return (
      <Paper elevation={4}>
        <InputBase 
          type="search"
          value={this.state.value}
          onChange={e => {
            this.setState({value: e.target.value})
            if (this.state.value === '') {
              this.setState({tracks: [] })
            }
          }}
          onKeyPress={e => {
            if (e.key === 'Enter') {
              this.startSearch();
            }
          }}
          placeholder="Search for tracks"
        /> 
        <IconButton onClick={() => this.startSearch()}>
          <SearchIcon />
        </IconButton>
        {this.renderTracks}
      </Paper>
    );
  }
}
