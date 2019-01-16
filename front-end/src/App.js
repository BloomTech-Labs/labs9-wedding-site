import React, { Component } from 'react';
import MainContent from './MainContent';
import {withRouter} from 'react-router';




class App extends Component {

  render() {
    return (
      <div>
        <MainContent />
      </div>
    );
  }
}

export default withRouter(App);