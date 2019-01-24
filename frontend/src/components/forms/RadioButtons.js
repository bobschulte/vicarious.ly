import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from "@material-ui/core/Radio";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const styles = {
  root: {
    display: 'block'
  },
  checked: {}
};

class RadioButtons extends React.Component {
  
  handleChange = event => {
    this.props.onChange(event.target.value)
  };

  render() {
    const { classes } = this.props

    return <div className={classes.root}>
        <FormGroup className={classes.root} row>
          <FormControlLabel value="arts-culture" control={<Radio checked={this.props.placeType === 'arts-culture'} onChange={this.handleChange} />} label="Arts/Culture" />
          <FormControlLabel value="food-drink" control={<Radio checked={this.props.placeType === 'food-drink'} onChange={this.handleChange} />} label="Food/Drink" />
          <FormControlLabel value="outdoors" control={<Radio checked={this.props.placeType === 'outdoors'} onChange={this.handleChange} />} label="Outdoors" />
          <FormControlLabel value="shopping" control={<Radio checked={this.props.placeType === 'shopping'} onChange={this.handleChange} />} label="Shopping" />
          <FormControlLabel value="sightseeing" control={<Radio checked={this.props.placeType === 'sightseeing'} onChange={this.handleChange} />} label="Sightseeing" />
          <FormControlLabel value="other" control={<Radio checked={this.props.placeType === 'other'} onChange={this.handleChange} />} label="Other" />
        </FormGroup>
      </div>;
  }
}

RadioButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtons);