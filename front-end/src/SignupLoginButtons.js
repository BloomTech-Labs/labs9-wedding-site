import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './SignupLoginButtons.css';

const SignupLogin = () => {
  return (
    <div>
      <nav>
        <ul>
          <div className='move'>
          <li class="">
            <Link to='signup'>
            <a>Signup</a>
            </Link>
          </li>
          <li class="">
            <Link to='login'>
            <a>Login</a>
            </Link>
          </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default SignupLogin;
