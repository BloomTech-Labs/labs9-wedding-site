import './AuthModal.css';
import React, { Fragment } from 'react'
import { Keyframes, animated, Spring } from 'react-spring';
import axios from 'axios';








export default class AuthModal extends React.Component {
    
    state = { }
                
  
    render() {
      return (
        <div className="modal-div">
        
        <div>Discover The Zen Of Wedding Planning</div>
        
        <div className='logo-cont'>
            <div className="logo-wrap">
                <img src={require('./images/beloved_mark_pink.png')} alt="vbeloved-logo"/>
            </div>
        </div>
        <div className="auth-btn">
            {`${this.props.loginbtn ? 'Login' : 'Sign Up'} With Google`}
        </div>
        


        </div>
      )
    }
  }