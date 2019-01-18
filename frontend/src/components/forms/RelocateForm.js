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
// import apiCall from '../../state/actions/helpers/apiCall'


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

    setCoords = coords => {
        // apiCall('/GET', ) // figure out how to send the city name or coords thru params
        // .then(res => this.setState({
        //     coords: res.coords
        // }))
    }

    handleInputChange = e => {
        this.setState({ [e.target.id]: e.target.value })
    }
    
    handleSubmit = e => {
        e.preventDefault()
        // this.props.relocate(localStorage.getItem('vicariouslyToken'), this.state)
        this.setState({
            cityName: '',
        })
    }

    render() {
        const { classes } = this.props;
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
                <form id="user-form" className={classes.form} onSubmit={this.handleSubmit}>
                <FormControl margin="normal" required fullWidth>
                    <CitySearch setCoords={this.setCoords} />
                </FormControl>
                    <MapContainer coords={this.state.coords} />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
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
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        relocate: (userId, city) => dispatch(actions.user.relocate(userId, city))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(RelocateForm))