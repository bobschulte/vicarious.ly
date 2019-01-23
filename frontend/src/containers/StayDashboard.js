import React from 'react'
import { connect } from 'react-redux';
import actions from '../state/actions/index'
import PlacesSearch from '../components/forms/PlacesSearch'

class StayDashboard extends React.Component {

    state = {
        value: ''
    }

    handlePlaceInputChange = value => this.setState({ value })

    handlePlaceSubmit = value => {
        const place = { name: value, stayId: this.props.match.params.stayId }
        this.props.addPlace(place)
        this.setState({ value: '' })
    }

    setCoordsFor = coords => {
        console.log(coords)
    }

    renderDateMessage = stay => {
        const { user } = this.props
        return stay.departure === null ? 
            <h1>{`${user.firstName} has been in ${stay.City.name} since ${stay.arrival.split("T")[0]}`}</h1>
            : 
            <h1>{`${user.firstName} visited ${stay.City.name} from ${stay.arrival.split("T")[0]} to ${stay.departure.split("T")[0]}`}</h1>
    }

    renderContent = user => {
        const stay = user.Stays.find(stay => stay.id === this.props.match.params.stayId)

        return <div>
            {this.renderDateMessage(stay)}
            <h4>Search local places:</h4>
            <PlacesSearch onChange={this.handlePlaceInputChange} onSubmit={this.handlePlaceSubmit} value={this.state.value} lat={stay.City.lat} lng={stay.City.lng} />
          </div>;
    }

    render() {
        let { user } = this.props
        return <div>
            {user && this.renderContent(user)}
            {!user && "Loading..."}
        </div>
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addPlace: place => dispatch(actions.places.add(place))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StayDashboard)