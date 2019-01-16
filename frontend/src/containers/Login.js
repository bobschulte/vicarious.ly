import React from 'react'
import { connect } from 'react-redux'
import actions from '../state/actions/index'
import LoginForm from '../components/LoginForm'
import RegisterForm from "../components/RegisterForm";

class Login extends React.Component {
  constructor(props) {
    super(props);
    let token = localStorage.getItem("vicariouslyToken");
    !!token && this.props.history.push("/");
  }

  render() {
    let { path } = this.props.match;
    return <div>
        {path === "/register" ? (
          <RegisterForm {...this.props} handleSubmit={this.props.register} />
        ) : (
          <LoginForm {...this.props} handleSubmit={this.props.login} />
        )}
      </div>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(actions.user.login(user)),
    register: user => dispatch(actions.user.register(user))
  };
};

export default connect(null, mapDispatchToProps)(Login)