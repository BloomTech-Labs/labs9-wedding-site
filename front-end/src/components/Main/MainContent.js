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
           loggedIn: false,
           weddingID: '',
           userName: '',
           partnerName: ''

           
        }
   }

   toggleLoggedIn = () =>{

       this.setState({
           loggedIn: !this.state.loggedIn
       })

   }

   setUser = (weddingID, userName, partnerName) => {
        this.setState({
            weddingID, 
            userName,
            partnerName
        })
   }


   render() {
       return (
           <div>
                <div className='main_container'>
               <StickyTop loggedIn={this.state.loggedIn} />
                <Switch>

                   <Route path='/' exact render={props => this.state.loggedIn ? <Redirect to="/vb/dashboard"/> : <LandingPage {...props} />} />
                   <Route path='/designs' component={Design} />
                   <Route path='/pricing' component={Prices} />
                   <Route path='/signup' render={props => <Signup {...props} toggleLoggedIn={this.toggleLoggedIn}/>} />
                   <Route path='/login' component={Login} />

                   {/* <Route path="/vb" render={props => <UserAccess {...props} />} /> */}
                    <Route path='/vb/dashboard'  render={props => < Dashboard {...props} toggleLoggedIn={this.toggleLoggedIn}/>} />
                    <Route path='/vb/payment'  render={props => < Payment {...props} />} />
                    <Route path='/vb/settings'  render={props => < Settings {...props} />} />
                    <Route path='/vb/guestlist'  render={props => < GuestList {...props} />} />
                    <Route path='/vb/rsvp'  render={props => < Rsvp {...props} />}/>


               </Switch>
               </div>
           </div>
        );
   }
}

export default MainContent;