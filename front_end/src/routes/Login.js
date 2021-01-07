import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { v4 as uuidv4 } from 'uuid';
import { GetAuthURL } from '../utils/api';
import { Container, CircularProgress } from "@material-ui/core";

const Login = () => {
  const [cookies, setCookie] = useCookies(["userID"]);

  useEffect(() => {
    if (typeof cookies.userID == "undefined") {
      const id = uuidv4();
      setCookie("userID", id, {
        expires: 2147483647
      });
    }
  }, [setCookie, cookies.userID]);

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