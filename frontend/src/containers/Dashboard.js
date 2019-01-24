import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import actions from '../state/actions/index'
import Album from './Album'
import StayDashboard from './StayDashboard'

class Dashboard extends React.Component {

  componentDidMount = () => {
    const { userIdSlug } = this.props.match.params
    this.props.fetchUser(userIdSlug)
  }

  render() {
    const { match } = this.props
    return <React.Fragment>
        <Switch>
          <Route exact path={`${match.path}/`} component={Album} />
          <Route path={`${match.path}/stays/:stayId`} component={StayDashboard} />
        </Switch>
      </React.Fragment>;
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (userId) => dispatch(actions.user.fetch(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
