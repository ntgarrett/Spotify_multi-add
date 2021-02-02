import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../utils/Context';
import { SendCallbackCode } from '../utils/api';
import { useCookies } from 'react-cookie';
import { Redirect } from 'react-router-dom';
import { Container, CircularProgress } from "@material-ui/core";

const Callback = () => {
  const { authenticated, setAuthenticated } = useContext(AuthContext);
  const [cookies] = useCookies(["userID"]);
  const [userClickedDenied, setUserClickedDenied] = useState(false);

  // Grab code from Spotify redirect_uri to generate an auth token
  const authCode = window.location.href.split('=')[1];

  useEffect(() => {
    if (authCode !== "access_denied") {
      SendCallbackCode(cookies.userID, authCode)
        .then(() => {
          setAuthenticated(true);
          localStorage.setItem("userStatus", "true");
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      setUserClickedDenied(true);
    }
  }, [cookies.userID, authCode, setAuthenticated, setUserClickedDenied]);

  return (
    userClickedDenied ?
      <Redirect to="/" />
      : (authenticated ?
        <Redirect to="/app" />
        :
        <div style={{ display: "flex", flexGrow: 1 }}>
          <Container
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress style={{ color: "#121212" }} />
          </Container>
        </div>
      )
  );
};

export default Callback;