import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from "@material-ui/core/Dialog";
import RelocateForm from './RelocateForm'

export default class RelocateDialog extends React.Component {
    state = {
        open: this.props.open,
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
            <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
              <RelocateForm closeForm={this.handleClose} cityName={this.props.cityName} />
                <Button onClick={this.handleClose} color="primary">
                  Cancel
                </Button>
            </Dialog>
          </div>;
    }
}