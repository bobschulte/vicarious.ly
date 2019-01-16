import React from 'react'
import { connect } from 'react-redux'
import Button from "@material-ui/core/Button";
import actions from '../state/actions/index'

class Dashboard extends React.Component {

  constructor(props) {
    super(props)
    let token = localStorage.getItem("vicariouslyToken");
    !token && this.props.history.push("/login");
  }

  componentDidMount = () => {
    localStorage.getItem('vicariouslyToken') && this.props.getUserData()
  }

  render() {
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
          Relocate User{" "}
        </Button>
      </div>;
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUserData: () => dispatch(actions.user.getData()),
    relocateUser: (userId) => dispatch(actions.user.relocate(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
