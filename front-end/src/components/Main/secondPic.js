import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { FormHelperText } from '@material-ui/core';
import { pink } from '@material-ui/core/colors';

const styles = {
  bigAvatar: {
    display:'flex',
    marginTop:60,
    marginLeft:-20,
    width: 150,
    height: 150,
    border: '6px solid pink',
  },
};

function ImageAvatars(props) {
  const { classes } = props;
  return (
    <Grid>
      <Avatar alt="Remy Sharp" src="https://i.pinimg.com/564x/9b/f4/3a/9bf43a4594863f04ac2648fa3071c5e8.jpg" className={classes.bigAvatar} />
    </Grid>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);