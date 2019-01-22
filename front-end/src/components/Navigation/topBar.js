import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import "./topBar.css";

import ProfilePic from './nav';
// import LandingPageButtons from './LandingButtons';
import SignupLogin from '../Buttons/SignupLoginButtons';
import LandingButtonsExp from '../Buttons/LandingButtonsExp';


const StickyTop = () => {
  return (
    <div className="overall">
      { /*<div className="overall"> */}
      <div className="leftNav">
        <ProfilePic />
        {/* <LandingPageButtons /> */}
        <LandingButtonsExp />
      </div>
      <div className="rightNav">
        <SignupLogin />
        { /* </div> */}
      </div>
    </div>
  );
};

export default StickyTop;