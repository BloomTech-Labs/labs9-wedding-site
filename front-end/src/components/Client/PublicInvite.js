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
    state = {
      weddingID: partner1.wedding_id,
      first_name: partner1.first_name,
      last_name: partner1.last_name,
      p_firstname: partner2.first_name,
      p_lastname: partner2.last_name,
      guests: [],
      couple: [partner1, partner2],
      partner1,
      partner2,
      event_address: '123 E 32nd St. Los Angeles, USA', 
      event_date: 'May 3rd 2019'
    }
  
    componentDidMount() {
          let wedding_id = localStorage.getItem('weddingID');
          let userdata = cookies.get('USERDATA')
          let oauth_id = '117923096476841958425'
          console.log('userdata:', oauth_id)
  
          if(oauth_id){
              axios.post(`http://${process.env.REACT_APP_LOCAL_URL || 'vbeloved.now.sh'}/loaduser`, {...userdata, oauth_id})
              .then(res => {
                  console.log(res)
                  cookies.set('userID', '117923096476841958425')
                  localStorage.setItem('weddingID', res.data.couple[0].wedding_id)
                  this.props.login() //toggles the state of the user to loggedIn (in MainContent component)
                  this.props.setUser(res.data.couple[0], res.data.couple[1], res.data.guests, [ {...res.data.couple[0]}, {...res.data.couple[1]} ])
                  this.setState({
                     userLoaded: true 
                  })
              }).catch(err => console.log(err))
          } 

          console.log(this.props.coupleData.first_name)
      }

  render() {


    return (
      <React.Fragment>
        <InviteDesign3 details={this.state}/>
      </React.Fragment>
    )


    // return (
    //   <div className="invite-cont">
    //         <div className="invite-main">
    //           <div className='i-top'>
    //             {`${this.props.coupleData.first_name} & ${this.props.coupleData.p_firstname}`}
    //           </div> 
    //           <div className='i-middle'>
    //             hi
    //           </div >
    //           <div className='i-bottom'>
    //             hi
    //           </div>
    //         </div>
    //   </div>
    // );
  }
}

export default PublicInvite;