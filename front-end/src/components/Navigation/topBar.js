import React from "react";
import { Link } from 'react-router-dom';

import "./topBar.css";

import ProfilePic from './nav';
// import LandingPageButtons from './LandingButtons';
import SignupLogin from '../Buttons/SignupLoginButtons';
import LandingButtonsExp from '../Buttons/LandingButtonsExp';


const StickyTop = (props) => {
  return (
    <div className="overall">
      <div className="leftNav">
        <ProfilePic />
        {/* <LandingPageButtons /> */}
        <LandingButtonsExp />
      </div>
      <div className="centerNav">
        <Link to='/'>
          <h1 className="siteName">Beloved</h1>
        </Link>
      </div>
      <div className="rightNav">
        <SignupLogin loginbtnFunc={props.loginbtnFunc}
                     signupbtnFunc={props.signupbtnFunc}
                     loggedIn={props.loggedIn} 
                     logout={props.logout} />
      </div>
    </div>
  );
};

export default StickyTop;