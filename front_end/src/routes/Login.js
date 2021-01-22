import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { GetAuthURL } from '../utils/api';
import { Container, CircularProgress } from "@material-ui/core";
import { useCookies } from "react-cookie";

const Login = () => {
  const [cookies] = useCookies(["userID"]);

  useEffect(() => {
    const timer = setTimeout(() => {
      GetAuthURL(cookies.userID)
        .then((res) => {
          window.location.href = res.data.auth_url;
        })
        .catch((e) => {
          console.log(e);
        });
    }, 1500);
    return () => clearTimeout(timer);
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