import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import NavBar from './NavBar'
import Dashboard from '../containers/Dashboard'
import Register from '../containers/Register'
import Login from '../containers/Login'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={NavBar} />
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/users/:id" component={Dashboard} />
            <Route path="/" render={routerProps => <Redirect {...routerProps} to="/users/:id" />} />
          </Switch>
        </div>
      </Router>
    )
  }
}
