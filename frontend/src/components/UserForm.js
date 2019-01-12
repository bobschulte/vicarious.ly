import React from 'react'
import { connect } from 'react-redux';
import { Form, Text } from 'informed'
import actions from '../actions/index';


class UserForm extends React.Component {

    state = {
        user: {}
    }

    render() {
        return (
            <>
                <Form id="user-form" onSubmit={this.props.createUser} >
                    <label htmlFor="user-firstName">First Name:</label>
                    <Text field="firstName" id="user-firstName" initialValue={this.state.user.firstName} />  {/* change these to props when ready */}
                    <label htmlFor="user-lastName">Last Name:</label>
                    <Text field="lastName" id="user-lastName" initialValue={this.state.user.lastName} />
                    <label htmlFor="user-email">Email:</label>
                    <Text field="email" id="user-email" initialValue={this.state.user.email} />
                    <label htmlFor="user-password">Password:</label>
                    <Text field="password" id="user-password" initialValue={this.state.user.password} />
                    <button type="submit">Register</button>
                </Form>
            </>
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
        createUser: (user) => dispatch(actions.user.create(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm)