import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './SignupLoginButtons.css';

const SignupLogin = () => {
  return (
    <div className="SignupLogin-container">
      <nav>
        <ul>
          <div className='move'>
          <li>
            <Link to='signup'>
              Signup
            </Link>
          </li>
          <li>
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
