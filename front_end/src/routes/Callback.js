import React, { useState, useEffect } from 'react';
import { SendCallbackCode } from '../utils/api';
import { useCookies } from 'react-cookie';
import { Redirect } from 'react-router-dom';
import { Container, CircularProgress } from "@material-ui/core";

const Callback = () => {
  const [cookies] = useCookies(["userID"]);
  const [authorized, setAuthorized] = useState(false);

  // Grab code from Spotify redirect_uri to generate an auth token
  const callback = window.location.href;
  const parsed = callback.split('=');
  const authCode = parsed[1];

  useEffect(() => {
    SendCallbackCode(cookies.userID, authCode)
      .then(() => {
        setAuthorized(true);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [cookies.userID, authCode, setAuthorized]);

  return (
    authorized ?
      <Redirect to="/app"/>
      :
      <div>
        <Container
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Container>
      </div>
  );
}

export default Callback;