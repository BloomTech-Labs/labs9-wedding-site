import React from "react";

import "./topBarPublic.css";

import ProfilePic from "./nav";
import SignupLogin from "../Buttons/SignupLoginButtons";
import LandingButtonsExp from "../Buttons/LandingButtonsExp";
import "react-scrolling-color-background";

const TopBarPublic = props => {
  return (
      <div className="overallPublic">
        <div className="leftNavPublic">
          <ProfilePic />
          <LandingButtonsExp />
        </div>
        <div className="centerNavPublic">
          <div className="vb-text">
            <span className="v">v</span>Beloved
          </div>
        </div>
        <div className="rightNavPublic">
          <SignupLogin
            loginbtnFunc={props.loginbtnFunc}
            signupbtnFunc={props.signupbtnFunc}
            loggedIn={props.loggedIn}
            logout={props.logout}
          />
        </div>
    </div>
  );
};

export default TopBarPublic;
