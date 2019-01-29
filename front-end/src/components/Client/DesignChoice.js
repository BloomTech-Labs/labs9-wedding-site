import './DesignChoice.css';
import React, { Fragment } from 'react'
import { Keyframes, animated, Spring } from 'react-spring';
import axios from 'axios';




export default class DesignChoice extends React.Component {
    
    state = { }


                
  
    render() {
      return (
        <div className="design-choice-cont">
        
            <div className="choice">
                <div className="choice-name">Design 1</div>
                <div className="choice-img">
                    1
                </div>

            </div>

            <div className="choice">
                <div className="choice-name">Design 2</div>
                <div className="choice-img">
                    2
                </div>

            </div>

            <div className="choice">
                <div className="choice-name">Design 3</div>
                <div className="choice-img">
                    3
                </div>

            </div>
            

        </div>
      )
    }
  }