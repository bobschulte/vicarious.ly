import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from "@material-ui/core/Dialog";
import RelocateForm from './RelocateForm'

export default class RelocateDialogForm extends React.Component {
    state = {
        open: false,
    };
    
    handleClickOpen = () => {
        this.setState({ open: true });
    };
    
    handleClose = () => {
        this.setState({ open: false });
    };
    
    render() {
        return <div>
            <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
                Ready to move to a new city!
            </Button>
            <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title" >
                <RelocateForm />
                <Button onClick={this.handleClose} color="primary">
                    Cancel
                </Button>
            </Dialog>
        </div>
    }
}