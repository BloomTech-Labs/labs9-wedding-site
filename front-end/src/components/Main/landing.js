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
            {/* <span>Made perfect for you, by you <br/></span>
            <span>Choose a template for your site.</span> */}
          </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    )
  }
}

export default LandingPage;
