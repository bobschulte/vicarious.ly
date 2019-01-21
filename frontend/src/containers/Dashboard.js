import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
// import Button from "@material-ui/core/Button";
import actions from '../state/actions/index'
import RelocateForm from '../components/forms/RelocateForm'

class Dashboard extends React.Component {

  constructor(props) {
    super(props)
    let token = localStorage.getItem("vicariouslyToken");
    !token && this.props.history.push("/login");
  }

  componentDidMount = () => {
    const { userIdSlug } = this.props.match.params
    this.props.fetchUser(userIdSlug)
  }

  renderCitiesVisited = stays => {
    return <div>
      <h4 style={{ marginLeft: 20 }}>
        Cities visited:
        </h4>
      <ul>
        {stays.map(stay => <li key={stay.City.id}>{stay.City.nameWithCountry}</li>)}
      </ul>
    </div>
  }

  renderUserData = () => {
    let { firstName, location, Stays } = this.props.user

    return <div>
      <h2 style={{ marginLeft: 20 }}>
        {firstName} {location ? `is in ${location}` : 'has not taken a trip yet'}.
        </h2>
      {Stays.length > 0 && this.renderCitiesVisited(Stays)}
    </div>;
  }

  render() {
    const { user, match } = this.props
    return <div>
        {user && this.renderUserData()}
        {!user && <h1>Loading...</h1>}
        <Route path={`${match.path}/relocate/`} component={RelocateForm} />
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
    fetchUser: userId => dispatch(actions.user.fetch(userId)),
    fetchCities: () => dispatch(actions.city.fetch())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
