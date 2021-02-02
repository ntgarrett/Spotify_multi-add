import React from 'react';
import TrackContainer from '../containers/TrackContainer';
import List from '@material-ui/core/List';
import { Grid, Container, CircularProgress} from '@material-ui/core/';

const TrackResults = (props) => {
  const { tracks, setSelectedTrack, selectedTrack, theme, loading } = props;

  return (
    loading ? 
    <Container
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress color="secondary" />
    </Container>
    : (<List style={{ visibility: tracks.length > 0 ? "visible" : "hidden" }}>
        {tracks.map((track) => {
          return (
            <Grid item key={track.id}>
              <TrackContainer
                track={track}
                setSelectedTrack={setSelectedTrack}
                selectedTrack={selectedTrack}
                theme={theme}
              />
            </Grid>
          );
        })}
      </List>)
  );
};

export default TrackResults;