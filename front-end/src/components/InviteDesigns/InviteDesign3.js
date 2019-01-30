import React, { Component } from 'react';
import './InviteDesign3.css';


// test data




class PublicInvite extends Component {
        state = {
          // for testing 
          userLoaded: true,
        }
  
  render() {


    return (
      <div className="invite-cont">
            <div className="invite-main">
              <div className='i-top'>
                hey
              </div> 
              <div className='i-middle'>
                hi
              </div >
              <div className='i-bottom'>
                hi hello
              </div>
            </div>
      </div>
    );
  }
}

export default PublicInvite;