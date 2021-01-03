import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './routes/Landing';
import Login from './routes/Login';
import App from './routes/App';
import Callback from './routes/Callback';
import PageNotFound from './routes/404';
import UnauthorizedPage from './routes/401';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/callback" component={Callback}/>
          <Route exact path="/app" component={App}/>
          <Route exact path="/not-found" component={PageNotFound}/>
          <Route exact path="/unauthorized" component={UnauthorizedPage}/>
          <Route path="*" component={PageNotFound}/>
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
