import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Sidebar from './clientNav';
import './settings.css';
import axios from 'axios';
import Icon from 'antd/lib/icon';
import DesignChoice from './DesignChoice';


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
            edit: false,
            design_template: ''
        };
    }

    handleChecked = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    inputHandler = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    toggleEdit = () =>{
        this.setState({
            edit: !this.state.edit
        })
    }

    save = () =>{
        let vbtoken = localStorage.getItem('vbtoken');
        let wedding_id = localStorage.getItem('weddingID')
        let { 
            first_name,
            last_name,
            p_firstname,
            p_lastname,
            event_date,
            event_address,
            phone, 
            email
            } = this.props.userData;
        let design_template = this.state.design_template;
    
            let userinfo = {first_name, last_name, p_firstname, p_lastname, event_date, event_address, phone, email, vbtoken, wedding_id, design_template}

        
            axios.put(`${process.env.REACT_APP_LOCAL_URL}/update`, userinfo)
            .then(res => {
                console.log(res)
                this.props.setUser(res.data.couple[0], res.data.couple[1], res.data.guests, [ {...res.data.couple[0]}, {...res.data.couple[1]} ], res.data.wedding_data.event_address, res.data.wedding_data.event_date, res.data.couple[0].email, res.data.couple[0].phone)
                this.setState({
                   edit: false,
                   design_template: res.data.wedding_data.design_template 
                })
            })
            .catch(err => console.log(err))
         
    }

    componentDidMount() {

        
        let vbtoken = localStorage.getItem('vbtoken');
        let oauth_id = localStorage.getItem('vbtoken');

        if(vbtoken){
            axios.post(`${process.env.REACT_APP_LOCAL_URL}/loaduser`, {oauth_id, vbtoken})
            .then(res => {
                console.log(res)
                this.props.setUser(res.data.couple[0], res.data.couple[1], res.data.guests, [ {...res.data.couple[0]}, {...res.data.couple[1]} ], res.data.wedding_data.event_address, res.data.wedding_data.event_date, res.data.couple[0].email, res.data.couple[0].phone)
                this.props.login()
                this.setState({
                   userLoaded: true,
                   design_template: res.data.wedding_data.design_template 
                })
            })
            .catch(err => console.log(err))
        } 
        else {
            this.props.history.push('/login')
        }
    }


    render() {
        console.log(this.state.design_template)
        const photos = [
            {
                src:
                    "https://cdn.freshdesignweb.com/wp-content/uploads/glanz-html-wedding-template.jpg"
            },
            {
                src:
                    "https://cdn.freshdesignweb.com/wp-content/uploads/belle-responsive-wedding-template.jpg"
            },
            {
                src:
                    "https://cdn.freshdesignweb.com/wp-content/uploads/site/newlyweds-html-wedding-template.jpg"
            }
        ];
        return (
            <div className="userSettings">
                <Sidebar />
                <div className="settingsContainer">
                   <div className="acct-info">

                    <div className="acct-info-title"> 
                        Account Information <Icon type="edit" className='edit-acct' onClick={this.toggleEdit}/>
                    </div>

                    <div className="user-names">
                        <div className="acct-spec">
                            <div className="acct-topic">First Name:</div>
                            <div className="acct-spec-info">
                            {!this.state.edit ?
                                this.props.userData.first_name :
                                <TextField
                                onChange={this.props.inputHandler}
                                value={this.props.userData.first_name}
                                name="first_name"
                                id="standard-name"/> 
                            }
                            </div>
                        </div>
                        <div className="acct-spec">
                            <div className="acct-topic">Last Name:</div>
                            <div className="acct-spec-info">
                            {!this.state.edit ?
                                this.props.userData.last_name :
                                <TextField
                                onChange={this.props.inputHandler}
                                value={this.props.userData.last_name}
                                name="last_name"
                                id="standard-name"/> 
                            }
                            </div>
                        </div>
                    </div>

                    <div className="user-names">
                        <div className="acct-spec">
                            <div className="acct-topic">Partner First Name:</div>
                            <div className="acct-spec-info">
                            {!this.state.edit ?
                                this.props.userData.p_firstname :
                                <TextField
                                onChange={this.props.inputHandler}
                                value={this.props.userData.p_firstname}
                                name="p_firstname"
                                id="standard-name"/> 
                            }
                            </div>
                        </div>
                        <div className="acct-spec">
                            <div className="acct-topic">Partner Last Name:</div>
                            <div className="acct-spec-info">
                            {!this.state.edit ?
                                this.props.userData.p_lastname :
                                <TextField
                                onChange={this.props.inputHandler}
                                value={this.props.userData.p_lastname}
                                name="p_lastname"
                                id="standard-name"/> 
                            }
                            </div>
                        </div>
                    </div>

                    <div className="acct-spec">
                        <div className="acct-topic">Email:</div>
                        <div className="acct-spec-info">
                        {!this.state.edit ?
                                this.props.userData.email :
                                <TextField
                                onChange={this.props.inputHandler}
                                value={this.props.userData.email}
                                name="email"
                                id="standard-name"/> 
                            }
                        </div>
                    </div>

                    <div className="acct-spec">
                        <div className="acct-topic">Phone:</div>
                        <div className="acct-spec-info">
                        {!this.state.edit ?
                                this.props.userData.phone :
                                <TextField
                                onChange={this.props.inputHandler}
                                value={this.props.userData.phone}
                                name="phone"
                                id="standard-name"/> 
                            }
                        </div>
                    </div>

                   </div>

                   <div className="wedding-info">
                        <div className="acct-info-title"> 
                            Wedding Info
                        </div>

                        <div className="acct-spec">
                            <div className="acct-topic">Wedding Date:</div>
                            <div className="acct-spec-info">
                            {!this.state.edit ?
                                this.props.userData.event_date :
                                <TextField
                                onChange={this.props.inputHandler}
                                value={this.props.userData.event_date}
                                name="event_date"
                                id="standard-name"/> 
                            }
                            </div>
                        </div>

                        <div className="acct-spec">
                            <div className="acct-topic">Wedding Location:</div>
                            <div className="acct-spec-info">
                            {!this.state.edit ?
                                    this.props.userData.event_address :
                                    <TextField
                                    onChange={this.props.inputHandler}
                                    value={this.props.userData.event_address}
                                    name="event_address"
                                    id="standard-name"/> 
                                }
                            </div>
                        </div>
                        <div className="acct-spec invite">
                            <div className="acct-topic">Invitation Template:</div>
                            <div className="acct-spec-info invite">
                            {!this.state.edit ?
                                    <div className="choice">
                                    <div className="choice-name">Design {this.state.design_template}</div>
                                    <div className="choice-img settings" 
                                            style={{
                                                background: `url(${this.state.design_template ? photos[this.state.design_template-1].src : ''})`,
                                                backgroundPosition: "top"}}>
                                    {this.state.design_template}
                                    </div>
                                </div> :
                                    <DesignChoice 
                                        inputHandler={this.inputHandler}
                                        design_template={this.state.design_template} /> 
                                }
                            </div>
                        </div>
                   

                    
                   </div>
                   { this.state.edit ?
                   <Button variant="contained" size="small" color="primary" onClick={this.save}>
                        Save
                    </Button> : null}
                </div>
            </div>
        );
    }
}

export default Settings;


/* <TextField
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
                </div> */