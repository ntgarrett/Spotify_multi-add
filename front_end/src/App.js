import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './routes/Landing';
import Login from './routes/Login';
import MainPage from './routes/MainPage';
import Callback from './routes/Callback';
import PageNotFound from './routes/404';
import UnauthorizedPage from './routes/401';
import TopBarContainer from './routes/containers/TopBarContainer';
import BottomBarContainer from './routes/containers/BottomBarContainer';
import { ThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import { lightTheme, darkTheme } from './routes/components/Themes';

const styles = () => ({
  App: {
    display: "flex",
    flexDirection: "column",
    //background: "linear-gradient(to top, #1C6E25, #1ED760)",
    background: "#1ED760",
    minHeight: "100vh",
    minWidth: "100vw",
  }
});

const App = (props) => {
  const { classes } = props;
  const [theme, setTheme] = useState(true);
  const [logoutPressed, setLogoutPressed] = useState(false);

  useEffect(() => {
    const themePreference = localStorage.getItem("themePreference");
    if (themePreference) {
      (themePreference === "true")
        ? setTheme(true)
        : setTheme(false);
    } else {
      setTheme(true);
      localStorage.setItem("themePreference", true);
    }
  }, []);

  const appliedTheme = createMuiTheme(theme ? lightTheme : darkTheme);

  return (
    <div className={classes.App}>
      <ThemeProvider theme={appliedTheme}>
        <TopBarContainer
          theme={theme}
          setTheme={setTheme}
          setLogoutPressed={setLogoutPressed}
        />
        <Router>
          <Switch>
            <Route exact path="/" render={(props) =>
              <Landing {...props} />}
            />
            <Route exact path="/login" render={(props) =>
              <Login {...props} />}
            />
            <Route exact path="/callback" render={(props) =>
              <Callback {...props} />}
            />
            <Route exact path="/app" render={(props) =>
              (<MainPage {...props} theme={theme} />)}
            />
            <Route exact path="/unauthorized" render={(props) =>
              (<UnauthorizedPage {...props} logoutPressed={logoutPressed}/>)}
            />
            <Route path="*" render={(props) =>
              (<PageNotFound {...props} logoutPressed={logoutPressed}/>)}
            />
          </Switch>
        </Router>
        <BottomBarContainer />
      </ThemeProvider>
    </div>
  );
};

export default withStyles(styles)(App);