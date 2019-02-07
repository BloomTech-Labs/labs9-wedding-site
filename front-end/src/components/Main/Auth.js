import './Auth.css';
import React, { Fragment } from 'react'
import { Keyframes, animated, Spring } from 'react-spring';
import axios from 'axios';
import Cookies from 'universal-cookie';
import AuthModal from './AuthModal';
const cookies = new Cookies()





export default class Auth extends React.Component {
    toggle = () => this.setState(state => ({ open: !state.open }))
    state = { 
      open: undefined, 
      first_name: '',
      last_name: '',
      p_firstname: '',
      p_lastname: '',
      event_date: '',
      event_address: ''
  }


  
  
  
  
    render() {
      return (
        <div className="auth-div" style={{background: 'radial-gradient(white, #AFD4E1)'}}>
        <div className='discover-zen'>Discover The Zen Of Wedding Planning</div>

        <AuthModal loginbtn={this.props.loginbtn}/>


        </div>
      )
    }
  }