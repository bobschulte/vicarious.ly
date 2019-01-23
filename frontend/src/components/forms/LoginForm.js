import React from 'react'
import PropTypes from 'prop-types'
import Avatar from "@material-ui/core/Avatar";
import Button from '@material-ui/core/Button'
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from '@material-ui/core/FormControl'
// import FormControlLabel from '@material-ui/core/FormControlLabel'
// import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { styles } from "./helpers/styles/loginStyles";
import withStyles from "@material-ui/core/styles/withStyles";


class LoginForm extends React.Component {

    state = {
        email: '',
        password: '',
        // remember: false
    }

    handleInputChange = e => {
        this.setState({ [e.target.id]: e.target.value })
    }

    // handleCheckboxChange = e => {
    //     this.setState({ remember: !this.state.remember})
    // }
    
    handleSubmit = e => {
        e.preventDefault()
        this.props.login(this.state)
        this.setState({
            email: '',
            password: '',
            // remember: false
        })
    }
    render() {
        const { classes } = this.props;
        return (
            <main className={classes.main}>
            <CssBaseline />
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                Sign In
                </Typography>
                <br/>
                <Typography component="h6" variant="subtitle1" color="textSecondary" >
                Not a member yet? <a href="/register">Sign up here</a>
                </Typography>
                <form className={classes.form} onSubmit={this.handleSubmit}>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="email">Email Address</InputLabel>
                    <Input value={this.state.email} onChange={this.handleInputChange} id="email" name="email" autoComplete="email" autoFocus />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input value={this.state.password} onChange={this.handleInputChange} name="password" type="password" id="password" autoComplete="current-password" />
                </FormControl>
                {/* <FormControlLabel
                    control={<Checkbox id="remember" onChange={this.handleCheckboxChange} checked={this.state.remember} color="primary" />}
                    label="Remember me"
                /> */}
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Sign in
                </Button>
                </form>
            </Paper>
            </main>
        )
  }
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginForm);



// export default function (props) {
//     return <Form id="user-form" onSubmit={props.handleSubmit}>
//         <label htmlFor="user-email"> Email: </label>
//         <Text type="email" field="email" id="user-email" />
//         <label htmlFor="user-password"> Password: </label>
//         <Text type="password" field="password" id="user-password" />
//         <Button variant="outlined" type="submit">
//             {" "}
//             Login{" "}
//         </Button>
//     </Form>
// }