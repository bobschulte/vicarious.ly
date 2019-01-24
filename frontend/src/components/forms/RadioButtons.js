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
          <FormControlLabel value="nature-outdoors" control={<Radio checked={this.props.placeType === 'nature-outdoors'} onChange={this.handleChange} />} label="Nature/Outdoors" />
          <FormControlLabel value="point-of-interest" control={<Radio checked={this.props.placeType === 'point-of-interest'} onChange={this.handleChange} />} label="Point of Interest/Other" />
        </FormGroup>
      </div>;
  }
}

RadioButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtons);