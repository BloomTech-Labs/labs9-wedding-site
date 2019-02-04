import './DesignChoice.css';
import React, { Fragment } from 'react'
import { Keyframes, animated, Spring } from 'react-spring';
import axios from 'axios';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';


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
                <Radio checked={this.props.design_template === "1"} aria-label="A" onClick={this.props.inputHandler} value='1' name="design_template" />
            </div>

            <div className="choice">
                <div className="choice-name">Design 2</div>
                <div className="choice-img">
                    2
                </div>
                <Radio checked={this.props.design_template === "2"} aria-label="B" onClick={this.props.inputHandler} value='2' name="design_template" />
            </div>

            <div className="choice">
                <div className="choice-name">Design 3</div>
                <div className="choice-img">
                    3
                </div>
                      
                <Radio checked={this.props.design_template === "3"} aria-label="C" onClick={this.props.inputHandler} value='3' name="design_template" />
                
            </div>
            

            

        </div>
      )
    }
  }