import React from 'react';
import styled from 'styled-components';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';


const SettingsContainer = styled.div`
margin: auto;
margin-top: 200px;
border: 1px solid black;
background-color: white;
display:flex;
justify-content: center;
align-items: center;
width: 700px;
height: 450px;
`

class Settings extends React.Component {
    state = {

        checkedEmail: false,
        checkedText: false,
        first_name: "",
        last_name: "",
        p_first_name: "",
        p_last_name: "",
        email: "",
        phone: "",
        address: "",
    };

    handleChecked = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {

        return (
            <SettingsContainer>
                <form>
                    <TextField
                        name="email"
                        id="outlined-email"
                        label="Email"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        name="phone"
                        id="outlined-phone"
                        label="Phone"
                        margin="normal"
                        variant="outlined"
                    />
                    <div className="Payment-info">
                        <TextField
                            name="first_name"
                            id="standard-name"
                            label="Partner Name"
                            margin="normal"
                        />
                        <TextField
                            name="last_name"
                            id="standard-name"
                            label="Partner Name"
                            margin="normal"
                        />
                        <TextField
                            name="p_first_name"
                            id="standard-name"
                            label="Partner Name"
                            margin="normal"
                        />
                        <TextField
                            name="p_last_name"
                            id="standard-name"
                            label="Partner Name"
                            margin="normal"
                        />
                    </div>
                    <div>
                        <FormGroup row>
                            <FormControlLabel
                                label="Email?"
                                labelPlacement="start"
                                control={
                                    <Checkbox
                                        checked={this.state.checkedEmail}
                                        onChange={this.handleChecked('checkedEmail')}
                                        value="checkedEmail"
                                        color="primary"
                                    />
                                }
                            />
                            <FormControlLabel
                                label="Text?"
                                labelPlacement="start"
                                control={
                                    <Checkbox
                                        checked={this.state.checkedText}
                                        onChange={this.handleChecked('checkedText')}
                                        value="checkedText"
                                        color="primary"
                                    />
                                }
                            />
                        </FormGroup>
                    </div>
                    <div>
                        <TextField
                            id="datetime-local"
                            label="Wedding Date &amp; Time"
                            type="datetime-local"
                            defaultValue="2019-01-15T10:30"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>
                    <TextField
                        name="address"
                        id="standard-location"
                        label="Wedding Location"
                        margin="normal"
                    />
                    <Button variant="contained" size="large" color="primary">
                        Save
                    </Button>
                </form>
            </SettingsContainer >
        );
    }
}

export default Settings;