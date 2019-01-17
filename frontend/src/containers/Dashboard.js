import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import Button from "@material-ui/core/Button";
import actions from '../state/actions/index'
import RelocateForm from '../components/RelocateForm'

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

  renderUserData = () => {
    return <div>
      <h2 style={{ marginLeft: 20 }}>
        Welcome, {this.props.user.firstName}. You are in {this.props.user.location}.
        </h2>
      <h4 style={{ marginLeft: 20 }}>
        You have visited:
        </h4>
      <ul>
        {this.props.user.Stays.map(stay => (
          <li key={stay.City.id}>{stay.City.nameWithCountry}</li>
        ))}
      </ul>
      <Button style={{ marginLeft: 20 }} variant="outlined" onClick={() => this.props.relocateUser(this.props.user.id)}>
        {" "}
        Move to a New City{" "}
      </Button>
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
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: userId => dispatch(actions.user.fetch(userId)),
    relocateUser: userId => dispatch(actions.user.relocate(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
