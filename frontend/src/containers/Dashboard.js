import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
// import Button from "@material-ui/core/Button";
import actions from '../state/actions/index'
import RelocateForm from '../components/forms/RelocateForm'
import StaysList from '../components/StaysList'
import Album from './Album'
import StayDashboard from './StayDashboard'

class Dashboard extends React.Component {

  componentDidMount = () => {
    const { userIdSlug } = this.props.match.params
    this.props.fetchUser(userIdSlug)
  }

  renderCitiesVisited = () => <StaysList user={this.props.user} viewStay={this.visitStayPage} />

  visitStayPage = stayId => this.props.history.push(`/users/${this.props.match.params.userIdSlug}/album/${stayId}`)

  renderDashboard = () => {
    let { firstName, location, Stays } = this.props.user

    return <div>
      {Stays.length > 0 && this.renderCitiesVisited()}
      <h2 style={{ marginLeft: 20 }}>
        {firstName} {location ? `is in ${location}` : 'has not taken a trip yet'}.
        </h2>
    </div>;
  }

  render() {
    const { user, match } = this.props
    return <div>
        {user && this.renderDashboard()}
        {!user && <h1>Loading...</h1>}
        <Switch>
          <Route exact path={`${match.path}/relocate`} component={RelocateForm} />
          <Route path={`${match.path}/album/:stayId`} component={StayDashboard} />
          {/* <Route path={`${match.path}/album`} component={Album} /> */}
        </Switch>
      </div>;
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    cities: state.cities
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (userId) => dispatch(actions.user.fetch(userId)),
    fetchCities: () => dispatch(actions.city.fetch())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
