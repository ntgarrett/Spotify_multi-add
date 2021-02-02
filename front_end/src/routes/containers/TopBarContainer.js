import React, { useContext } from 'react';
import { useCookies } from 'react-cookie';
import { AuthContext } from '../../utils/Context';
import { SignOut } from '../../utils/api';
import TopBar from '../components/TopBar';

const TopBarContainer = (props) => {
  const { theme, setTheme, setLogoutPressed } = props;
  const { authenticated, setAuthenticated } = useContext(AuthContext);
  const [cookies] = useCookies(["userID"]);

  const handle_Sign_Out = () => {
    SignOut(cookies.userID)
      .then(() => {
        setAuthenticated(false);
        localStorage.setItem("userStatus", "false");
        setLogoutPressed(true);
      });
  };

  return (
    <TopBar
      theme={theme}
      setTheme={setTheme}
      handle_Sign_Out={handle_Sign_Out}
      authenticated={authenticated}
    />
  );
};

export default TopBarContainer;