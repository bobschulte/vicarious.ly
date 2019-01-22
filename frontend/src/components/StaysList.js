import React from 'react';
import PropTypes from 'prop-types';
import { styles } from "./helpers/styles/staysListStyles";
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from '@material-ui/core/IconButton';
import DescriptionIcon from '@material-ui/icons/Description'
import { altImgUrl } from './helpers/styles/altImgUrl'

function StaysList(props) {
  const { classes, user } = props
  const stays = [...user.Stays].reverse()

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={6}>
        {stays.map(stay => {
            const imgUrl = stay.City.imgUrl ? stay.City.imgUrl : altImgUrl
            return (
              <GridListTile key={stay.id}>
                <img src={imgUrl} alt={stay.City.nameWithCountry} />
                <GridListTileBar
                    title={stay.City.nameWithCountry}
                    classes={{
                        root: classes.titleBar,
                        title: classes.title,
                    }}
                    actionIcon={
                      <Tooltip title={`View ${user.firstName}'s stay in ${stay.City.name}`} >
                        <IconButton onClick={() => props.viewStay(stay.id)}>
                        <DescriptionIcon className={classes.title} />
                        </IconButton>
                    </Tooltip>
                    }
                />
              </GridListTile>
            )
        })}
      </GridList>
    </div>
  );
}

StaysList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StaysList);