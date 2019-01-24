import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function FullWidthGrid(props) {
  const { classes, stay } = props;
  console.log('stay: ', stay)
  return (
    <div className={classes.root}>
      <Grid container spacing={16}>
        <Grid item xs={6} sm={3}>
            <Typography component="h4" variant="h5" color="textPrimary" gutterBottom>
                Arts & Culture
            </Typography>
            {stay.Places.filter(place => place.placeType === 'arts-culture').map(place => console.log(place.name))}
        </Grid>
        <Grid item xs={6} sm={3}>
            <Typography component="h4" variant="h5" color="textPrimary" gutterBottom>
              Food & Drink
            </Typography>
            {stay.Places.filter(place => place.placeType === 'food-drink').map(place => console.log(place.name))}
        </Grid>
        <Grid item xs={6} sm={3}>
            <Typography component="h4" variant="h5" color="textPrimary" gutterBottom>
                Nature & Outdoors
            </Typography>
            {stay.Places.filter(place => place.placeType === 'nature-outdoors').map(place => console.log(place.name))}
        </Grid>
        <Grid item xs={6} sm={3}>
            <Typography component="h4" variant="h5" color="textPrimary" gutterBottom>
                Points of Interest
            </Typography>
            {stay.Places.filter(place => place.placeType === 'point-of-interest').map(place => console.log(place.name))}
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullWidthGrid);
