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
            <Route exact path="/register" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/users/:id" component={Dashboard} />
            <Route exact path="/" render={() => <Redirect to="/users/:id" />} />
          </Switch>
        </div>
      </Router>
    )
  }
}
