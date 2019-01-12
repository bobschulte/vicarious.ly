import React from 'react';
import { connect } from 'react-redux'
import actions from '../actions/index'
import UserForm from './UserForm'

class App extends React.Component {

  state = {
    cities: [],
    users: [],
    stays: []
  }

  getData = (route, cb) => {
    fetch(`http://localhost:7777/${route}`)
    .then(res => res.json())
    .then(res => cb(res))

    // .then(res => {
    //   console.log(res.json());  // figuring out what isLoggedIn backend middleware is sending back
    // })
    // // .then(res => cb(res))
  }

  // try refactoring this with async & await!
  componentDidMount = () => {
    Object.keys(this.state).forEach(key => {
      this.getData(key, data => this.setState({ [key]: data }));
    })
  }
  
  render() {
    return (
      <div>
          <ul>
            {this.state.cities.map(city => <li key={city.id} >{city.name}</li>)}
            <button onClick={() => this.props.createCity({})} > Create City </button>
          </ul>
          <ul>
            {this.state.users.map(user => <li key={user.id} >{user.firstName} {user.email}</li>)}
            <button onClick={() => this.props.relocateUser(0)} > Relocate User </button>
          </ul>
          <ul>
            {this.state.stays.map(stay => <li key={stay.id} >{stay.User.firstName} stayed in {stay.City.name}!</li>)}
            <button onClick={() => this.props.createStay({})} > Create Stay </button>
          </ul>
          <UserForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cities: state.cities,
    users: state.users,
    stays: state.stays
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createCity: (city) => dispatch(actions.city.create(city)),
    relocateUser: (userId) => dispatch(actions.user.relocate(userId)),
    createStay: (stay) => dispatch(actions.stay.create(stay))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
