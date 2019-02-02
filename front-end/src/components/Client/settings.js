import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Sidebar from './clientNav';
import './settings.css';


class Settings extends React.Component {
    constructor() {
        super();
        this.state = {
            checkedEmail: false,
            checkedText: false,
            first_name: "",
            last_name: "",
            p_firstname: "",
            p_lastname: "",
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
            <div className="userSettings">
                <Sidebar />
                    <div className="settingsContainer">
                    <TextField
                        onChange={this.props.inputHandler}
                        value={this.props.userData.couple[0].email}
                        name="email"
                        id="outlined-email"
                        label="Email"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        onChange={this.props.inputHandler}
                        value={this.props.userData.couple[0].phone}
                        name="phone"
                        id="outlined-phone"
                        label="Phone"
                        margin="normal"
                        variant="outlined"
                    />
                        <TextField
                            onChange={this.props.inputHandler}
                            value={this.props.userData.couple[0].first_name}
                            name="first_name"
                            id="standard-name"
                            label="Partner Name"
                            margin="normal"
                        />
                        <TextField
                            onChange={this.props.inputHandler}
                            value={this.props.userData.couple[0].last_name}
                            name="last_name"
                            id="standard-name"
                            label="Partner Name"
                            margin="normal"
                        />
                        <TextField
                            onChange={this.props.inputHandler}
                            value={this.props.userData.couple[1].first_name}
                            name="p_firstname"
                            id="standard-name"
                            label="Partner Name"
                            margin="normal"
                        />
                        <TextField
                            onChange={this.props.inputHandler}
                            value={this.props.userData.couple[1].last_name}
                            name="p_lastname"
                            id="standard-name"
                            label="Partner Name"
                            margin="normal"
                        />
                        <div className="emailPassword">
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
                    </div>
                    <div className="inputFields">
                    <div className="nameLocation">
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
                    </div>
                    <Button variant="contained" size="large" color="primary">
                        Save
                    </Button>
                </div>
                </div>
            </div>
        );
    }
}

export default Settings;
