import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LayoutBody from "./LayoutBody";
import PlaceIcon from '@material-ui/icons/Place'
import LocationCityIcon from '@material-ui/icons/LocationCity'
import PeopleIcon from '@material-ui/icons/People'

const styles = theme => ({
  root: {
    display: "flex",
    overflow: "hidden",
    backgroundColor: theme.palette.secondary.light
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 5,
    display: "flex",
    position: "relative"
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `0px ${theme.spacing.unit * 5}px`
  },
  image: {
    height: 55
  },
  title: {
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 5
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180
  },
  icon: {
      fontSize: '80px'
  }
});

function HomeBody(props) {
  const { classes } = props;

  return <section className={classes.root}>
      <LayoutBody className={classes.layoutBody} width="large">
        <img src="/static/themes/onepirate/productCurvyLines.png" className={classes.curvyLines} alt="curvy lines" />
        <Grid container spacing={40}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <LocationCityIcon className={classes.icon} />
              <Typography variant="h6" className={classes.title}>
                Explore Cities Around the World
              </Typography>
              {/* <Typography variant="h6">
                {"From the latest trendy boutique hotel to the iconic palace with XXL pool"}
              </Typography> */}
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <PlaceIcon className={classes.icon} />
              <Typography variant="h6" className={classes.title}>
                Save Your Favorite Experiences
              </Typography>
              {/* <Typography variant="h6">
                {"Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… "}
              </Typography> */}
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <PeopleIcon className={classes.icon} />
              <Typography variant="h6" className={classes.title}>
                Keep Your Loved Ones in the Loop
              </Typography>
              {/* <Typography variant="h6">
                {"By registering, you will access specially negotiated rates "}
              </Typography> */}
            </div>
          </Grid>
        </Grid>
      </LayoutBody>
    </section>;
}

HomeBody.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomeBody);
