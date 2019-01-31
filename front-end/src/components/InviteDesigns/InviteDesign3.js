import React, { Component } from 'react';
import './InviteDesign3.css';


// test data


const designBackgroundPhotos = [
  'https://images.pexels.com/photos/758733/pexels-photo-758733.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/1712513/pexels-photo-1712513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/1076429/pexels-photo-1076429.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
]

class PublicInvite extends Component {
  state = {
    // for testing 
    userLoaded: true,
    designTemplate: 3
  }

  render() {
    console.log(designBackgroundPhotos, designBackgroundPhotos[this.state.designTemplate - 1])
    const { details } = this.props
    const url = designBackgroundPhotos[this.state.designTemplate - 1]
    return (
      <div className="invite-cont" id="main-container">


        <div className="invite-main" >
          <div className='i-top'>
            
          </div>
          <div className='i-middle' style={{ backgroundImage: `url(${url})` }}>
            <div id="title-container">
              <div className="wedding-title-container">
                <h1 className="wedding-title">
                  {`${details.partner1.first_name} & ${details.partner2.first_name}`}
                </h1>
                <h2 className="wedding-date-location">
                  <span>{`${details.event_date}`}</span>
                  <span id="separator"> &bull; </span>
                  <span>{`${details.event_address}`}</span>
                </h2>
                <h2 className="wedding-countdown">
                  {`57 days to go!`}
                </h2>
              </div>
            </div>

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