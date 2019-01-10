import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import { lightpink } from '@material-ui/core/colors';
import SignupLogin from './SignupLoginButtons';
import './SignupLoginButtons.css';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit,
    borderColor: 'lightpink',
    paddingLeft: 20,
    paddingRight:20,
    fontFamily: 'Montserrat',
    fontWeight: 400,
    textTransform:'none',
  },
});

function OutlinedChips(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>

     <Chip
        label="Home"
        className={classes.chip}
        // component="a"
        href="#chip"
        clickable
        variant="outlined"
      />
      
     <Chip
        label="Designs"
        className={classes.chip}
        // component="a"
        href="#chip"
        clickable
        variant="outlined"
      />
       <Chip
        label="Pricing"
        className={classes.chip}
        // component="a"
        href="#chip"
        clickable
        variant="outlined"
      />
    </div>
    );
  }
  
  OutlinedChips.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(OutlinedChips);