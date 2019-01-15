import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import NavBar from './NavBar'
import Dashboard from './Dashboard'
import Register from './Register'
import Login from './Login'

export default class App extends React.Component {

  render() {
    return (
      <>
        <NavBar />
        <Router>
          <>
            <Route exact path='/' render={routerProps => {
              if (localStorage.getItem('vicariouslyToken')) {
                return <Dashboard {...routerProps} />
              } else {
                return <Redirect {...routerProps} to="/login" />;
              }
            }} />
            <Route exact path='/register' render={routerProps => {
              if (!localStorage.getItem('vicariouslyToken')) {
                return <Register {...routerProps} />
              } else {
                return <Redirect {...routerProps} to="/" />;
              }
            }} />
            <Route exact path='/login' render={routerProps => {
              if (!localStorage.getItem('vicariouslyToken')) {
                return <Login {...routerProps} />
              } else {
                return <Redirect {...routerProps} to="/" />;
              }
            }} />
          </>
        </Router>
      </>
    );
  }
}
