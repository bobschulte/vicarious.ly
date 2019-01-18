import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import Button from "@material-ui/core/Button";
import actions from '../state/actions/index'
import RelocateForm from '../components/forms/RelocateForm'

class Dashboard extends React.Component {

  constructor(props) {
    super(props)
    let token = localStorage.getItem("vicariouslyToken");
    !token && this.props.history.push("/login");
  }

  componentDidMount = () => {
    let userId = this.props.match.params.id
    this.props.fetchUser(userId)
  }

  renderRelocateButton = () => {
    return <Button style={{ marginLeft: 20 }} variant="outlined" onClick={() => this.props.history.push(`/users/${this.props.user.id}/relocate`)}>
      {" "}
      Move to a New City{" "}
    </Button>
  }

  renderUserData = () => {
    return <div>
      <h2 style={{ marginLeft: 20 }}>
        {this.props.user.firstName} is in {this.props.user.location}.
        </h2>
      {this.renderRelocateButton()}
      <h4 style={{ marginLeft: 20 }}>
        Cities visited:
        </h4>
      <ul>
        {this.props.user.Stays.map(stay => (
          <li key={stay.City.id}>{stay.City.nameWithCountry}</li>
        ))}
      </ul>
      <Button style={{ marginLeft: 20 }} variant="outlined" onClick={() => this.props.fetchCities()}>Get Cities</Button>
    </div>;
  }

  render() {
    const { user, match } = this.props

    return (
      <div>
        {user && this.renderUserData()}
        {!user && <h1>Loading...</h1>}
        <Route path={`${match.path}/relocate`} component={RelocateForm} />
      </div>
    )
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
    relocateUser: userId => dispatch(actions.user.relocate(userId)),
    fetchCities: () => dispatch(actions.city.fetch())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
