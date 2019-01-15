import React from 'react'
import { connect } from 'react-redux';
import { Form, Text } from 'informed'
import actions from '../state/actions/index';
// import FormControl from '@material-ui/core/FormControl'


class LoginForm extends React.Component {

    state = {
        user: {}
    }

    render() {
        return (
            <>
                <Form id="user-form" onSubmit={this.props.loginUser} >
                    <label htmlFor="user-email">Email:</label>
                    <Text type="email" field="email" id="user-email" initialValue={this.state.user.email} />
                    <label htmlFor="user-password">Password:</label>
                    <Text type="password" field="password" id="user-password" initialValue={this.state.user.password} />
                    <button type="submit">Login</button>
                </Form>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginUser: user => dispatch(actions.user.login(user))
    }
}

export default connect(null, mapDispatchToProps)(LoginForm)