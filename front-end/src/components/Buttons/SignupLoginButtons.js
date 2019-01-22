import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import './SignupLoginButtons.css';

const SignupLogin = (props) => {
  return (
    <div>
      <nav>
        <ul>
          <div className='move'>
        { !props.loggedIn ? 
          <Fragment>
          <li>
            <Link to='signup'>
              Signup
            </Link>
          </li>

          <li>
            <Link to='/login'>
             Login
            </Link>
          </li>
          </Fragment>
          : 
          <li>
            <a href={`http://${process.env.LOCAL_URL || 'vbeloved.com'}`} onClick={props.toggleLoggedIn}>
             Logout
             </a>
            
          </li>
        }
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default SignupLogin;
