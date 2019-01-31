import React, { Component } from 'react';
import './PublicInvite.css';
import { InviteDesign3 } from '../InviteDesigns'
import Cookies from 'universal-cookie';
import axios from 'axios';

const cookies = new Cookies()


// test data
const partner1 = {
  "id": 116,
  "first_name": "Arlo",
  "last_name": "Stanton",
  "email": "Alexane60@hotmail.com",
  "phone": null,
  "address": "050 Zboncak Rest, Daniellefurt, GA 23176-2988",
  "wedding_id": 121,
  "guest": 0
}

const partner2 = {
  "id": 117,
  "first_name": "Rogers",
  "last_name": "Schaden",
  "email": "Jamarcus50@gmail.com",
  "phone": null,
  "address": "0279 Spencer Forges, East Vicenta, HI 87319",
  "wedding_id": 121,
  "guest": 0
}


class PublicInvite extends Component {
  constructor(props) {
    super(props)
    const weddingId = this.props.match.params.id
    const name = this.props.match.params.name
    console.log(this.props.match)
    this.state = {
      weddingDetailsLoaded: false,
      weddingID: weddingId, //partner1.wedding_id,
      name: name,
      guests: [],
      couple: [partner1, partner2],
      partner1,
      partner2,
      event_address: '123 E 32nd St. Los Angeles, USA',
      event_date: 'May 3rd 2019',
      design_template: 0,
    }
    this.getWeddingDetails(weddingId)
  }

  getWeddingDetails = (wedding_id) => {
    const url = `${process.env.REACT_APP_LOCAL_URL || 'vbeloved.now.sh'}/invite/${wedding_id}`

    axios.get(url)
      .then(res => {
        console.log(res)
        this.setState({
          weddingDetailsLoaded: true,
          couple: res.data.couple,
          partner1: res.data.couple[0],
          partner2: res.data.couple[1],
          event_address: res.data.weddingDetails.event_address,
          event_date: res.data.weddingDetails.event_date,
          design_template: res.data.weddingDetails.design_template,
          data: res.data
        })
      }).catch(err => console.log(err))

  }

  render() {
    return (
      <div className="invite-cont">
            <div className="invite-main">
              <div className='i-top'>
                {`${this.props.coupleData.first_name} & ${this.props.coupleData.p_firstname}`}
              </div> 
              <div className='i-middle'>
              <span className='message'>
              {/* {`${this.props.coupleData.first_name} & ${this.props.coupleData.p_firstname}`} */}
                hello guests
              </span>
              </div>
              {/* <div className='i-bottom'>
                hello guests
              </div> */}
            </div>
      </div>
    );

    if (this.state.weddingDetailsLoaded) {
      return (
        <React.Fragment>
          <InviteDesign3 designTemplate={this.state.design_template} details={this.state} />
        </React.Fragment>
      )
    } else {
      return (
        <div className="i-loading">
          <span>Loading</span>
        </div>
      )
    }
  }
}

export default PublicInvite;