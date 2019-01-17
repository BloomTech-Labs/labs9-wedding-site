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
              Signup
            </Link>
          </li>
          <li class="">
            <Link to='login'>
             Login
            </Link>
          </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default SignupLogin;
