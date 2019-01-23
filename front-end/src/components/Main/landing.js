import React, { Component } from 'react';
import StickyTop from '../Navigation/topBar';
import { Link } from "react-router-dom";

const LandingPage = () => {
    return ( 
        <div>
            <StickyTop />
            <Link style={{marginTop: '100px'}} to={`/vb/dashboard`}>Go To Dashboard</Link>
        </div>
     );
}
 
export default LandingPage;