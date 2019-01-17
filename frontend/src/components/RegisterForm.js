import React from 'react'
import PropTypes from 'prop-types'
import Avatar from "@material-ui/core/Avatar";
import Button from '@material-ui/core/Button'
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from '@material-ui/core/FormControl'
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class RegisterForm extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        'password-confirm': ''
    }

    handleInputChange = e => {
        this.setState({ [e.target.id]: e.target.value })
    }
    
    handleSubmit = e => {
        e.preventDefault()
        this.props.register(this.state)
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            'password-confirm': ''
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
                Sign Up
                </Typography>
                <form id="user-form" className={classes.form} onSubmit={this.handleSubmit}>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="firstName">First Name</InputLabel>
                    <Input value={this.state.firstName} onChange={this.handleInputChange} name="firstName" type="firstName" id="firstName" autoFocus />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="password">Last Name</InputLabel>
                    <Input value={this.state.lastName} onChange={this.handleInputChange} name="lastName" type="lastName" id="lastName" />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="email">Email Address</InputLabel>
                    <Input value={this.state.email} onChange={this.handleInputChange} id="email" name="email" />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input value={this.state.password} onChange={this.handleInputChange} name="password" type="password" id="password" />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="password-confirm">Confirm Password</InputLabel>
                    <Input value={this.state['password-confirm']} onChange={this.handleInputChange} name="password-confirm" type="password" id="password-confirm" />
                </FormControl>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Sign me up
                </Button>
                </form>
            </Paper>
            </main>
        )
  }
}

RegisterForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegisterForm);

// export default function (props) {
//     return <Form id="user-form" onSubmit={props.register}>
//         <label htmlFor="user-firstName">First Name:</label>
//         <Text field="firstName" id="user-firstName" />
//         <label htmlFor="user-lastName">Last Name:</label>
//         <Text field="lastName" id="user-lastName" />
//         <label htmlFor="user-email">Email:</label>
//         <Text type="email" field="email" id="user-email" />
//         <label htmlFor="user-password">Password:</label>
//         <Text type="password" field="password" id="user-password" />
//         <label htmlFor="user-password-confirm">
//             Confirm Password:
//             </label>
//         <Text type="password" field="password-confirm" id="user-password-confirm" />
//         <Button variant="outlined" type="submit">
//             {" "}
//             Register{" "}
//         </Button>
//     </Form>
// }