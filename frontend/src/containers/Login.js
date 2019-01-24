import React from 'react'
import { connect } from 'react-redux'
import actions from '../state/actions/index'
import LoginForm from '../components/forms/LoginForm'
import RegisterForm from "../components/forms/RegisterForm";

class Login extends React.Component {
  constructor(props) {
    super(props);
    let token = localStorage.getItem("vicariouslyToken");
    !!token && this.props.history.push("/");
  }

  render() {
    let { path } = this.props.match;
    return <>
        {path === "/register" ? (
          <RegisterForm {...this.props} register={this.props.register} />
        ) : (
          <LoginForm {...this.props} login={this.props.login} />
        )}
      </>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(actions.user.login(user)),
    register: user => dispatch(actions.user.register(user))
  };
};

export default connect(null, mapDispatchToProps)(Login)