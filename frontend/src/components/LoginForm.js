import React from 'react'
import { Form, Text } from 'informed'
import Button from '@material-ui/core/Button'
// import FormControl from '@material-ui/core/FormControl'


export default function (props) {
    return <Form id="user-form" onSubmit={props.handleSubmit}>
        <label htmlFor="user-email"> Email: </label>
        <Text type="email" field="email" id="user-email" />
        <label htmlFor="user-password"> Password: </label>
        <Text type="password" field="password" id="user-password" />
        <Button variant="outlined" type="submit">
            {" "}
            Login{" "}
        </Button>
    </Form>
}