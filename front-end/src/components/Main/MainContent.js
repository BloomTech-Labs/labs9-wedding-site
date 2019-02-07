import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

//these are the initial views available
import LandingPage from "./landing";
import Design from "./designs";
import Prices from "./pricing";
import Signup from "./signup";
import Login from "./login";
import PublicRsvp from "../Client/rsvp/publicRsvp";
import Auth from "./Auth";

//these are client views after login
import Billing from "../Client/billing";
import Settings from "../Client/settings";
import GuestList from "../Client/guestList";
import Rsvp from "../Client/rsvp/clientRsvp";
import Dashboard from "../Client/dashboard";
import UserAccess from "../UserAccess/UserAccess.js";
import PublicInvite from "../Client/PublicInvites/PublicInvite";

//misc. components go here
import TopBar from '../Navigation/topBar'; //NavBar
import TopBarPublic from '../Navigation/topBarPublic'; //NavBar
import Cookies from 'universal-cookie';
import axios from 'axios';

const cookies = new Cookies();

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
           couple: [],
           email: '',
           phone: '',
           loginbtn: false,
           signupbtn: false,
           registered: false

           
        }
    }

    loginbtn = () => {
        this.setState({
            loginbtn: true
        })
        localStorage.removeItem('vbtoken');
        localStorage.removeItem('weddingID')
    }

    signupbtn = () => {
        this.setState({
            loginbtn: false
        })
        localStorage.removeItem('vbtoken');
        localStorage.removeItem('weddingID')
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
       localStorage.removeItem('vbtoken')
   }

   inputHandler = event => { //handler for the Client settings page
    this.setState({ [event.target.name]: event.target.value })
    }

   setUser = (partner1, partner2, guests, couple, event_address, event_date, email, phone) => {
        // console.log('guests:', guests)
    this.setState({
           weddingID: partner1.wedding_id,
           first_name: partner1.first_name,
           last_name: partner1.last_name,
           p_firstname: partner2.first_name,
           p_lastname: partner2.last_name,
           guests,
           couple,
           event_address, 
           event_date,
           email,
           phone
        })
    }

    toggleRegistered = () =>{
        this.setState({
            registered: true
        })

    }

    setGuests = (guests) =>{

        this.setState({
            guests
        })

    }

    componentDidMount(){

    }


    render() {
        return (
            <div>
                <div className='main_container'>
                {this.state.loggedIn ? (
                    <TopBar loggedIn={this.state.loggedIn} 
                    logout={this.logout} 
                    loginbtnFunc={this.loginbtn}
                    signupbtnFunc={this.signupbtn}/>
                ) : (
                    <TopBarPublic   loggedIn={this.state.loggedIn} 
                                    logout={this.logout} 
                                    loginbtnFunc={this.loginbtn}
                                    signupbtnFunc={this.signupbtn}/>
                )}
               {/* <StickyTop loggedIn={this.state.loggedIn} 
                          logout={this.logout} 
                          loginbtnFunc={this.loginbtn}
                          signupbtnFunc={this.signupbtn}/> */}
                <Switch>

                   <Route path='/' exact render={props => this.state.loggedIn ? <Redirect to="/vb/dashboard"/> : <LandingPage {...props} />} />
                   {/* <Route path='/designs' component={Design} />
                   <Route path='/pricing' component={Prices} /> */}
						<Route
							path="/signup"
							render={props => (
								<Signup
									{...props}
									toggleLoggedIn={this.toggleLoggedIn}
								/>
							)}
						/>
						<Route path="/login" component={Login} />
						<Route
							path={`/rsvp`}
							render={props => (
								<PublicRsvp {...props} state={this.state} />
							)}
						/>
						{/* <Route path="/vb" render={props => <UserAccess {...props} />} /> */}
						<Route
							path="/vb/dashboard"
							render={props => (
								<Dashboard
									{...props}
									login={this.login}
									setUser={this.setUser}
									registered={this.state.registered}
									toggleRegistered={this.toggleRegistered}
									userData={this.state}
								/>
							)}
						/>
						<Route
							path="/vb/settings"
                            render={props => <Settings 
                                                {...props}
                                                userData={this.state}
                                                inputHandler={this.inputHandler}
                                                login={this.login}
									            setUser={this.setUser} />}
						/>
						<Route
							path="/vb/guestlist"
							render={props => (
								<GuestList
									{...props}
									login={this.login}
									guests={this.state.guests}
									wedding_id={this.state.weddingID}
									couple={this.state.couple}
									setUser={this.setUser}
									setGuests={this.setGuests}
								/>
							)}
						/>
						<Route
							path="/vb/rsvp"
                            render={props => (
                                <Rsvp 
                                    {...props} 
                                    login={this.login}
                                    setUser={this.setUser}
                                    couple={this.state.couple}
                                />
                            )}
						/>
						<Route
                            path="/vb/billing"
                            render={props => (
                                <Billing
                                    {...props}
                                    login={this.login}
                                    setUser={this.setUser}
                                />
                            )}
                        />
						<Route
							path="/:id/invite/"
							render={props => (
								<PublicInvite
									{...props}
									coupleData={this.state}
									setUser={this.setUser}
								/>
							)}
						/>
						<Route
							path="/auth"
							render={props => (
								<Auth
									{...props}
									loginbtn={this.state.loginbtn}
								/>
							)}
						/>
					</Switch>
				</div>
			</div>
		);
	}
}

export default MainContent;