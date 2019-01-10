import React, { Component } from 'react';
import '../stylesheets/App.css'

class App extends Component {

  constructor() {
    super()
    this.state = {
      cities: [],
      travelers: [],
      stays: []
    }
  }

  getData = (route, cb) => {
    fetch(`http://localhost:7777/${route}`)
    .then(res => res.json())
    .then(res => cb(res))
  } 

  componentDidMount = () => {
    this.getData('cities', res => this.setState({ cities: res }))
    this.getData('travelers', res => this.setState({ travelers: res }))
    this.getData('stays', res => this.setState({ stays: res }))
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
          </ul>
        Stays:
          <ul>
            {this.state.stays.map(stay => <li key={stay.id} >{stay.Traveler.firstName} stayed in {stay.City.name}!</li>)}
          </ul>
      </div>
    );
  }
}

export default App;
