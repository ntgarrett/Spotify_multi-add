import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

const Header = () => {
    return (
        <Grid container direction="column"> 
            <Grid item> 
                <Typography variant="h2"> Spotify Multi-Add </Typography> 
                <Typography variant="p1"> Add tracks to multiple playlists </Typography>
            </Grid>
        </Grid>
    );
}

export default Header;