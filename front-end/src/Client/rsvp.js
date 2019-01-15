import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

// define styles for material-ui components
const styles = {
    card: {
      width: '30%',
      margin: '0 auto 30px',
      padding: '0 20px 20px'
    },
  };

class Rsvp extends Component {
    render() {
      return (
        <div>
            <Card style={styles.card}>
            <CardContent>
                Guest Name
                <TextField fullWidth={true} label="First Name"></TextField>
                <TextField fullWidth={true} label="Last Name"></TextField>
            </CardContent>
            </Card>
            <Card style={styles.card}>
            <CardContent>
                Attendance
            </CardContent>
            <CardContent>
                <FormControl component="fieldset">
                <FormLabel component="legend">Will you be attending our wedding?</FormLabel>
                <RadioGroup>
                    <FormControlLabel value="attending" control={<Radio />} label="Attending" />
                    <FormControlLabel value="notAttending" control={<Radio />} label="Not attending" />
                    <FormControlLabel value="maybe" control={<Radio />} label="Maybe" />
                </RadioGroup>
                </FormControl>
            </CardContent>
            </Card>
            <Card style={styles.card}>
            <CardContent>
                Address
            </CardContent>
            <CardContent>
                What is your mailing address?
                <TextField fullWidth={true}></TextField>
            </CardContent>
            </Card>
            <Card style={styles.card}>
            <CardContent>
                Wedding Team
            </CardContent>
            <CardContent>
                <FormControl component="fieldset">
                <FormLabel component="legend">Are you a friend or family of... ?</FormLabel>
                <RadioGroup>
                    <FormControlLabel value="bride" control={<Radio />} label="Bride" />
                    <FormControlLabel value="groom" control={<Radio />} label="Groom" />
                    <FormControlLabel value="both" control={<Radio />} label="Both" />
                </RadioGroup>
                </FormControl>
            </CardContent>
            </Card>
        </div>
      );
    }
  }
  
  export default Rsvp;
