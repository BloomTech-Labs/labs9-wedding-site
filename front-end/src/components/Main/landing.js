import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './landing.css';
import Design from './designs';
import Pricing from './pricing';
import Scrollbar from 'react-perfect-scrollbar';
import wallflower from './images/wallflower.jpg';
import belovedmark from './images/beloved_mark.png';
import tulip2 from './images/tulip2.jpg';
import { Parallax, ParallaxLayer } from 'react-spring/addons';



class LandingPage extends React.Component {
 
  render() {
    return (
      <div className='scrollview'>
        <Parallax ref={ref => this.parallax = ref} pages={3} vertical scrolling={true}>
          <ParallaxLayer offset={0} speed={0} >
          <div className='containerLanding' style={{zIndex:1000}}>
            <img src={wallflower} alt='wallflower' style={{ width: '66.3%', height:753, position:'absolute', right:0, top:0,}} />
            <span className='firstfont'> Helping you <br/></span>
            <span className='secondfont'> Tie the Knot </span>
            <span className='hover' style={{ width: 200, height:200, position:'absolute', right:'40%', top:580, zIndex:1000, fontWeight:"bold", fontSize:20, cursor:'pointer', opacity:.6,}} onClick={() => this.parallax.scrollTo(1)} > Let's get started </span>
            <img className='hover2' src={belovedmark} alt='Beloved Logo' style={{ width: 85, height:80, position:'absolute', right:'45%', top:630, zIndex:1000, cursor:'pointer', opacity:.4,}} onClick={() => this.parallax.scrollTo(1)} />
          </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0} >
          <div className='containerDesign' style={{zIndex:900}}>
            <Pricing style={{zIndex:900}}/>
          </div>
            <img src={tulip2} alt='tulip' onClick={() => this.parallax.scrollTo(2)} style={{width: 320, height:50, position:'absolute', left:'23%', top:580,fontSize:20, cursor:'pointer', borderRadius:5,}} />
            <span className='bg' onClick={() => this.parallax.scrollTo(2)} style={{position:'absolute', left:'25%', top:590, zIndex:1000, fontSize:24, fontWeight:'600'}}>Check out our designs</span>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0} >
          <div className='containerPricing'>
            <Design />
          </div>
          <div style={{ position:'absolute', top:200, left:'10%', cursor:'pointer', height:50, width:200, borderRadius:5,}} onClick={() => this.parallax.scrollTo(0)} > Back to top </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    )
  }
}

export default LandingPage;
