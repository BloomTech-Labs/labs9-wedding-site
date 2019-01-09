import React, { Component } from 'react';
import Payment from './Client/billing';
import Settings from './Client/settings';
import Design from './Main/designs';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Payment />
        <Settings />
        <Design />
      </div>
    );
  }
}

export default App;