import React, { Component } from "react";
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
<<<<<<< HEAD
        <Link style={{textDecoration:'none !important'}} to='/'>
          <h1 className="siteName">Beloved</h1> 
=======
        <Link to='/'>
          <h1 className="siteName">Beloved</h1>
>>>>>>> 3745c6d215594e635b0323aaff53d8a8c0afb8a9
        </Link>
      </div>
      <div className="rightNav">
        <SignupLogin loggedIn={props.loggedIn} logout={props.logout} />
      </div>
    </div>
  );
};

export default StickyTop;