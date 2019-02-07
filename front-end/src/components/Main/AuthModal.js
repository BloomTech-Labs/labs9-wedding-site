import './AuthModal.css';
import React, { Fragment } from 'react'
import { Keyframes, animated, Spring } from 'react-spring';
import axios from 'axios';

export default class AuthModal extends React.Component {
    render() {
      return (
        <div className="modal-div">
            <div className='logo-cont'>
                <div className="logo-wrap">
                    <img src={require('./images/beloved_mark_pink.png')} alt="vbeloved-logo"/>
                </div>
            </div>
            <a id="loginbtns" href={`${process.env.REACT_APP_LOCAL_URL}/signin/google`}>
            <div className="auth-btn">
                {`${this.props.loginbtn ? 'Login' : 'Sign Up'} With Google`}
            </div>
            </a>
        </div>
      )
    }
  }