import React from 'react';
import { Typography, Grid } from '@material-ui/core';

const Header = () => {
  return (
    <Grid container direction="column"> 
      <Grid item> 
        <Typography variant="h2"> Spotify Multi-Add </Typography> 
        <Typography variant="subtitle1"> Add tracks to multiple playlists simultaneously</Typography>
      </Grid>
    </Grid>
  );
}

export default Header;