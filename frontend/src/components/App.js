import React, { Component } from 'react';
import { connect } from 'react-redux'
import actions from '../actions/index'

class App extends Component {

  state = {
    cities: [],
    travelers: [],
    stays: []
  }

  getData = (route, cb) => {
    fetch(`http://localhost:7777/${route}`)
    .then(res => res.json())
    .then(res => cb(res))
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
            {this.state.travelers.map(traveler => <li key={traveler.id} >{traveler.firstName}</li>)}
            <button onClick={() => this.props.createTraveler({})} > Create Traveler </button>
            <button onClick={() => this.props.relocateTraveler(0)} > Relocate Traveler </button>
          </ul>
          <ul>
            {this.state.stays.map(stay => <li key={stay.id} >{stay.Traveler.firstName} stayed in {stay.City.name}!</li>)}
            <button onClick={() => this.props.createStay({})} > Create Stay </button>
          </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cities: state.cities,
    travelers: state.travelers,
    stays: state.stays
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createCity: (city) => dispatch(actions.city.create(city)),
    createTraveler: (traveler) => dispatch(actions.traveler.create(traveler)),
    relocateTraveler: (travelerId) => dispatch(actions.traveler.relocate(travelerId)),
    createStay: (stay) => dispatch(actions.stay.create(stay))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
