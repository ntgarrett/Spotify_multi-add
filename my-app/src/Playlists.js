import React from 'react';
import axios from 'axios'; 
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CheckBox from '@material-ui/core/Checkbox';


export default class Playlists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlists: [],
            selectedPlaylists: []
        };
    }

    handleChange(e, playlist) {
        const checkedList = this.state.selectedPlaylists;
        
        if (e.target.checked) {
            checkedList.push(playlist);
        } else {
            const index = checkedList.indexOf(playlist);
            checkedList.splice(index,1);
        }
        this.setState({ selectedPlaylists: checkedList});
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
            <ListItem key={playlist.id}>
                <ListItemText primary={playlist.name}/>
                <ListItemIcon>
                    <CheckBox 
                        onChange={(e) => {
                            this.handleChange(e, playlist);
                            console.log(this.state.selectedPlaylists);
                        }}
                    />
                </ListItemIcon>
            </ListItem>
            
        );     
        return (
            <List>
                {plistItems}
            </List>
        );
    }
}