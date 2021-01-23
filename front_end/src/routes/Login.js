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
};

export default Login;