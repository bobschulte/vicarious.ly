import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import history from '../state/history/history'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Home from '../components/Home'
import NavBar from './NavBar'
import Dashboard from './Dashboard'
import Login from './Login'

const theme = createMuiTheme({
  palette: {
    primary: { main: "#2c2c2c" }, // #000000
    secondary: { main: "#57cac5" }, // #57cac5
    type: "light"
  },
  typography: {
    useNextVariants: true
  }
})

export default class App extends React.Component {
  render() {
    return <MuiThemeProvider theme={theme}>
      <NavBar />
      <Router history={history}>
        <Switch>
          <Route path="/register" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/users/:userIdSlug" component={Dashboard} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  }
}