import React, { Component } from 'react';


import Prices from './Prices';
import StickyTop from '../Navigation/topBar';



const Pricing = () => {
    return ( 
        <div>
            <StickyTop />
            <Prices />
        </div>
     );
}
 
export default Pricing;