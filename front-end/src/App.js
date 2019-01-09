import React, { Component } from 'react';
import Payment from './Client/billing';
import Settings from './Client/settings';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Payment />
        <Settings />
      </div>
    );
  }
}

export default App;