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
            cityName: '',
            coords: {
                lat: 4,
                lng: -78
            }
        }
    }

    setCoords = cityNameWithCountry => {
        console.log('passed it back: ', cityNameWithCountry)
        let slug = sluggify(cityNameWithCountry)
        console.log(slug)
        apiCall('GET', `/cities/${slug}`)
        .then(city => this.setState({
            coords: {
              lat: city.lat,
              lng: city.lng  
            }
        }))
    }

    handleInputChange = e => {
        this.setState({ [e.target.id]: e.target.value })
    }
    
    // this is buggy - it submits when an option is selected, doesnt wait for the form button
    handleSubmitButton = e => {
        e.preventDefault()
        console.log('submit hit! with: ', this.state)
        // this.props.relocate(localStorage.getItem('vicariouslyToken'), this.state)
        this.setState({
            cityName: '',
        })
    }

    componentDidMount = () => {
        this.props.fetchAllCities()
    }

    render() {
        const { classes, cities } = this.props;
        const { coords } = this.state

        return (
            <main className={classes.main}>
            <CssBaseline />
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                <FlightOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                Find your next home!
                </Typography>
                <form id="user-form" className={classes.form} >
                <FormControl margin="normal" required fullWidth>
                    <CitySearch cities={cities} getCoordsFor={this.setCoords} />
                </FormControl>
                    <MapContainer coords={coords} />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={this.handleSubmitButton}
                    className={classes.submit}
                >
                    I'm on the Move!
                </Button>
                </form>
            </Paper>
            </main>
        )
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
        relocate: (userId, city) => dispatch(actions.user.relocate(userId, city)),
        fetchAllCities: () => dispatch(actions.city.fetchAll())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(RelocateForm))