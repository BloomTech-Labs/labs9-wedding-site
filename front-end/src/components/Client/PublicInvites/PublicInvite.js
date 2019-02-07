import React, { Component } from "react";
import "./PublicInvite.css";
import InviteDesign3 from "./InviteDesigns/InviteDesign3";
import Cookies from "universal-cookie";
import axios from "axios";
import Dialog from "./emailHere";
import Details from "./details";
import Paper from "./weddingInfo";
import CountdownComponent from "./countdown";
import TimePlace from "./timePlace";
import Bride from './bride';
import Groom from './groom';
import heartheader from './heartheader.jpg';
import Button from '@material-ui/core/Button';

const cookies = new Cookies();

// test data
const partner1 = {
  id: 116,
  first_name: "Arlo",
  last_name: "Stanton",
  email: "Alexane60@hotmail.com",
  phone: null,
  address: "050 Zboncak Rest, Daniellefurt, GA 23176-2988",
  wedding_id: 121,
  guest: 0
};

const partner2 = {
  id: 117,
  first_name: "Rogers",
  last_name: "Schaden",
  email: "Jamarcus50@gmail.com",
  phone: null,
  address: "0279 Spencer Forges, East Vicenta, HI 87319",
  wedding_id: 121,
  guest: 0
};

class PublicInvite extends Component {
  constructor(props) {
    super(props);
    const weddingId = this.props.match.params.id;
    const name = this.props.match.params.name;
    console.log(this.props.match);
    this.state = {
      weddingDetailsLoaded: false,
      weddingID: weddingId, //partner1.wedding_id,
      name: name,
      guests: [],
      couple: [partner1, partner2],
      partner1,
      partner2,
      event_address: "123 E 32nd St. Los Angeles, USA",
      event_date: "May 3rd 2019",
      design_template: 0
    };
    this.getWeddingDetails(weddingId);
  }

  getWeddingDetails = (wedding_id) => {
    const url = `${process.env.REACT_APP_LOCAL_URL || 'https://vbeloved.now.sh'}/invite/${wedding_id}`

    axios
      .get(url)
      .then(res => {
        console.log(res);
        this.setState({
          weddingDetailsLoaded: true,
          couple: res.data.couple,
          partner1: res.data.couple[0],
          partner2: res.data.couple[1],
          event_address: res.data.weddingDetails.event_address,
          event_date: res.data.weddingDetails.event_date,
          design_template: res.data.weddingDetails.design_template,
          data: res.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    if (this.state.weddingDetailsLoaded) {
    return (
      <div className="container-invite">
        
        <div className="invite-cont">

              <div className="header-name">
                <div className="couples-names">
                    <div className="pn">{this.state.partner1.first_name}</div> 
                    <div className="pn amper">&</div>
                    <div className="pn">{this.state.partner2.first_name}</div>
                </div>
              </div>

              <div className="save-date">
                <div className="save-date-txt">Save the Date!</div>
                <div className="smaller-font">{this.state.event_date}</div>
                <div className="save-address">{this.state.event_address}</div>
              </div>
              <a className="invite-anchor" href={`/rsvp/${this.state.weddingID}`}>
                <div className="invite-btn">
                  RSVP
                </div>
              </a>
        </div>

        <div className="part-two">

              <div className="part-two-top">

                  <div className="countdown">
                    <span className='big-day'>The Big Day</span>
                    <CountdownComponent />
                  </div>
                  <div className="list">
                    <Details />
                  </div>  

              </div>

              <div className='wedding-party'>

                <div className="partner-invite">
                  <Bride className='bride'/>

                  <div className="partner-name"> 
                    <span className='p-name'>{this.state.partner1.first_name}</span> 
                  </div>
                
                  <div className='partner-descrip'> Lorem ipsum dolor sit amet, consectetur elit, sed do
                      eiusmo tempor incididunt ut labore et dolore magna aliqua. 
                  </div> 
                  

                </div>
                
                <div className="hearts">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIBAcOkIeGVef1xXUghK2KLTwZT-E3XpiE9c1sIkRaAF4sOAiq' height='50' width='50' className='hide'/>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIBAcOkIeGVef1xXUghK2KLTwZT-E3XpiE9c1sIkRaAF4sOAiq' height='140' width='140'/>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIBAcOkIeGVef1xXUghK2KLTwZT-E3XpiE9c1sIkRaAF4sOAiq' height='50' width='50' className='hide'/>
                </div>
                 
                <div className="partner-invite"> 
                  <Groom className='groom' /> 
                  <div className="partner-name"> 
                    <span className='p-name'>{this.state.partner2.first_name}</span>
                  </div>
                  
                  <div className='partner-descrip'> Lorem ipsum dolor sit amet, consectetur elit, sed do
                      eiusmo tempor incididunt ut labore et dolore magna aliqua. 
                  </div> 
                </div> 
              </div>
          
        </div>

        <div className="part-three">

              <div className="story">
                <span className="story-title">Our Love Story</span>
                <div className='paragraph'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt<br/> ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation <br/> ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.<br/> Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur.<br/> Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est <br/> laborum.
                </div>
              </div>

              

        </div>
      </div>
    );
    } else {
      return (
        <div className="i-loading">
          <span>Loading...</span>
        </div>
      );
    }
  }
}

export default PublicInvite;
