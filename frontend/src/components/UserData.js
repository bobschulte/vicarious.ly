import React from 'react'
import { connect } from 'react-redux'
import actions from '../actions/index'

class UserData extends React.Component {

  componentDidMount = () => {
    localStorage.getItem('token') && this.props.getUserData()
  }

  render() {
    return (
      <div>
        <h2>Welcome, {this.props.user.firstName}. You are in {this.props.user.location}. You have visited: </h2>
        <ul>
          {this.props.user.Stays.map(stay => <li key={stay.City.id} >{stay.City.nameWithCountry}</li>)}
        </ul>
        <button onClick={() => this.props.relocateUser(this.props.user.id)} > Relocate User </button>
        <br/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: () => dispatch(actions.user.login()),
    getUserData: () => dispatch(actions.user.getData()),
    relocateUser: (userId) => dispatch(actions.user.relocate(userId)),
    logoutUser: () => dispatch(actions.user.logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserData);
