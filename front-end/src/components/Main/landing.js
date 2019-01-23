// import React, { Component } from 'react';
// import StickyTop from '../Navigation/topBar';
// import { Link } from "react-router-dom";

// const LandingPage = () => {
//     return ( 
//         <div>
//             <StickyTop />
//             <Link style={{marginTop: '100px'}} to={`/vb/dashboard`}>Go To Dashboard</Link>
//         </div>
//      );
// }
 
// export default LandingPage;
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './landing.css';
import Design from './designs';
import Pricing from './pricing';
import Scrollbar from 'react-perfect-scrollbar';
import wallflower from './images/wallflower.jpg';
import { Parallax, ParallaxLayer } from 'react-spring/addons'



class LandingPage extends React.Component {
  // constructor(props) {
  //   super(props);

    // this.GetStartedTarget = React.createRef();
  // }

  // getStarted = () => {
  //   console.log(this.GetStartedTarget);
  //   this.GetStartedTarget.current.scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'end',
  //     inline: 'nearest'
  //   });
  // };
  // innerRef={this.GetStartedTarget}
  // <button dark onClick={this.getStarted}style={{position:"absolute", left:'15%', top:'70%',}}>
  //             Get Started
  //           </button>
  render() {
    return (
      <div className='scrollview'>
        <Parallax ref={ref => this.parallax = ref} pages={3} vertical scrolling={true}>
          <ParallaxLayer offset={0} speed={0} onClick={() => this.parallax.scrollTo(1)}>
          <div className='containerLanding'>
            <img src={wallflower} alt='wallflower' style={{ width: '66.3%', height:753, position:'absolute', right:0, top:0,}} />
            <span className='firstfont'> Helping you <br/></span>
            <span className='secondfont'> Tie the Knot </span>
          </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0} onClick={() => this.parallax.scrollTo(2)}>
          <div className='containerDesign'>
            <Pricing />
          </div>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0} onClick={() => this.parallax.scrollTo(0)}>
          <div className='containerPricing'>
            <Design />
          </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    )
  }
}

export default LandingPage;
