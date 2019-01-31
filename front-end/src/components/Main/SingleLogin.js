import React from "react";
import { Link } from 'react-router-dom';
import './SingleLogin.css';

const SingleLogin = () => {
  return (
    <div>
      <nav>
        <ul>
          <div className='single alone'>
          <li className="alone">
            <Link to='login' className='alone'>
             Login
            </Link>
          </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default SingleLogin;
