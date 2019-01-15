import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserData from './UserData'
import UserForm from './UserForm'

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Router>
          <>
            <Route exact path='/' component={UserData} />
            <Route exact path='/register' component = {UserForm} />
          </>
        </Router>
      </div>
    );
  }
}
