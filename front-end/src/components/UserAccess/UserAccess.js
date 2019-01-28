import React from 'react';
import Payment from '../Client/billing';
import Settings from '../Client/settings';
import GuestList from '../Client/guestList';
import Rsvp from '../Client/rsvp/clientRsvp';
import Dashboard from '../Client/dashboard';
import { Route, Switch, Redirect } from 'react-router-dom';

class UserAccess extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                 

                    <Route path='/vb/dashboard'  render={props => < Dashboard {...props} />} />
                    <Route path='/vb/payment'  render={props => < Payment {...props} />} />
                    <Route path='/vb/settings'  render={props => < Settings {...props} />} />
                    <Route path='/vb/guestlist'  render={props => < GuestList {...props} />} />
                    <Route path='/vb/rsvp'  render={props => < Rsvp {...props} />}/>
                    
                
            </div>
         );
    }
}
 
export default UserAccess;