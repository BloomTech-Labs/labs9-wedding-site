import React, { Component } from 'react';
import { Link } from "react-router-dom";

const LandingPage = () => {
    return ( 
        <div>
            <Link style={{marginTop: '100px'}} to={`/vb/dashboard`}>Go To Dashboard</Link>
        </div>
     );
}
 
export default LandingPage;