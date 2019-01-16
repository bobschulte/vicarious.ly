import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import NavBar from './NavBar'
import Dashboard from './Dashboard'
import Register from './Register'
import Login from './Login'

export default class App extends React.Component {

  render() {
    return <>
        <Router>
          <div>
            <Route path="/" component={NavBar} />
            <Route exact path="/" render={routerProps => <Redirect {...routerProps} to="/users/:id" />} />
            <Route exact path="/users/:id" component={Dashboard} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </div>
        </Router>
      </>;
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
