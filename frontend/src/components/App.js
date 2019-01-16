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

  // render() {
  //   let token = localStorage.getItem("vicariouslyToken");
  //   return (
  //     <>
  //       <NavBar />
  //       <Router>
  //         <div>
  //           <Route exact path='/' render={routerProps => <Redirect {...routerProps} to='/dashboard' />} />
  //           <Route exact path='/dashboard' render={routerProps => {
  //             if (token) {
  //               return <Dashboard {...routerProps} />
  //             } else {
  //               return <Redirect {...routerProps} to="/login" />;
  //             }
  //           }} />
  //           <Route exact path='/register' render={routerProps => {
  //             if (!token) {
  //               return <Register {...routerProps} />
  //             } else {
  //               return <Redirect {...routerProps} to="/dashboard" />;
  //             }
  //           }} />
  //           <Route exact path='/login' render={routerProps => {
  //             if (!token) {
  //               return <Login {...routerProps} />
  //             } else {
  //               return <Redirect {...routerProps} to="/dashboard" />;
  //             }
  //           }} />
  //         </div>
  //       </Router>
  //     </>
  //   );
  // }
}
