import './ClientSelections.css';
import React, { Fragment } from 'react'
import { Keyframes, animated, Spring } from 'react-spring';
import axios from 'axios';
import DesignChoice from './DesignChoice'
import Form from '../Main/form';
import Cookies from 'universal-cookie';
import {withRouter} from 'react-router';
const cookies = new Cookies()

const serverURL = process.env.REACT_APP_LOCAL_URL;





class ClientSelections extends React.Component {
    
    state = { 
        next: false,
        first_name: '',
        last_name: '',
        p_firstname: '',
        p_lastname: '',
        event_date: '',
        event_address: '',
        design_template: '',
        oauth_id: ''
    }

    next = () => {
        this.setState({
            next: true
        })
    }

    back = () => {
        this.setState({
            next: false
        })
    }

    save = () => {
        let oauth_id = localStorage.getItem('authID');
        let design_template = Number(this.state.design_template)
        
        let { 
        first_name,
        last_name,
        p_firstname,
        p_lastname,
        event_date,
        event_address
        } = this.state;

        let userinfo = {first_name, last_name, p_firstname, p_lastname, event_date, event_address, design_template, oauth_id, registering: true}
        
        axios
            .post(`${serverURL}/loaduser`, userinfo)
            .then(res => { 
                
                localStorage.setItem('vbtoken', oauth_id)
                console.log('Cookie set-check')
                this.props.loadUser()
                this.props.login() //toggles the state of the user to loggedIn (in MainContent component)
                this.props.setUser(res.data.couple[0], res.data.couple[1], res.data.guests, [ {...res.data.couple[0]}, {...res.data.couple[1]} ], res.data.wedding_data.event_address, res.data.wedding_data.event_date, res.data.couple[0].email, res.data.couple[0].phone);
                this.props.toggleRegistering()
                this.props.history.push('/vb/dashboard')
            })
            .catch(err => console.log('ClientSelectionsErr:', err))


        

    }

    inputHandler = (e) => {

        this.setState({
        [e.target.name]: e.target.value
        })

        console.log(e.target)
        
    }

                
  
    render() {
      return (
        <div className="selections-div">
            { this.props.registering ? 
            <div className="auth-div registering">
                {/* <div className="vb-header">
                    <div className="vb-text"><span className="v">v</span>Beloved</div>
                    
                </div> */}
                <div className="auth-circle">
                    <div className={`content-div ${this.state.next ? "design" : "form" }`}>
                        <div className="auth-title">{this.state.next ? 'Choose Your Invite Template' : 'Tell Us About Your Wedding'}</div>
                        <div className="logo-wrap selections">
                            <img src={require('../Main/images/beloved_mark_pink.png')} alt="vbeloved-logo"/>
                        </div>
                        {   
                        !this.state.next ? 
                        <Form id="design-form" inputHandler={this.inputHandler}/> : 
                        <DesignChoice inputHandler={this.inputHandler} design_template={this.state.design_template}/>
                        }

                        <div className="btn-container">
                            <div onClick={this.back}>Back</div>
                            <div onClick={!this.state.next ? this.next : this.save}>
                                {!this.state.next ? "Next" : "Go To Dashboard"}
                            </div>
                        </div>
                    </div>
                </div>
            </div> : null
                }
        </div>
      )
    }
  }

  export default withRouter(ClientSelections)