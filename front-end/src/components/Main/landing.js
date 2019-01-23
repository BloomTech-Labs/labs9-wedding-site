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



class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.LearnMoreTarget = React.createRef();
  }

  learnMore = () => {
    this.LearnMoreTarget.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest'
    });
  };

  render() {
    return (
      <div>
          <div className='containerLanding'>
            <img src={wallflower} alt='wallflower' style={{ width: '66.3%', height:850, position:'absolute', right:0, top:0,}} />
            <span className='firstfont'> Helping you <br/></span>
            <span className='secondfont'> Tie the Knot </span>
          </div>
          <div className='containerDesign'>
            <Design />
          </div>
          <div className='containerPricing'>
            <Pricing />
          </div>
      </div>
    )
  }
}

export default LandingPage;
