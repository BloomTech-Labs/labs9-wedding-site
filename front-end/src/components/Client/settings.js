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
display: flex;
flex-direction: wrap;
width: 750px;
height: 450px;
`
const InputFields = styled.div`
display: flex;
flex-wrap: wrap;
justify-content:center;
`
const EmailPassword = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: center;
width: 50%;
`
const NameLocation = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: center;
width: 50%;
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
                <InputFields>
                    <EmailPassword>
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
                    </EmailPassword>
                    <NameLocation>
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
                            id="standard-location"
                            label="Wedding Location"
                            margin="normal"
                        />
                    </NameLocation>
                    <div>
                    <Button variant="contained" size="large" color="primary">
                        Save
                    </Button>
                    </div>
                </InputFields>
            </SettingsContainer >
        );
    }
}

export default Settings;