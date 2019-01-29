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
        let oauth_id = cookies.get('authID');
        let design_template = Number(this.state.design_template)
        console.log('DesignTemplateStrToNum:', design_template)
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
            .then(res => { console.log('ClientSelLoadUser:', res)
                this.props.toggleRegistered()
                cookies.set('vbtoken', oauth_id, {maxAge: 600})
                console.log(this.props.history)
                this.props.loadUser()
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
        <div className="auth-div">
            <div className="auth-circle">
                {   
                !this.state.next ? 
                <Form id="design-form" inputHandler={this.inputHandler}/> : 
                <DesignChoice inputHandler={this.inputHandler} designtemplate={this.state.design_template}/>
                }

                <div className="btn-container">
                    <div onClick={this.back}>Back</div>
                    <div onClick={!this.state.next ? this.next : this.save}>
                        {!this.state.next ? "Next" : "Go To Dashboard"}
                    </div>
                </div>
                
            </div>
        </div>
      )
    }
  }

  export default withRouter(ClientSelections)