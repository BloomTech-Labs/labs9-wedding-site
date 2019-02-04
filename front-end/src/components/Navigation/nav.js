import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
// import Grid from '@material-ui/core/Grid';
// import { FormHelperText } from '@material-ui/core';
// import { pink } from '@material-ui/core/colors';

const styles = {
  bigAvatar: {
    width: 50,
    height: 50,
    border: '3px solid pink',
  },
};

function ImageAvatars(props) {
  const { classes } = props;
  return (
      <Avatar alt="Remy Sharp" src="https://i.pinimg.com/564x/9b/f4/3a/9bf43a4594863f04ac2648fa3071c5e8.jpg" className={classes.bigAvatar} />
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);