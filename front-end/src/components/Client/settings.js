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
align-items: center;
width: 50%;
`
const NameLocation = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: center;
width: 50%;
`

class Settings extends React.Component {
    constructor() {
        super();
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
    }

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
                        <EmailPassword>
                        <FormGroup>
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
                    </EmailPassword>
                    <InputFields>
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
                            <TextField
                                id="datetime-local"
                                label="Wedding Date &amp; Time"
                                type="datetime-local"
                                defaultValue="2019-01-15T10:30"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        <TextField
                            id="standard-location"
                            label="Wedding Location"
                            margin="normal"
                        />
                    </NameLocation>
                    <Button variant="contained" size="large" color="primary">
                        Save
                    </Button>
                </InputFields>
                </form>
            </SettingsContainer >
        );
    }
}

export default Settings;
