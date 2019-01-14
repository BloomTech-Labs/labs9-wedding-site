import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

//these are the initial views available
import LandingPage from './Main/landing';
import Design from './Main/designs';
import Prices from './Main/pricing';
import SignupPage from './Main/signup';
import LoginPage from './Main/login';


//these are client views after login
import Payment from './Client/billing';
import Settings from './Client/settings';
import GuestList from './Client/guestList';
import Rsvp from './Client/rsvp';


//misc. components go here




class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                 <div className='main_container'>
                    <Route path='/' exact component={LandingPage} />
                    <Route path='/designs' exact component={Design} />
                    <Route path='/pricing' exact component={Prices} />
                    <Route path='/signup' exact component={SignupPage} />
                    <Route path='/login' exact component={LoginPage} />
                    <Route path='/payment' exact component={Payment} />
                    <Route path='/settings' exact component={Settings} />
                    <Route path='/guestlist' exact component={GuestList} />
                    <Route path='/rsvp' exact component={Rsvp} />
                </div> 
            </div>
         );
    }
}
 
export default MainContent;