import React from 'react';
import { connect } from 'react-redux'
import actions from '../state/actions/index'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
// import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';

const styles = theme => ({
  title: {
    fontSize: 24,
  },
//   placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing.unit * 3,
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});

class NavBar extends React.Component {

    isLoggedIn() {
        const userIdSlug = localStorage.getItem('vicariouslyId')
        return userIdSlug
    }

    renderLoginLinks() {
        const { classes } = this.props
        return <>
            <Button
                variant="text"
                underline="none"
                className={classes.rightLink}
                onClick={() => this.props.history.push('/login')}
            >
                {'Log In'}
            </Button>
            <Button
                variant="text"
                underline="none"
                className={classNames(classes.rightLink)}
                onClick={() => this.props.history.push('/register')}
            >
                {'Register'}
            </Button> 
        </>
    }

    renderUserLinks(userIdSlug) {
        const { classes, logoutUser } = this.props
        
        return <> 
            <Button color="inherit" variant="text" underline="none" className={classes.rightLink} onClick={() => this.props.history.push(`/users/${userIdSlug}`)}>
              {"My Travel Profile"}
            </Button>
            <Button variant="text" underline="none" className={classNames(classes.rightLink)} onClick={() => this.props.history.push('/cities')}>
              {"Browse Cities"}
            </Button>
            <Button onClick={logoutUser} variant="text" underline="none" className={classNames(classes.rightLink)}>
              {"Logout"}
            </Button>
          </>;
    }
    
    render() {
        const { classes } = this.props;
        const userIdSlug = this.isLoggedIn()
        return (
          <div>
            <AppBar position="static">
              <Toolbar className={classes.toolbar}>
                <div className={classes.left} />
                <Link
                  variant="h6"
                  underline="none"
                  color="inherit"
                  className={classes.title}
                  href="/"
                >
                  {'vicarious.ly'}
                </Link>
                <div className={classes.right}>
                  {userIdSlug ? this.renderUserLinks(userIdSlug) : this.renderLoginLinks()}
                </div>
              </Toolbar>
            </AppBar>
            <div className={classes.placeholder} />
          </div>
        );
    }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logoutUser: () => dispatch(actions.user.logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(NavBar))
