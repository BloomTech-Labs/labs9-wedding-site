import React from "react";
import { Link } from 'react-router-dom';
import './SingleSignup.css';

const SingleSignup = () => {
  return (
    <div>
      <nav>
        <ul>
          <div className='single2 alone2'>
          <li className="alone2">
            <Link to='signup' className='alone2'>
             Create an account
            </Link>
          </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default SingleSignup;
