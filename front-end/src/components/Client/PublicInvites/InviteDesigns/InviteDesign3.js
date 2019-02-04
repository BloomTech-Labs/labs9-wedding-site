import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

import './InviteDesign3.css';


// test data


const designBackgroundPhotos = [
  'https://images.pexels.com/photos/758733/pexels-photo-758733.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/1712513/pexels-photo-1712513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/1076429/pexels-photo-1076429.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
]

const designThemes = [
  {
    backgroundUrl: designBackgroundPhotos[0],
    primary: 'rgb( 222, 178, 0)',
    secondary: 'rgb( 20, 204, 185)'
  },
  {
    backgroundUrl: designBackgroundPhotos[1],
    primary: 'rgb(108, 192, 223)',
    secondary: 'rgb(250, 246, 224)'
  },
  {
    backgroundUrl: designBackgroundPhotos[2],
    primary: 'rgb( 255, 126, 0)',
    secondary: 'rgb( 0, 178, 88)'
  }
]


class PublicInvite extends Component {

  render() {
    const designTemplate = 3
    console.log(designThemes[this.props.designTemplate].backgroundUrl)
    const { details } = this.props
    const designTheme = designThemes[this.props.designTemplate]
    const { primary, secondary } = designTheme;
    /*{
      backgroundUrl:  designBackgroundPhotos[designTemplate - 1]
    }*/

    const url = designBackgroundPhotos[designTemplate - 1]
    return (
      <div className="invite-cont" id="main-container">


        <div className="invite-main" style={{ 
          backgroundImage: `url(${designTheme.backgroundUrl})` ,
          color: primary

        }}>
          <div className='i-top'>

          </div>

          <div className='i-middle' >
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
            <div className="rsvp-link" style={{color: secondary}}>
              <Link to={`/rsvp/${details.weddingID}`}>RSVP here</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PublicInvite;