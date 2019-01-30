import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './LandingButtonsExp.css';

const LandingButtonsExp = () => {
  return (
    <div className="landingButtons">
      <nav>
        <ul>
          <div className='moving'>
          <li class="">
            <Link to='/'>
              Home
            </Link>
          </li>
          <li>
          <Link to='/pricing'>
             Pricing
          </Link>
          </li>
          <li>
            <Link to='/designs'>
             Designs
            </Link>
          </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default LandingButtonsExp;
