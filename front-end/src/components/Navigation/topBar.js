import React, { Component } from "react";

import "./topBar.css";

import ProfilePic from './nav';
// import LandingPageButtons from './LandingButtons';
import SignupLogin from './SignupLoginButtons';
import LandingButtonsExp from './LandingButtonsExp';


const StickyTop = () => {
  return (
    <div className="overall">
      <div className="overall">
        <ProfilePic  />
        {/* <LandingPageButtons /> */}
        <LandingButtonsExp />
        <SignupLogin />
      </div>
    </div>
  );
};

export default StickyTop;
