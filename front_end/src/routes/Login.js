import React, { useState } from 'react';
import Header from './components/Header';
import {
  Textfield,
  Button,
  Container
} from '@material-ui/core';

const Login = (props) => {
  const { history } = props;
  const [username, setUsername] = useState('');

  const handleSubmit = () => {
    try {
      // login
      // navigate to home page
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <Container>
        <Textfield 
          placeholder="Enter your Spotify Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <Button
          disabled={username.length <= 0}
          variant="contained"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Container>
    </div>
  );
};

export default Login;
