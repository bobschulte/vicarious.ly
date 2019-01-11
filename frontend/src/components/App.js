import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createTraveler, relocateTraveler } from '../actions/travelers'

class App extends Component {

  constructor() {
    super()
    this.state = {
      cities: [],
      travelers: [],
      stays: []
    }
  }

  getData = async (route, cb) => {
    let res = await fetch(`http://localhost:7777/${route}`)
    let data = await res.json()
    return cb(data)

    // .then(res => res.json())
    // .then(res => cb(res))
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
        Cities:
          <ul>
            {this.state.cities.map(city => <li key={city.id} >{city.name}</li>)}
          </ul>
        Travelers:
          <ul>
            {this.state.travelers.map(traveler => <li key={traveler.id} >{traveler.firstName}</li>)}
            <button onClick={() => this.props.createTraveler({})} >Create Traveler</button>
            <button onClick={() => this.props.relocateTraveler(0)} >Relocate Traveler</button>
          </ul>
        Stays:
          <ul>
            {this.state.stays.map(stay => <li key={stay.id} >{stay.Traveler.firstName} stayed in {stay.City.name}!</li>)}
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
    createTraveler: (traveler) => dispatch(createTraveler(traveler)),
    relocateTraveler: (travelerId) => dispatch(relocateTraveler(travelerId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
