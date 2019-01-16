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
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {

        return (
            <SettingsContainer>
                <form>
                    <TextField
                        id="outlined-email"
                        label="Email"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-phone"
                        label="Phone"
                        margin="normal"
                        variant="outlined"
                    />
                    <div className="Payment-info">
                        <TextField
                            id="standard-name"
                            label="Partner Name"
                            margin="normal"
                        />
                        <TextField
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
                                        onChange={this.handleChange('checkedEmail')}
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
                                        onChange={this.handleChange('checkedText')}
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

                    <div className="Payment-info">
                        <TextField
                            id="outlined-password"
                            variant="outlined"
                            type="password"
                            label="Old Password"
                        />
                        <TextField
                            id="outlined-password"
                            variant="outlined"
                            type="password"
                            label="New Password"
                        />
                    </div>
                    <TextField
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