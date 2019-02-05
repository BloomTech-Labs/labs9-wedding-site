import React, { Component } from 'react';

import "./topBar.css";

import ProfilePic from './nav';
import Menu from '@material-ui/icons/Menu';
import SignupLogin from '../Buttons/SignupLoginButtons';
import LandingButtonsExp from '../Buttons/LandingButtonsExp';


class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state={
      menuOpen: false
    }
  }

  handletoggle = () => {
    if (this.state.menuOpen) {
      this.setState({ menuOpen: false });
    } else {
      this.setState({ menuOpen: true });
    }
  };

  handleResize = () => {
    if (window.innerWidth > 800) {
      this.setState({ menuOpen: false });
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  render() {
    return (
      <div className="overall">
        <div className="leftNav">
          <ProfilePic/>
          <LandingButtonsExp/>
        </div>
        <div className="centerNav">
        <div className="vb-text"><span className="v">v</span>Beloved</div>
        </div>
        <div className="rightNav">
          <li className="logout">
            <a href={`${process.env.REACT_APP_LOCAL_CLIENT}`} onClick={this.props.logout}>Logout</a>
          </li>
          <Menu className="hamburgerMenu" onClick={this.handletoggle} />
          <div className="dropDownMenu"
            style={this.state.menuOpen ? {display: 'block'} : {display: 'none'}} >
            <SignupLogin
              loginbtnFunc={this.props.loginbtnFunc}
              signupbtnFunc={this.props.signupbtnFunc}
              loggedIn={this.props.loggedIn} 
              logout={this.props.logout} 
              handletoggle={this.handletoggle}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TopBar;
