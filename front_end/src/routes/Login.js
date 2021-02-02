import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { GetAuthURL } from '../utils/api';
import { Container, CircularProgress } from "@material-ui/core";

const Login = () => {
  const [cookies] = useCookies(["userID"]);

  useEffect(() => {
    GetAuthURL(cookies.userID)
      .then((res) => {
        window.location.href = res.data.auth_url;
      })
      .catch((e) => {
        console.log(e);
      });
  }, [cookies.userID]);


  return (
    <div style={{ display: "flex", flexGrow: 1 }}>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress style={{ color:"#121212" }}/>
      </Container>
    </div>
  );
};

export default Login;