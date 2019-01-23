import React, { Component } from 'react';
import MainContent from './components/Main/MainContent';
import { withRouter } from 'react-router';


class PublicInvite extends Component {
        state = {

        }
  render() {
    return (
      <div>
        <MainContent {...this.props}/>
      </div>
    );
  }
}

export default PublicInvite;