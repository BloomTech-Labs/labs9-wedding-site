import React, { Component } from 'react';


import Prices from '../prices';
import StickyTop from '../topBar';



const Pricing = () => {
    return ( 
        <div>
            <StickyTop />
            <Prices />
        </div>
     );
}
 
export default Pricing;