import React from 'react'
import { connect } from "react-redux";
import actions from "../state/actions/index";
import RegisterForm from '../components/RegisterForm'

class Register extends React.Component {
    
    constructor(props) {
        super(props)
        let token = localStorage.getItem("vicariouslyToken");
        !!token && this.props.history.push("/");
    }

    render() {
        return <RegisterForm {...this.props} create={this.props.create} />;
    }
}

const mapDispatchToProps = dispatch => {
  return {
    create: user => dispatch(actions.user.create(user))
  };
};

export default connect(null, mapDispatchToProps)(Register)