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

  getCities = () => {
    fetch("http://localhost:7777/cities")
    .then(res => res.json())
    .then(cities => this.setState({ cities }))
  }

  getTravelers = () => {
    fetch("http://localhost:7777/travelers")
    .then(res => res.json())
    .then(travelers => this.setState({ travelers }))
  }

  getStays = () => {
    fetch("http://localhost:7777/stays")
    .then(res => res.json())
    .then(stays => this.setState({ stays }))
  }

  componentDidMount = () => {
    // this.getCities()
    // this.getTravelers()
    // this.getStays()
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default App;
