import React from 'react'
import { connect } from 'react-redux'
import actions from '../state/actions/index'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Button from '@material-ui/core/Button'

class NavBar extends React.Component {

    render() {
        let token = localStorage.getItem("vicariouslyToken");

        return <div style={{ flexgrow: 1 }}>
            <AppBar position="static">
              <ToolBar>
                <IconButton style={{ marginLeft: -12, marginRight: 20 }} color='inherit' >
                    <MenuIcon />
                </IconButton>
                <Typography style={{ flexgrow: 1, marginLeft: 10, marginRight: 10 }} variant="h4" color="inherit">
                  VICARIOUS.LY
                </Typography>
                {token && <div>
                    <Button style={{ marginLeft: 20, marginRight: 20 }} variant="contained" onClick={() => this.props.logoutUser()}>
                      {" "}
                      Logout{" "}
                    </Button>
                  </div>}
              </ToolBar>
            </AppBar>
          </div>;
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logoutUser: () => dispatch(actions.user.logout())
    }
}

export default connect(null, mapDispatchToProps)(NavBar)
