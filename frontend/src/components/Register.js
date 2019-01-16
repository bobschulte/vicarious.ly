import React from 'react'
import RegisterForm from './RegisterForm'

class Register extends React.Component {
    render() {
        return <RegisterForm {...this.props} />;
    }
}

export default Register