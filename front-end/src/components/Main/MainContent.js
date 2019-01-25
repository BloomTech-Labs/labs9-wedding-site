import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';


//these are the initial views available
import LandingPage from './landing';
import Design from './designs';
import Prices from './pricing';
import Signup from './signup';
import Login from './login';
import PublicRsvp from '../Client/publicRsvp';


//these are client views after login
import Payment from '../Client/billing';
import Settings from '../Client/settings';
import GuestList from '../Client/guestList';
import Rsvp from '../Client/rsvp';
import Dashboard from '../Client/dashboard';
import UserAccess from '../UserAccess/UserAccess.js'
import PublicInvite from '../Client/PublicInvite'

//misc. components go here
import StickyTop from '../Navigation/topBar'; //NavBar
import Cookies from 'universal-cookie';
import axios from 'axios';

const cookies = new Cookies()


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

    login = () => {

        this.setState({
            loggedIn: true
        })
        

    }

   logout = () => {
       this.setState({
           loggedIn: false
       })
       cookies.remove('userID')
   }

   setUser = (partner1, partner2, guests, couple) => {
        console.log('guests:', guests)
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

    setGuests = (guests) =>{

        this.setState({
            guests
        })

    }

    componentDidMount(){
        let oauth_id = cookies.get('userID')

        

        /* if(oauth_id){
            axios.post(`${process.env.REACT_APP_LOCAL_URL}/loaduser`, {...userdata, oauth_id})
            .then(res => {
                console.log(res)
                this.props.toggleLoggedIn() //toggles the state of the user to loggedIn (in MainContent component)
                this.props.setUser(res.data.couple[0], res.data.couple[1], res.data.guests, [ {...res.data.couple[0]}, {...res.data.couple[1]} ])
                this.setState({
                   userLoaded: true 
                })
            })
            .catch(err => console.log(err))
        } else {
            this.props.history.push('/')
        } */


    }


    render() {
        return (
            <div>
                <div className='main_container'>
               <StickyTop loggedIn={this.state.loggedIn} logout={this.logout}/>
                <Switch>

                   <Route path='/' exact render={props => this.state.loggedIn ? <Redirect to="/vb/dashboard"/> : <LandingPage {...props} />} />
                   {/* <Route path='/designs' component={Design} />
                   <Route path='/pricing' component={Prices} /> */}
                   <Route path='/signup' render={props => <Signup {...props} toggleLoggedIn={this.toggleLoggedIn}/>} />
                   <Route path='/login' component={Login} />
                   <Route path={`/rsvp`} render={props => <PublicRsvp {...props} state={this.state}/> }/>
                   {/* <Route path="/vb" render={props => <UserAccess {...props} />} /> */}
                    <Route path='/vb/dashboard'  render={props => < Dashboard {...props} login={this.login} setUser={this.setUser}/>} />
                    <Route path='/vb/payment'  render={props => < Payment {...props} />} />
                    <Route path='/vb/settings'  render={props => < Settings {...props} />} />
                    <Route path='/vb/guestlist'  render={props => < GuestList {...props} 
                                                                              login={this.login} 
                                                                              guests={this.state.guests} 
                                                                              wedding_id={this.state.weddingID} 
                                                                              couple={this.state.couple} 
                                                                              setUser={this.setUser}
                                                                              setGuests={this.setGuests} />} />
                    <Route path='/vb/rsvp'  render={props => < Rsvp {...props} />}/>
                    <Route path='/vb/billing' component={Payment} />
                    <Route path='/:id/invite/:name' render={props => < PublicInvite {...props} 
                                                                          coupleData={this.state}
                                                                          setUser={this.setUser} />} />

               </Switch>
               </div>
           </div>
        );
    }
}

export default MainContent;