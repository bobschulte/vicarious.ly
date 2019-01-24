import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HomeBannerLayout from './HomeBannerLayout';
import HomeBody from './HomeBody'

const backgroundImage =
  "https://images.unsplash.com/photo-1534321238895-da3ab632df3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80";

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing.unit * 4,
    marginTop: theme.spacing.unit * 4,
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing.unit * 10,
    },
  },
  more: {
    marginTop: theme.spacing.unit * 2,
  },
});
    

function Home(props) {
  const { classes } = props

  function isLoggedIn() {
    const token = localStorage.getItem('vicariouslyToken')
    return token
  }
  
  function renderRegisterButton() {
    return <Button color="secondary" variant="contained" size="large" className={classes.button} onClick={() => props.history.push("/register")}>
      Register
    </Button>;
  }
  
  return <React.Fragment>
      <HomeBannerLayout backgroundClassName={classes.background}>
          {/* Increase the network loading priority of the background image. */}
          <img style={{ display: 'none' }} src={backgroundImage} alt="" />
          <Typography color="inherit" align="center" variant="h2" marked="center">
            Share your travel experiences with your loved ones
          </Typography>
          <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
            Feel connected to family and friends as you travel the globe
          </Typography>
          {!isLoggedIn() && renderRegisterButton()}
      </HomeBannerLayout>
      <HomeBody />
  </React.Fragment>
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home)