import React from 'react'
import { connect } from 'react-redux';
import { Form, Text } from 'informed'
import Button from "@material-ui/core/Button";
import actions from '../state/actions/index';
// import FormControl from '@material-ui/core/FormControl'


class NewUserForm extends React.Component {

    handleSubmit = user => {
        this.props.createUser(user)
        this.props.history.push('/')
    }

    render() {
        return <>
            <Form id="user-form" onSubmit={this.handleSubmit}>
              <label htmlFor="user-firstName">First Name:</label>
              <Text field="firstName" id="user-firstName" />
              <label htmlFor="user-lastName">Last Name:</label>
              <Text field="lastName" id="user-lastName" />
              <label htmlFor="user-email">Email:</label>
              <Text type="email" field="email" id="user-email" />
              <label htmlFor="user-password">Password:</label>
              <Text type="password" field="password" id="user-password" />
              <label htmlFor="user-password-confirm">
                Confirm Password:
              </label>
              <Text type="password" field="password-confirm" id="user-password-confirm" />
              <Button variant="outlined" type="submit">
                {" "}
                Register{" "}
              </Button>
            </Form>
          </>;
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createUser: (user) => dispatch(actions.user.create(user))
    }
}

export default connect(null, mapDispatchToProps)(NewUserForm)