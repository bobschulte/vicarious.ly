import React from 'react';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from '../state/history/history'
import NavBar from './NavBar'
import Dashboard from './Dashboard'
import Login from './Login'

export default class App extends React.Component {
  render() {
    return (
      <Router history={history} >
        <div>
          <Route path="/" component={NavBar} />
          {/* bottom menu bar? */}
          <Switch>
            <Route path="/register" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/users/:userIdSlug" component={Dashboard} />
            {/* <Route path="/relocate" render={() => <Redirect to={`/users/${localStorage.getItem('vicariouslyId')}/relocate`} />} />
            <Route path="/album" render={() => <Redirect to={`/users/${localStorage.getItem('vicariouslyId')}/album`} />} /> */}
            <Route path="/" render={() => <Redirect to={`/users/${localStorage.getItem('vicariouslyId')}`} />} />
          </Switch>
        </div>
      </Router>
    )
  }
}