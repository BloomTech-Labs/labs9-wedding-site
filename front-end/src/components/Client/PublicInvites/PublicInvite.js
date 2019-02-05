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
    return (
      <div className="container">
        <div className="invite-cont">
          <div className="header-name">
            <span>Andy & Jeska</span>
          </div>
          <div className="save-date">
            <span>Save the Date!</span>
            <span className="smaller-font">August 10, 2017</span>
          </div>
        </div>
        <div className="part-two">
          {/* <div className="invite-main">
              <Dialog />
            </div> */}
          <div className="list">
            <Details />
          </div>
          <div className="location">
            <span> Happy Couple </span>
            <img src={heartheader} className='heart-header' height='70px' width='700px'/>
          </div>
          <div className="countdown">
            <span className='big-day'>The Big Day</span>
            <CountdownComponent />
          </div>
          <div className='wedding-party'>
          <div> <span className='jeska'>Jeska</span> </div>
          <div> <span className='jeska-descrip'> Lorem ipsum dolor sit amet, <br/> consectetur elit, sed do
              eiusmo <br/> tempor incididunt ut labore <br/> et dolore magna aliqua. </span> </div>
          <Bride className='bride'/>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIBAcOkIeGVef1xXUghK2KLTwZT-E3XpiE9c1sIkRaAF4sOAiq' height='50' width='50' className='hide'/>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIBAcOkIeGVef1xXUghK2KLTwZT-E3XpiE9c1sIkRaAF4sOAiq' height='140' width='140'/>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIBAcOkIeGVef1xXUghK2KLTwZT-E3XpiE9c1sIkRaAF4sOAiq' height='50' width='50' className='hide'/>
          <Groom className='groom' /> 
          <div> <span className='andy'>Andy</span></div>
          <div> <span className='andy-descrip'> Lorem ipsum dolor sit amet, <br/> consectetur elit, sed do
              eiusmo <br/> tempor incididunt ut labore <br/> et dolore magna aliqua. </span> </div>
          </div>
          {/* <div className="wedding-info">
              <Paper />
            </div> */}
          {/* <div>
              <TimePlace />
            </div> */}
        </div>
        <div className="part-three">
          <div className="story">
            <span>Our Love Story</span>
            <span className='paragraph'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt<br/> ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation <br/> ullamco laboris
              nisi ut aliquip ex ea commodo consequat.<br/> Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.<br/> Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est <br/> laborum.
            </span>
          </div>
          <div className='dialog'>
          <Dialog /> 
          </div>
        </div>
      </div>
    );

    if (this.state.weddingDetailsLoaded) {
      return (
        <React.Fragment>
          <InviteDesign3 designTemplate={this.state.design_template-1} details={this.state} />
        </React.Fragment>
      );
    } else {
      return (
        <div className="i-loading">
          <span>Loading</span>
        </div>
      );
    }
  }
}

export default PublicInvite;
