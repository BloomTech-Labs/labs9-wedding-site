import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    fontFamily: "\Roboto\", \"Helvetica\", \"Arial\", \"sans-serif", 
    color: 'rgba(0, 0, 0, 0.87)',
    fontWeight: 500,
    fontSize:14,

  },
  input: {
    display: 'none',
  },
});

function TextButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button className={classes.button}>CSV Example Format</Button>
     </div>
  );
}

TextButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextButtons);