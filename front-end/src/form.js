import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import pink from "@material-ui/core/colors/pink";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing.unit
  },
  cssLabel: {
    "&$cssFocused": {
      color: pink[100]
    }
  },
  cssFocused: {},
  cssUnderline: {
    "&:after": {
      borderBottomColor: pink[100]
    }
  },
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: pink[100]
    }
  },
  notchedOutline: {},
  bootstrapRoot: {
    "label + &": {
      marginTop: theme.spacing.unit * 3
    }
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  },
  bootstrapFormLabel: {
    fontSize: 18
  },
  position: {
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    alignContent:'space-between',
    width:350,
    // position:'absolute',
    // left: 1000,
  },
  group: {
    display:'flex',
    flexDirection:'row',
  },
  wholegroup: {
    position:'absolute',
    left: 500,
    top:100,
  },
  lasttwo:{
    width:690,
    marginLeft:8,
  }
});

function CustomizedInputs(props) {
  const { classes } = props;

  return (
    <div className={classes.wholegroup}>
      <div className={classes.group}>
    <div className={classes.container} className={classes.position}>
      <FormControl className={classes.margin}>
        <InputLabel
          htmlFor="custom-css-standard-input"
          classes={{
            root: classes.cssLabel,
            focused: classes.cssFocused,
          }}
        >
          First Name
        </InputLabel>

        <Input
          id="custom-css-standard-input"
          classes={{
            underline: classes.cssUnderline
          }}
        />
      </FormControl>
    </div>
    <div className={classes.container} className={classes.position}>
      <FormControl className={classes.margin}>
        <InputLabel
          htmlFor="custom-css-standard-input"
          classes={{
            root: classes.cssLabel,
            focused: classes.cssFocused
          }}
        >
          Last Name
        </InputLabel>

        <Input
          id="custom-css-standard-input"
          classes={{
            underline: classes.cssUnderline
          }}
        />
      </FormControl>
    </div>
    </div>

      <div className={classes.group}>
      <div className={classes.container}className={classes.position}>
        <FormControl className={classes.margin}>
          <InputLabel
            htmlFor="custom-css-standard-input"
            classes={{
              root: classes.cssLabel,
              focused: classes.cssFocused
            }}
          >
            Partner's First Name
        </InputLabel>

          <Input
            id="custom-css-standard-input"
            classes={{
              underline: classes.cssUnderline
            }}
          />
        </FormControl>
      </div>
      <div className={classes.container}className={classes.position}>
        <FormControl className={classes.margin}>
          <InputLabel
            htmlFor="custom-css-standard-input"
            classes={{
              root: classes.cssLabel,
              focused: classes.cssFocused
            }}
          >
            Partner's Last Name
        </InputLabel>

          <Input
            id="custom-css-standard-input"
            classes={{
              underline: classes.cssUnderline
            }}
          />
        </FormControl>
      </div>
      </div>

     <div className={classes.group} >
      <div className={classes.container}className={classes.position}>
        <FormControl className={classes.margin} className={classes.lasttwo}>
          <InputLabel
            htmlFor="custom-css-standard-input"
            classes={{
              root: classes.cssLabel,
              focused: classes.cssFocused
            }}
          >
            Event Date
        </InputLabel>

          <Input
            id="custom-css-standard-input"
            classes={{
              underline: classes.cssUnderline
            }}
          />
        </FormControl>
      </div>
      </div>
      <div className={classes.group} >
      <div className={classes.container} className={classes.position}>
        <FormControl className={classes.margin} className={classes.lasttwo}>
          <InputLabel
            htmlFor="custom-css-standard-input"
            classes={{
              root: classes.cssLabel,
              focused: classes.cssFocused
            }}
          >
            Location
        </InputLabel>

          <Input
            id="custom-css-standard-input"
            classes={{
              underline: classes.cssUnderline
            }}
          />
        </FormControl>
      </div>
      </div>
    </div>
  );
}

CustomizedInputs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedInputs);
