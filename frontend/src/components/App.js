import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Dashboard from './Dashboard'
import Register from './Register'
import Login from './Login'

export default class App extends React.Component {

  render() {
    return (
      <>
        <Router>
          <>
            <Route exact path='/' render={routerProps => {
              if (localStorage.getItem('vicariouslyToken')) {
                return <Dashboard {...routerProps} />
              } else {
                return <Redirect {...routerProps} to="/login" />;
              }
            }} />
            <Route exact path='/register' component = {Register} />
            <Route exact path='/login' component = {Login} />
          </>
        </Router>
      </>
    );
  }
}
