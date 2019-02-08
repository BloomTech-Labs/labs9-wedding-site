import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import "./landing.css";
import Design from "./designs";
import Pricing from "./pricing";
import beach from "./images/beach.jpg";
import belovedmark from "./images/beloved_mark.png";
import arrow from "./images/arrowclipart3.jpg";
import styled from "styled-components";

// import { Parallax, ParallaxLayer } from "react-spring/addons";
const LandingPageDiv = styled.div`
  top: 0;
  height: 100vh;
  width: 100%;
  background-image: url(${props => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  justify-content: center;
  align-items: center;
  display: flex;
`;

class LandingPage extends Component {
  render() {
    return (
      <div className="scrollview">
        <div className="containerLanding" id="home">
          <LandingPageDiv className="containerLanding_text" img={beach}>

            <div className="home-top-content">

                <div className="landing-slogan">
                  <div className="firstfont">
                    Helping you 
                  </div>
                  <div className="secondfont"> Tie the Knot </div>
                </div>

                <div className="cta-description">
                  <span className="thirdfont">
                    Choose a design,
                    <br />
                    Customize to your liking,
                    <br/>
                    Send to your friends.
                  </span>
                </div>

            </div>
          </LandingPageDiv>
          <a href={"#pricing"} className="LandingCallForActionButton hover">
            Let's get started
          </a>
          <img
            className="LandingCallForActionImage hover2"
            src={belovedmark}
            alt="Beloved Logo"
          />
        </div>

        <div className="containerPricing" id="pricing">
          <Pricing />
          {/* <a href={"#designs"}>
						{" "}
						<img src={arrow} alt="arrow" className="arrow" />
						Check out our designs
					</a> */}
        </div>

        <div className="containerDesign" id="designs">
          <Design />

          <a  href={"#home"}>
          <div className="bottom-btn">Back to top</div>
          </a>
        </div>
      </div>
    );
  }
}

export default LandingPage;

{
  /*
  import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './landing.css';
import Design from './designs';
import Pricing from './pricing';
import wallflower from './images/wallflower.jpg';
import belovedmark from './images/beloved_mark.png';
import arrow from './images/arrowclipart3.jpg';
import { Parallax, ParallaxLayer } from 'react-spring/addons';



class LandingPage extends React.Component {
 
  render() {
    return (
      <div className='scrollview' style={{overflowY:'hidden'}}>
        <Parallax ref={ref => this.parallax = ref} pages={3} vertical scrolling={true}  style={{overflowY:'hidden'}}>
          <ParallaxLayer offset={0} speed={0} >
          <div className='containerLanding'>
            <img src={wallflower} alt='wallflower' style={{ width: '66.3%', height:753, position:'absolute', right:0, top:0,}} />
            <span className='firstfont'> Helping you <br/></span>
            <span className='secondfont'> Tie the Knot </span>
            <span className='hover' style={{ width: 200, height:200, position:'absolute', right:'40%', top:580, fontWeight:"bold", fontSize:20, cursor:'pointer', opacity:.6,}} onClick={() => this.parallax.scrollTo(1)} > Let's get started </span>
            <img className='hover2' src={belovedmark} alt='Beloved Logo' style={{ width: 85, height:80, position:'absolute', right:'45%', top:630, zIndex:1000, cursor:'pointer', opacity:.4,}} onClick={() => this.parallax.scrollTo(1)} />
          </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0}>
          <div className='containerPricing'>
            <Pricing />
            <span className='checkoutdesigns' onClick={() => this.parallax.scrollTo(2)}>Check out our designs</span>
            <img src={arrow} alt='arrow' className='arrow' onClick={() => this.parallax.scrollTo(2)} />
          </div>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0}>
          <div className='containerDesign'>
            <Design />
          <div style={{ position:'absolute', top:200, left:'10%', cursor:'pointer', height:50, width:200, borderRadius:5,}} onClick={() => this.parallax.scrollTo(0)} > Back to top </div>
            <span>Made perfect for you, by you <br/></span>
            <span>Choose a template for your site.</span> 
          </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    )
  }
}

export default LandingPage;
*/
}
