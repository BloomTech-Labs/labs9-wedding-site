import React, { Component } from "react";

import "./topBarPublic.css";

import ProfilePic from './nav';
// import LandingPageButtons from './LandingButtons';
import SignupLogin from '../Buttons/SignupLoginButtons';
import LandingButtonsExp from '../Buttons/LandingButtonsExp';


const TopBarPublic = (props) => {
    return (
      <div className="overallPublic">
        <div className="leftNavPublic">
          <ProfilePic />
          <LandingButtonsExp/>
        </div>
        <div className="centerNavPublic">
            <h1 className="siteNamePublic">Beloved</h1>
        </div>
        <div className="rightNavPublic">
          <SignupLogin loginbtnFunc={props.loginbtnFunc}
                      signupbtnFunc={props.signupbtnFunc}
                      loggedIn={props.loggedIn} 
                      logout={props.logout} />
        </div>
      </div>
    );
};

export default TopBarPublic;