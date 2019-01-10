import React, { Component } from 'react';



import ProfilePic from './nav';
import LandingPageButtons from './LandingPageButtons';
import SignupLogin from './SignupLoginButtons';
import StickyTop from './topBar';
import DropDownMenu from './dropDown';
import PerfectScrollbar from 'react-perfect-scrollbar';

import LandingPage from './Client/landing';
import CollagePage from './Client/collage';
import Payment from './Client/billing';
import Settings from './Client/settings';
import GuestList from './Client/guestList';
import Rsvp from './Client/rsvp';
import Design from './Main/designs';
import Prices from './Main/pricing';


class App extends Component {

  render() {
    return (
      <div>
      <div>
        <PerfectScrollbar>
          <LandingPage />
          <CollagePage />
        {/* <DropDownMenu /> */}
        </PerfectScrollbar>
     </div>
      <div className="App">
        <Payment />
        <Settings />
        <Design />
        <Prices />
        <GuestList />
        <Rsvp />
      </div>
      </div>
    );
  }
}

export default App;