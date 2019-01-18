import React, { Component } from "react";

import "./topBar.css";

import ProfilePic from './nav';
// import LandingPageButtons from './LandingButtons';
import SignupLogin from '../Buttons/SignupLoginButtons';
import LandingButtonsExp from '../Buttons/LandingButtonsExp';


const StickyTop = (props) => {
  return (
    <div className="overall">
      <div className="overall">
        <ProfilePic  />
        {/* <LandingPageButtons /> */}
        <LandingButtonsExp />
        <SignupLogin loggedIn={props.loggedIn}/>
      </div>
    </div>
  );
};

export default StickyTop;
