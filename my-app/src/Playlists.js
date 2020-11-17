import React from 'react';
import axios from 'axios'; 
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';

export default class Playlists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlists: []
        };
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:5000/api/playlists')
            .then((response) => {
                this.setState({playlists: response.data});
            })
            .catch((error) => console.log(error));
    }

    render() { 
        const plistItems = this.state.playlists.map((playlist) =>
            <ListItemText key={playlist.id} primary={playlist.name}/>
        );     
        return (
            <List>
                {plistItems}
            </List>
        );
    }
}