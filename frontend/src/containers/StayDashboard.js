import React from 'react'
import { connect } from 'react-redux';
import actions from '../state/actions/index'
import { dateParser } from '../components/helpers/dateParser'
import PlacesSearch from '../components/forms/PlacesSearch'
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import StaysList from "../components/StaysList";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import PlaceIcon from "@material-ui/icons/Place";

const styles = theme => ({
    appBar: {
        position: 'relative',
    },
    heroUnit: {
        backgroundColor: theme.palette.secondary.main
    },
    heroContent: {
        maxWidth: '100%',
        margin: '0 auto',
        padding: `${theme.spacing.unit * 2}px 0 ${theme.spacing.unit * 1}px`,
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        }
    }
})

class StayDashboard extends React.Component {

    state = {
        value: ''
    }

    isLoggedIn(user) {
        const token = localStorage.getItem('vicariouslyId')
        return token === user.userIdSlug
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

    renderLoadingMessage() {
        const { classes } = this.props
        return <div className={classes.heroUnit}>
            <div className={classes.heroContent}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Loading...
                 </Typography>
            </div>
        </div>
    }

    renderReturnToAlbumButton(user) {
        const isLoggedIn = this.isLoggedIn(user)
        return <Button href={`/users/${user.userIdSlug}`} variant="contained" color="primary">
            Return to {isLoggedIn ? "your" : `${user.firstName}'s`} profile
        </Button>
    }

    renderBannerSection() {
        const { user, classes } = this.props
        return <div className={classes.heroUnit}>
            <div className={classes.heroContent}>
                <Typography component="h4" variant="h5" align="center" color="textPrimary" gutterBottom>
                    {user.name}<br />
                </Typography>
                <div className={classes.heroButtons}>
                    <Grid container spacing={16} justify="center">
                        <Grid item>
                            {this.renderReturnToAlbumButton(user)}
                        </Grid>
                    </Grid>
                    <br/>
                </div>
            </div>
        </div>;
    }

    renderDateMessage = stay => {
        const { user } = this.props
        return stay.departure === null ? 
            `${user.firstName} has been in ${stay.City.nameWithCountry} since ${dateParser(stay.arrival)}`
            : 
            `${user.firstName} visited ${stay.City.nameWithCountry} from ${dateParser(stay.arrival)} to ${dateParser(stay.departure)}`
    }

    renderStaysList = () => <StaysList viewStay={this.props.viewStay} />

    renderContent = user => {
        const stay = user.Stays.find(stay => stay.id === this.props.match.params.stayId)

        return <div>
            {this.renderBannerSection()}
            {this.renderStaysList()}
            <br/>
            <Typography component="h4" variant="h5" align="center" color="textPrimary" gutterBottom>
                <PlaceIcon/> {this.renderDateMessage(stay)}
            </Typography>
            <h4>Search local places:</h4><br/>
            <PlacesSearch onChange={this.handlePlaceInputChange} onSubmit={this.handlePlaceSubmit} value={this.state.value} lat={stay.City.lat} lng={stay.City.lng} />
          </div>;
    }

    render() {
        let { user } = this.props
        return <div>
            {user ? this.renderContent(user) : this.renderLoadingMessage()}
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
        addPlace: place => dispatch(actions.places.add(place)),
        viewStay: (stay, userIdSlug) => dispatch(actions.stay.view(stay, userIdSlug))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(StayDashboard))