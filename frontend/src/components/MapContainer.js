import React from 'react'
import GoogleMapReact from "google-map-react"
import API_KEY from '../api/googlemaps/API_KEY'
// import Marker from '../components/Marker'

class MapContainer extends React.Component {

    // displayCityLocation = (city) => {
    //     <Marker key={index} rank={index + 1} lat={city.location.lat} lng={city.location.lng} name={city.name} img="https://freeiconshop.com/wp-content/uploads/edd/burger-outline-filled.png" />;
    // }

    // displayUserLocation = (coords) => {
    //     return coords.lat !== 0 && coords.lng !== 0 && <Marker lat={coords.lat} lng={coords.lng} img="https://static.thenounproject.com/png/710584-200.png" />;
    // }

    render() {
        return (
            <div style={{ height: '40vh', width: '100%', float: 'right' }}>
                <GoogleMapReact bootstrapURLKeys={{ key: API_KEY }} center={this.props.coords} zoom={4} />
            </div>
        )
    }
}

export default MapContainer