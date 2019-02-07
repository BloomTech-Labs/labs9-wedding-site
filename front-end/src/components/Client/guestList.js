import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import './guestList.css';
import {Spring} from 'react-spring';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Sidebar from './clientNav';
import ReactDropzone from "react-dropzone";


// define styles for material-ui components
const styles = {
    paper: {
      margin: '30px 0',
    },
    deleteButton: {
        float: 'right',
    },
  };

class GuestList extends Component {
    constructor(props) {
        super(props);
            this.state = {
                guests: this.props.guests,
                weddingID: '',
                first_name: '',
                last_name: '',
                email: '',
                address: '',
                related_spouse: '',
                inputting: false
            }
      }

    inputHandler = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })
        
    }

    toggleInputting = () => {

        this.setState({
            inputting: !this.state.inputting
        })

    }

    addUser = () => {
        let {
            first_name, 
            last_name,
            email,
            address,
            related_spouse 
        } = this.state

        let wedding_id = this.props.wedding_id;

        axios
            .post(`${process.env.REACT_APP_LOCAL_URL}/addguest`, {first_name, last_name, email, address, wedding_id, related_spouse})
            .then(res => {
                this.props.setGuests(res.data)
                this.setState({
                    
                    first_name: '',
                    last_name: '',
                    email: '',
                    address: '',
                    related_spouse: ''
                })
            })
            .catch(err => console.log(err))

    }

    addDummyUser = () => {
        let wedding_id = this.props.wedding_id;
        console.log(wedding_id)
        axios
            .post(`${process.env.REACT_APP_LOCAL_URL}/adddummyguest`, {wedding_id, couple: this.props.couple})
            .then(res => {
                    console.log(res.data)
                    this.props.setGuests(res.data)
                    
                
            })
            .catch(err => console.log(err))

    }

    componentDidMount() {
        console.log("GUESTS", this.state.guests);
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
                   pricing_package: res.data.wedding_data.pricing_package
                })
            })
            .catch(err => console.log(err))
        } 
        else {
            this.props.history.push('/login')
        }
    }

    handleonDrop = (files, rejectedFiles) => {
        const wedding_id = localStorage.getItem('weddingID')
        files.forEach(file => {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('filename', file.name);
            formData.append('wedding_id', wedding_id);
            axios.post(`${process.env.REACT_APP_LOCAL_URL}/upload`, formData)
                .then((res => {
                    console.log(res)
                }))
                .catch(err => {
                    console.log(err)
                })
        });
    }

    render() {
      return (
      <div className="guestList">
          <Sidebar />
          <div className="guestListContainer">
          <ReactDropzone
                        accept=".csv"
                        onDrop={this.handleonDrop}>
                        {({ getRootProps, getInputProps }) => (
                            <div {...getRootProps()} style={{width: "120px"}}>
                                <input {...getInputProps()} />
                                <Button variant="contained" className="importCsv">Import CSV</Button>
                            </div>
                        )}
            </ReactDropzone>
          {/* <Button variant="outlined" style={styles.deleteButton}>Delete</Button> */}
          <div className="guest-list-table">
          <Paper style={styles.paper}>
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell align="right">First Name</TableCell>
                    <TableCell align="right">Last Name</TableCell>
                    <TableCell align="right">Contact Email</TableCell>
                    <TableCell align="right">RSVP</TableCell>
                    <TableCell align="right">Mailing Address</TableCell>
                    <TableCell align="right">Who do you know?</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {this.props.guests.map((guest, index) => {
                    return (
                    <TableRow
                    key={index}
                    className={
                        index > 4 && this.state.pricing_package < 1 ? 'blurry-text' :
                        index > 9 && this.state.pricing_package < 2 ? 'blurry-text' :
                        null
                    }>
                        <TableCell align="right">{guest.first_name}</TableCell>
                        <TableCell align="right">{guest.last_name}</TableCell>
                        <TableCell align="right">{guest.email}</TableCell>
                        <TableCell align="right">{guest.attending}</TableCell>
                        <TableCell align="right">{guest.address}</TableCell>
                        <TableCell align="right">{guest.related_spouse}</TableCell>
                    </TableRow>
                    );
                })}
                </TableBody>
            </Table>
            </Paper>
          </div>
          <div className='add-guest-box'>
                <Button variant="outlined" onClick={this.toggleInputting}>Add Guest Manually</Button >
                { !this.state.inputting ? null : 
                <Spring from={{top: -100, opacity: 0}} to={{top: 0, opacity: 1}}>
                    { (props) =>
                    <div style={props} styles={{position: 'relative'}}>
                        <div className='guest-input-box' style={{display: 'flex'}}>
                            <div className="inner-guest-input">
                                <TextField label="First Name" name="first_name" className="guest-input" onChange={this.inputHandler}></TextField>
                                <TextField label="Last Name" name="last_name" className="guest-input" onChange={this.inputHandler}></TextField>
                            </div>
                            <div className="inner-guest-input">
                                <TextField label="Email" name="email" className="guest-input" onChange={this.inputHandler}></TextField> 
                                <TextField label="Mailing Address" name="address" className="guest-input" onChange={this.inputHandler}></TextField> 
                            </div>
                            <FormControl component="fieldset" className="inner-guest-input">
                                <FormLabel component="legend">Related Spouse</FormLabel>
                                <RadioGroup className="material-form-group">
                                {this.props.couple.map(option =>  
                                <FormControlLabel value={option.first_name} control={<Radio name="related_spouse" onClick={this.inputHandler} />} label={option.first_name} 
                                />)}
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div className="guest-button-div">
                            <Button variant="outlined" onClick={this.addUser}>Add</Button>
                            <Button variant="outlined" onClick={this.addDummyUser}>Add Dummy Guest</Button>
                        </div>
                    </div>
                    }
                </Spring>}
            </div>
          </div>
      </div>
      );
    }
  }
  
  export default GuestList;
