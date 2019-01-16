import React from 'react'
import { connect } from 'react-redux'
import actions from '../state/actions/index'
import LoginForm from '../components/LoginForm'

class Login extends React.Component {

    constructor(props) {
        super(props)
        let token = localStorage.getItem("vicariouslyToken");
        !!token && this.props.history.push("/");
    }

    render() {
        return <LoginForm {...this.props} login={this.props.login} />
    }
}

const mapDispatchToProps = dispatch => {
  return {
    login: user => {
          dispatch(actions.user.login(user))
    }
  };
};

export default connect(null, mapDispatchToProps)(Login)