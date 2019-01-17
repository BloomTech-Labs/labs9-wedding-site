import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';


//these are the initial views available
import LandingPage from './landing';
import Design from './designs';
import Prices from './pricing';
import Signup from './signup';
import Login from './login';


//these are client views after login
import Payment from '../Client/billing';
import Settings from '../Client/settings';
import GuestList from '../Client/guestList';
import Rsvp from '../Client/rsvp';
import Dashboard from '../Client/dashboard';
import UserAccess from '../UserAccess/UserAccess.js'

//misc. components go here
import StickyTop from '../Navigation/topBar'; //NavBar



class MainContent extends Component {
   constructor(props) {
       super(props);
       this.state = {
           loggedIn: false
        }
   }

   toggleLoggedIn = () =>{

       this.setState({
           loggedIn: !this.state.loggedIn
       })

   }


   render() {
       return (
           <div>
                <div className='main_container'>
               <StickyTop/>
                <Switch>

                   <Route path='/' exact render={props => this.state.loggedIn ? <Redirect to="/vb/dashboard"/> : <LandingPage {...props} />} />
                   <Route path='/designs' component={Design} />
                   <Route path='/pricing' component={Prices} />
                   <Route path='/signup' render={props => <Signup {...props} toggleLoggedIn={this.toggleLoggedIn}/>} />
                   <Route path='/login' component={Login} />
                   <Route path='/payment' component={Payment} />
                   <Route path='/settings' component={Settings} />
                   <Route path='/guestlist' component={GuestList} />
                   <Route path='/rsvp' component={Rsvp} />
                   <Route path='/dashboard' component={Dashboard} />
                   <Route path="/vb" render={props => <UserAccess {...props} />} />

               </Switch>
               </div>
           </div>
        );
   }
}

export default MainContent;