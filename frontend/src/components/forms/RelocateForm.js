import React from 'react'
import { connect } from 'react-redux'
import MapContainer from '../MapContainer'
import actions from '../../state/actions/index'
import PropTypes from 'prop-types'
import Avatar from "@material-ui/core/Avatar";
import Button from '@material-ui/core/Button'
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from '@material-ui/core/FormControl'
import FlightOutlinedIcon from "@material-ui/icons/FlightOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { styles } from "./helpers/styles/relocateStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import CitySearch from './CitySearch'
import { sluggify } from './helpers/sluggify';
import apiCall from '../../state/actions/helpers/apiCall'


class RelocateForm extends React.Component {

    constructor(props) {
        super(props)
        let token = localStorage.getItem("vicariouslyToken");
        !token && this.props.history.push("/");
        this.state = {
            cityNameWithCountry: '',
            cityId: null,
            coords: {
                lat: 4,
                lng: -78
            },
            showMap: false
        }
    }

    setCoordsFor = cityNameWithCountry => {
         if (!cityNameWithCountry) return
        let slug = sluggify(cityNameWithCountry)
        apiCall('GET', `/cities/${slug}`)
        .then(city => this.setState({
            cityId: city.id,
            coords: {
              lat: city.lat,
              lng: city.lng  
            }
        }))
    }

    handleInputChange = name => (event, { newValue }) => {
        this.setState({
            [name]: newValue,
        });
    };
    
    handleSubmit = e => {
        e.preventDefault()
        let { cityId, coords } = this.state
        let selectedCity = { cityId, coords }
        this.props.relocate(this.props.user, selectedCity)
        this.setState({
            cityNameWithCountry: '',
        })
    }

    toggleMap = () => {
        this.setState({
            showMap: !this.state.showMap
        })
    }

    renderMap = () => {
        return <MapContainer userLocation={this.state.coords} coords={this.state.coords} />
    }

    renderForm = () => {
        const { classes, cities, user } = this.props
        return (
            <main className={classes.main}>
            <CssBaseline />
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                <FlightOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    {user.Stays.length > 0 ? "Find your next home!" : "Let's get you started, select your current location!"}
                </Typography>
                <Button type="button" center="true" variant="contained" color="primary" onClick={this.toggleMap} className={classes.submit}>
                    Toggle Map
                </Button>
                {this.state.showMap && this.renderMap()}
                <form id="user-form" className={classes.form} >
                <FormControl margin="normal" required fullWidth>
                    <CitySearch handleChange={this.handleInputChange} value={this.state.cityNameWithCountry} cities={cities} getCoordsFor={this.setCoordsFor} />
                </FormControl>
                <Button type="button" fullWidth variant="contained" color="primary" onClick={this.handleSubmit} className={classes.submit}>
                    {user.Stays.length > 0 ? "I'm on the Move!" : "Set Location!"}
                </Button>
                </form>
            </Paper>
            </main>
        )
    }

    componentDidMount = () => {
        this.props.fetchAllCities()
        this.props.user && this.setCoordsFor(this.props.user.location)
    }
    
    componentDidUpdate = prevProps => {
        this.props.user !== prevProps.user && this.setCoordsFor(this.props.user.location)
    }

    render() {
        const { user } = this.props
        return <div>
            {user && this.renderForm()}
        </div>;
  }
}

RelocateForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    return {
        user: state.user,
        cities: state.cities
    }
}

const mapDispatchToProps = dispatch => {
    return {
        relocate: (user, city) => dispatch(actions.stay.relocate(user, city)),
        fetchAllCities: () => dispatch(actions.city.fetchAll())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(RelocateForm))