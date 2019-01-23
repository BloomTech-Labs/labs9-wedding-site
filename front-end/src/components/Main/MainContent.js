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
           first_name: '',
           last_name: '',
           p_firstname: '',
           p_lastname: '',
           guests: [],
           event_date: '',
           event_address: '',
           couple: []

           
        }
   }

   toggleLoggedIn = () =>{

       this.setState({
           loggedIn: !this.state.loggedIn
       })

   }

   logout = () => {
       this.setState({
           loggedIn: false
       })
   }

   setUser = (partner1, partner2, guests, couple) => {
        
    this.setState({
           weddingID: partner1.wedding_id,
           first_name: partner1.first_name,
           last_name: partner1.last_name,
           p_firstname: partner2.first_name,
           p_lastname: partner2.last_name,
           guests,
           couple
        })
   }


   render() {
       return (
           <div>
                <div className='main_container'>
               <StickyTop loggedIn={this.state.loggedIn} toggleLoggedIn={this.logout}/>
                <Switch>

                   <Route path='/' exact render={props => this.state.loggedIn ? <Redirect to="/vb/dashboard"/> : <LandingPage {...props} />} />
                   <Route path='/designs' component={Design} />
                   <Route path='/pricing' component={Prices} />
                   <Route path='/signup' render={props => <Signup {...props} toggleLoggedIn={this.toggleLoggedIn}/>} />
                   <Route path='/login' component={Login} />
                   {/* <Route path="/vb" render={props => <UserAccess {...props} />} /> */}
                    <Route path='/vb/dashboard'  render={props => < Dashboard {...props} toggleLoggedIn={this.toggleLoggedIn} setUser={this.setUser}/>} />
                    <Route path='/vb/payment'  render={props => < Payment {...props} />} />
                    <Route path='/vb/settings'  render={props => < Settings {...props} />} />
                    <Route path='/vb/guestlist'  render={props => < GuestList {...props} guests={this.state.guests} weddingID={this.state.weddingID} couple={this.state.couple} />} />
                    <Route path='/vb/rsvp'  render={props => < Rsvp {...props} />}/>
                    <Route path='/vb/billing' component={Payment} />


               </Switch>
               </div>
           </div>
        );
   }
}

export default MainContent;