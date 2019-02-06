import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  bigAvatar: {
    width: 280,
    height: 280,
    // border: '3px solid pink',
  },
};

function ImageAvatars(props) {
  const { classes } = props;
  return (
      <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1537472118372-6f169be79585?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" className={classes.bigAvatar} />
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);