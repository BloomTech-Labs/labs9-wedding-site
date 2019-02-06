import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import './SignupLoginButtons.css';
import Sidebar from '../Client/clientNav';

const SignupLogin = (props) => {
  return (
    <div className="SignupLogin-container">
      <nav>
        <ul>
          <div className='move'>
        { !props.loggedIn ? 
          <Fragment>
          <li>
            <Link to='/auth' onClick={props.signupbtnFunc}>
              Signup
            </Link>
          </li>

          <li>
            <Link to='/auth' onClick={props.loginbtnFunc}>
             Login
            </Link>
          </li>
          </Fragment>
          : 
          <li>
            <a href={`${process.env.REACT_APP_LOCAL_CLIENT}`} onClick={props.logout}>
             Logout
             </a>
          <Sidebar handletoggle={props.handletoggle}/>
          </li>
         
        }
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default SignupLogin;
