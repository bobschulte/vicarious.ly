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

  getData = async (route, cb) => {
    let res = await fetch(`http://localhost:7777/${route}`)
    res = await res.json()
    if (res.error) {
      console.log(res.status, res.error);
      // REDIRECT SOMEWHERE?
    } else {
      cb(res);
    }
  }

  componentDidMount = () => {
    Object.keys(this.state).slice(1,2).forEach(key => {
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
