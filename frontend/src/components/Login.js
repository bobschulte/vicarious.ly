import React from 'react'
import LoginForm from './LoginForm'

class Register extends React.Component {
    render() {
        return <LoginForm {...this.props} />
    }
}

export default Register