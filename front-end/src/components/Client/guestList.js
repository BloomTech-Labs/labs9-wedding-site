import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
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
import Cookies from 'universal-cookie';


const cookies = new Cookies()

const GuestListContainer = styled.div`
margin: 50px auto 50px;
width: 80%
`

// define styles for material-ui components
const styles = {
    paper: {
      margin: '30px 0 10px',
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

        console.log(e.target.value)

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
            .post(`http://${process.env.REACT_APP_LOCAL_URL || 'vbeloved.now.sh'}/addguest`, {first_name, last_name, email, address, wedding_id, related_spouse})
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
            .post(`http://${process.env.REACT_APP_LOCAL_URL || 'vbeloved.now.sh'}/adddummyguest`, {wedding_id, couple: this.props.couple})
            .then(res => {
                    console.log(res.data)
                    this.props.setGuests(res.data)
                    
                
            })
            .catch(err => console.log(err))

    }

    componentDidMount() {

        let oauth_id = cookies.get('userID')

        if(oauth_id){
            axios.post(`http://${process.env.REACT_APP_LOCAL_URL || 'vbeloved.now.sh'}/loaduser`, {oauth_id})
            .then(res => {
                console.log(res)
                this.props.setUser(res.data.couple[0], res.data.couple[1], res.data.guests, [ {...res.data.couple[0]}, {...res.data.couple[1]} ])
                this.props.login()
                this.setState({
                   userLoaded: true 
                })
            })
            .catch(err => console.log(err))
        } 
        else {
            this.props.history.push('/login')
        }
    }

    render() {
      return (
      <GuestListContainer>
          <Button variant="contained">Import CSV</Button>
          <Button variant="outlined" style={styles.deleteButton}>Delete</Button>
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
                {this.props.guests.map(guest => {
                    return (
                    <TableRow key={guest.id}>
                        <TableCell align="right">{guest.first_name}</TableCell>
                        <TableCell align="right">{guest.last_name}</TableCell>
                        <TableCell align="right">{guest.email}</TableCell>
                        <TableCell align="right">{}</TableCell>
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

                <Button onClick={this.toggleInputting}>Add Guest Manually</Button >
                
                { !this.state.inputting ? null : 
                <Spring from={{top: -100, opacity: 0}} to={{top: 0, opacity: 1}}>

                    { (props) =>
                    <div style={props} styles={{position: 'relative'}}>

                        <div className='guest-input-box' style={{display: 'flex'}}>
                          <div>
                            <div className="inner-guest-input-box">
                                <TextField label="First Name" name="first_name" className="guest-input" onChange={this.inputHandler}></TextField>
                                <TextField label="Last Name" name="last_name" className="guest-input" onChange={this.inputHandler}></TextField>
                            </div>
                            <div className="inner-guest-input-box">
                                <TextField label="Email" name="email" className="guest-input" onChange={this.inputHandler}></TextField> 
                                <TextField label="Mailing Address" name="address" className="guest-input" onChange={this.inputHandler}></TextField> 
                            </div>
                          </div> 
                            <FormControl component="fieldset" className="related-spouse-radio">
                            <FormLabel component="legend">Related Spouse</FormLabel>
                            <RadioGroup>
                            {this.props.couple.map(option =>  
                            <FormControlLabel value={option.first_name} control={<Radio name="related_spouse" onClick={this.inputHandler} />} label={option.first_name} 
                            />)}
                            </RadioGroup>
                            </FormControl>

                        </div>
                            
                        <Button onClick={this.addUser}>Add</Button> <Button onClick={this.addDummyUser}>Add Dummy Guest</Button>

                    </div>
                    }

                </Spring>}
          </div>
      </GuestListContainer>
      );
    }
  }
  
  export default GuestList;
