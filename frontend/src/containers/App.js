import React from 'react';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from '../state/history/history'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import NavBar from './NavBar'
import Dashboard from './Dashboard'
import Login from './Login'

// const theme = createMuiTheme({
//   palette: {
//     primary: { main: "" },
//     secondary: { main: "" },
//     type: ""
//   }
// })

export default class App extends React.Component {
  render() {
    return (
      // <MuiThemeProvider theme={theme}>
        <Router history={history} >
          <div>
            <Route path="/" component={NavBar} />
            {/* bottom menu bar? */}
            <Switch>
              {/* <Route exact path="/" render={() => <h1>HOME PAGE</h1>} /> */}
              <Route path="/register" component={Login} />
              <Route path="/login" component={Login} />
              <Route path="/users/:userIdSlug" component={Dashboard} />
              {/* <Route path="/staybegun" render={() => <Redirect to={`/users/${localStorage.getItem('vicariouslyId')}`} />} /> */}
              <Route path="/" render={() => <Redirect to={`/users/${localStorage.getItem('vicariouslyId')}`} />} />
            </Switch>
          </div>
        </Router>
      // </MuiThemeProvider>
    )
  }
}