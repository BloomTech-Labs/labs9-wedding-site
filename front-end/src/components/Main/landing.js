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
import ReactDOM from 'react-dom';
// import { Link } from 'react-router-dom';
import { Parallax, ParallaxLayer } from 'react-spring/addons';
import './landing.css';
import Design from './designs';
import Prices from './pricing';
import Scrollbar from 'react-perfect-scrollbar';

// const Page = ({ offset, caption, first, second, gradient, onClick }) => (
//     <React.Fragment>
//       <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
//         <div  />
//       </ParallaxLayer>
  
//       <ParallaxLayer offset={offset} speed={-0.2} onClick={onClick}>
//         <div  />
//       </ParallaxLayer>
  
//       <ParallaxLayer className="text number" offset={offset} speed={0.3}>
//         <span>0{offset + 1}</span>
//       </ParallaxLayer>
  
//       <ParallaxLayer className="text header" offset={offset} speed={0.4}>
//         <span>
//           <div className={`stripe ${gradient}`} />
//           {/* { {onClick} ? (<Design />) : (<Prices />) } */}
//           {/* <Design />
//           <Prices /> */}
//         </span>
//       </ParallaxLayer>
//     </React.Fragment>
//   )

class LandingPage extends React.Component {
  scroll = to => this.refs.parallax.scrollTo(to)
  render() {
    return (
      <Parallax ref={ref => this.parallax = ref} pages={2} vertical scrolling={true}>
        {/* <Page offset={0} onClick={() => this.scroll(1)} />
        <Page offset={1} onClick={() => this.scroll(0)} /> */}
        <ParallaxLayer offset={0} speed={0} onClick={() => this.parallax.scrollTo(1)}>
        <Design onClick={() => this.parallax.scrollTo(1)} />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0} onClick={() => this.parallax.scrollTo(0)}>
        <Prices onClick={() => this.parallax.scrollTo(0)} />
      </ParallaxLayer>
        {/* <Page offset={1} gradient="teal" caption="what we do" first="consectetur" second="adipiscing elit" onClick={() => this.scroll(2)} />
        <Page offset={2} gradient="tomato" caption="what we want" first="Morbi quis" second="est dignissim" onClick={() => this.scroll(0)} /> */}
      </Parallax>
    )
  }
}

export default LandingPage;
