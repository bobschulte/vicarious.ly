import React from 'react';
import { connect } from 'react-redux'
import actions from '../actions/index'
import UserForm from './UserForm'

class App extends React.Component {

  // refactor this into users reducer!
  getUserData = async (cb) => {
    let res = await fetch(`http://localhost:7777/users`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      }
    })
    if (res.status !== 200) {
      console.log(`${res.status}: ${res.statusText}`)
    } else {
      res = await res.json()
      console.log(`fetch successful`)
      cb(res);
    }
  }

  componentDidMount = () => {
    // this.getUserData(user => this.setState({ user }));
    if (localStorage.getItem('token')) {
      this.props.getUserData()
    }
  }
  
  render() {
    return (
      <div>
        <h2>Welcome, {this.props.user.firstName}</h2>
        <ul>
          Cities Visited:
          {this.props.user.Stays.map(stay => <li>{stay.City.nameWithCountry}</li>)}
          <button onClick={() => this.props.createCity({})} > Create City </button>
        </ul>
        <ul>
          <button onClick={() => this.props.relocateUser(0)} > Relocate User </button>
        </ul>
        <ul>
          <button onClick={() => this.props.createStay({})} > Create Stay </button>
        </ul>
        <br/>
        <br/>
        <UserForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: () => dispatch(actions.user.login()),
    getUserData: () => dispatch(actions.user.getData()),
    relocateUser: (userId) => dispatch(actions.user.relocate(userId)),
    logoutUser: () => dispatch(actions.user.logout()),
    createCity: (city) => dispatch(actions.city.create(city)),
    createStay: (stay) => dispatch(actions.stay.create(stay))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
