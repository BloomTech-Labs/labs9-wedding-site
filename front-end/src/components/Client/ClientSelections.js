import './ClientSelections.css';
import React, { Fragment } from 'react'
import { Keyframes, animated, Spring } from 'react-spring';
import axios from 'axios';
import DesignChoice from './DesignChoice'
import Form from '../Main/form';







export default class ClientSelections extends React.Component {
    
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

    save = () => {

    }

    inputHandler = (e) => {

        this.setState({
        [e.target.name]: e.target.value
        })
        
    }

    designSelect = (e) => {
        let design_template = Number(e.target.dataset.value)

        this.setState({
            design_template
        })
    }
                
  
    render() {
      return (
        <div className="auth-div">
            <div className="auth-circle">
                {   
                !this.state.next ? 
                <Form inputHandler={this.inputHandler}/> : 
                <DesignChoice designSelect={this.designSelect}/>
                }

                <div className="btn-container">
                    <div>Back</div>
                    <div onClick={this.next}>{this.state.next ? "Save" : "Next"}</div>
                </div>
                
            </div>
        </div>
      )
    }
  }