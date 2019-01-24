import React from 'react'
import GoogleMapReact from "google-map-react"
import API_KEY from '../api/googlemaps/API_KEY'
import PlaceIcon from '@material-ui/icons/PlaceOutlined'
import LoadingCircle from './Loading'
// import Marker from '../components/Marker'

class MapContainer extends React.Component {

    // displayFlightPath = () => {
    //     // blah blah blah
    // }

    renderCityMarker = coords => <PlaceIcon lat={coords.lat} lng={coords.lng} />

    // displayUserLocation = (coords) => {
    //     return coords.lat !== 0 && coords.lng !== 0 && <Marker lat={coords.lat} lng={coords.lng} img="https://static.thenounproject.com/png/710584-200.png" />;
    // }

    renderLoading = () => <LoadingCircle />

    renderMap = () => {
        const { coords, zoom } = this.props
        return <div style={{ height: '40vh', width: '100%', float: 'right' }}>
            <GoogleMapReact bootstrapURLKeys={{ key: API_KEY }} center={coords} zoom={zoom}>
                {/* {this.renderCityMarker(coords)} */}
            </GoogleMapReact>
        </div>
    }

    render() {
        return <React.Fragment>
            {this.props.coords.lat
                ? this.renderMap()
                : this.renderLoading()}
        </React.Fragment>;
    }
}

export default MapContainer