import './DesignChoice.css';
import React, { Fragment } from 'react'
import { Keyframes, animated, Spring } from 'react-spring';
import axios from 'axios';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Lightbox from "react-images";

const photos = [
	{
		src:
			"https://cdn.freshdesignweb.com/wp-content/uploads/glanz-html-wedding-template.jpg"
	},
	{
		src:
			"https://cdn.freshdesignweb.com/wp-content/uploads/belle-responsive-wedding-template.jpg"
	},
	{
		src:
			"https://cdn.freshdesignweb.com/wp-content/uploads/site/newlyweds-html-wedding-template.jpg"
	}
];

export default class DesignChoice extends React.Component {
    
    constructor(props) {
		super();
		this.state = { currentImage: 0 };
		this.closeLightbox = this.closeLightbox.bind(this);
		this.openLightbox = this.openLightbox.bind(this);
		this.gotoNext = this.gotoNext.bind(this);
		this.gotoPrevious = this.gotoPrevious.bind(this);
		
    }
    
    openLightbox = (obj) => {
		this.setState({
			currentImage: obj,
			lightboxIsOpen: true
		});
	}
	closeLightbox() {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false
		});
	}
	gotoPrevious() {
		this.setState({
			currentImage: this.state.currentImage - 1
		});
	}
	gotoNext() {
		this.setState({
			currentImage: this.state.currentImage + 1
		});
	}


                
  
    render() {
      return (
        <div className="design-choice-cont">
        
            <div className="choice">
            <div className="choice-name" >Design 1</div>
                <div onClick={()=>this.openLightbox(0)}className="choice-img" style={{background: 'url("https://cdn.freshdesignweb.com/wp-content/uploads/glanz-html-wedding-template.jpg")', backgroundPosition: 'top'}}>
                    
                </div>
                <Radio checked={this.props.design_template === "1"} aria-label="A" onClick={this.props.inputHandler} value='1' name="design_template" />
            </div>

            <div className="choice">
                <div className="choice-name">Design 2</div>
                <div onClick={()=>this.openLightbox(1)}className="choice-img" style={{background: 'url("https://cdn.freshdesignweb.com/wp-content/uploads/belle-responsive-wedding-template.jpg")', backgroundPosition: 'bottom'}}>
                    
                </div>
                <Radio checked={this.props.design_template === "2"} aria-label="B" onClick={this.props.inputHandler} value='2' name="design_template" />
            </div>

            <div className="choice">
                <div className="choice-name">Design 3</div>
                <div onClick={()=>this.openLightbox(2)}className="choice-img" style={{background: 'url("https://cdn.freshdesignweb.com/wp-content/uploads/site/newlyweds-html-wedding-template.jpg")', backgroundPosition: 'top'}}>
                    
                </div>
                      
                <Radio checked={this.props.design_template === "3"} aria-label="C" onClick={this.props.inputHandler} value='3' name="design_template" />
                
            </div>
            
            <Lightbox 
						images={photos}
						onClose={this.closeLightbox}
						onClickPrev={this.gotoPrevious}
						onClickNext={this.gotoNext}
						currentImage={this.state.currentImage}
						onClickImage={this.goToSignUp}
						isOpen={this.state.lightboxIsOpen}
					/>
            

        </div>
      )
    }
  }