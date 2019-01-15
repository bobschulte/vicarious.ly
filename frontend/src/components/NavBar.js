import React from 'react'
import { connect } from 'react-redux'
import actions from '../state/actions/index'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

class NavBar extends React.Component {

    renderLogoutButton = () => {
        if (localStorage.getItem('vicariouslyToken')) {
            return <Button variant='contained' onClick={() => this.props.logoutUser()} > Logout </Button>
        }
    }

    render() {
        return <div>
            <ToolBar>
              <AppBar>
                <Typography variant="h4" color="inherit">
                  VICARIOUS.LY
                </Typography>
                {this.renderLogoutButton()}
              </AppBar>
            </ToolBar>
          </div>;
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logoutUser: () => dispatch(actions.user.logout())
    }
}

export default connect(null, mapDispatchToProps)(NavBar)
