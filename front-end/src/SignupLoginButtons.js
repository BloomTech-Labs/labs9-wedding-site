import React, { Component } from "react";
import './SignupLoginButtons.css';

const SignupLogin = () => {
  return (
    <div>
      <nav>
        <ul>
          <div className='move'>
          <li class="">
            <a href="#">Signup</a>
          </li>
          <li class="">
            <a href="#">Login</a>
          </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default SignupLogin;
