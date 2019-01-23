import React from 'react'
import { connect } from 'react-redux';
import actions from '../state/actions/index'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import RelocateDialog from '../components/forms/RelocateDialog'
import PlaceIcon from '@material-ui/icons/Place'
import { dateParser } from '../components/helpers/dateParser'
import { altImgUrl, altBannerImgUrls } from '../components/helpers/styles/altImgUrl'

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.secondary.main
  },
  heroContent: {
    maxWidth: '100%',
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
  avatar: {
    margin: 10,
    width: 60,
    height: 60,
  }
});

class Album extends React.Component {

  isLoggedIn(user) {
    const token = localStorage.getItem('vicariouslyId')
    return token === user.userIdSlug
  }

  hasTakenTrip(user) {
    return user.Stays.length > 0
  }

  handleButtonClick(e) {
    e.persist()
    console.log(e.target)
  }

  calculateStats(user) {
    Array.prototype.unique = function () {
      return this.filter(function (value, index, self) {
        return self.indexOf(value) === index;
      });
    }
    const citiesCount = user.Stays.length
    const countriesCount = user.Stays.map(stay => stay.City.country).unique().length
    return { citiesCount, countriesCount }
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

  renderFooter() {
    const { classes } = this.props
    return <React.Fragment>
      <footer className={classes.footer}>
        <div className={classes.heroButtons}>
          <Grid container spacing={16} justify="center">
            <Grid item>
              {/* <Button variant="contained" color="primary">
                Return to Home Page
              </Button> */}
            </Grid>
          </Grid>
        </div>
      </footer>
    </React.Fragment>
  }

  renderRelocateButtonAndForm() {
    return <Grid container spacing={16} justify="center">
      <Grid item>
        <RelocateDialog />
      </Grid>
    </Grid>;
  }

  renderStayDetailButton(user, currentStay) {
    const isLoggedIn = this.isLoggedIn(user)
    return <Button href={`/users/${user.userIdSlug}/stays/${currentStay.id}`} variant="contained" color="primary">
      View {isLoggedIn ? "your" : `${user.firstName}'s`} stay in {user.location.split(",")[0]}
    </Button>
  }

  renderBannerDetail(user, isLoggedIn, currentStay) {
    const { citiesCount, countriesCount } = this.calculateStats(user)
    return <Typography variant="h6" align="center" color="textSecondary" paragraph>
      {isLoggedIn ? "You have" : `${user.name} has`} been in {currentStay.City.name} since {dateParser(currentStay.arrival)}.<br />
      {isLoggedIn ? "You have" : `${user.name} has`} visited {citiesCount} cities in {countriesCount} {countriesCount > 1 ? "countries" : "country"}.<br />
    </Typography>
  }

  renderBannerSection() {
    const { user, classes } = this.props
    const currentStay = user.Stays.find(stay => stay.departure === null)
    const isLoggedIn = this.isLoggedIn(user)
    const hasTakenTrip = this.hasTakenTrip(user)
    return <div className={classes.heroUnit}>
      <div className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          {user.name}<br/>
        </Typography>
        <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
          <PlaceIcon/>{hasTakenTrip ? user.location : `${user.firstName} has not taken a trip yet.`}
        </Typography>
        {hasTakenTrip && this.renderBannerDetail(user, isLoggedIn, currentStay)}
        <div className={classes.heroButtons}>
          <Grid container spacing={16} justify="center">
            <Grid item>
              {hasTakenTrip && this.renderStayDetailButton(user, currentStay)}
            </Grid>
          </Grid>
            {isLoggedIn && this.renderRelocateButtonAndForm()}
        </div>
      </div>
    </div>;
  }

  renderAlbumSection() {
    const { user, classes } = this.props
    const stays = [...user.Stays].filter(stay => stay.departure !== null).sort((cityA, cityB) => Date.parse(cityB.arrival) - Date.parse(cityA.arrival))
    return <div className={classNames(classes.layout, classes.cardGrid)}>
      <Typography component="h4" variant="h4" align="center" color="textPrimary" gutterBottom>
        Past stays:
      </Typography>
      <br/>
      <Grid container spacing={40}>
        {stays.map(stay => (
          <Grid item key={stay.id} sm={6} md={4} lg={3}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={stay.City.imgUrl ? stay.City.imgUrl : altImgUrl}
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {stay.City.name}
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="h4" color="textSecondary">
                  {stay.City.country}
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="h4" color="textSecondary">
                  {dateParser(stay.arrival)} to {dateParser(stay.arrival)}
                </Typography>
              </CardContent>
              <CardActions>
                <Tooltip title={`View ${user.firstName}'s past stay in ${stay.City.name}`} >
                  <Button href={`/users/${user.userIdSlug}/stays/${stay.id}`} size="small" color="primary">
                    View
                  </Button>
                </Tooltip>
                {/* <Button size="small" color="primary">
                  Edit
                </Button> */}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      {this.renderFooter()}
    </div>
  }

  componentDidMount = () => {
    const { userIdSlug } = this.props.match.params
    this.props.fetchUser(userIdSlug)
  }

  render() {
    const { user, classes } = this.props
    return <React.Fragment>
      <CssBaseline />
      <main>
        {user ? this.renderBannerSection() : this.renderLoadingMessage()}
        {user && user.Stays.length > 1 && this.renderAlbumSection()}
      </main>
    </React.Fragment>
  }
}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    return {
        user: state.user,
        stay: state.stay
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: (userId) => dispatch(actions.user.fetch(userId))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Album))