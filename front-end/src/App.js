import React, { Component } from 'react';
import Payment from './Client/billing';
import Settings from './Client/settings';
import GuestList from './Client/guestList';
import Design from './Main/designs';
import Prices from './Main/pricing';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Payment />
        <Settings />
        <Design />
        <Prices />
        <GuestList />
      </div>
    );
  }
}

export default App;