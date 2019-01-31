import React from 'react';
import { CardNumberElement, CardExpiryElement, CardCVCElement, PostalCodeElement } from 'react-stripe-elements';
import './CardSection.css';
import Modal from "react-responsive-modal";

const handleBlur = () => {
    console.log('[blur]');
};
const handleChange = (change) => {
    console.log('[change]', change);
};
const handleFocus = () => {
    console.log('[focus]');
};
const handleReady = () => {
    console.log('[ready]');
};

const createOptions = (fontSize, padding) => {
    return {
        style: {
            base: {
                color: '#32325D',
                fontWeight: 500,
                fontSize: '16px',
                fontSmoothing: 'antialiased',

                '::placeholder': {
                    color: '#CFD7DF',
                },
                ':-webkit-autofill': {
                    color: '#e39f48',
                },
            },
            invalid: {
                color: '#E25950',

                '::placeholder': {
                    color: '#FFCCA5',
                },
            },
        },
    };
};

// class SuccessModal extends Component {
   
    
//     render() {
     
//       return (
//         <div>
         
//         </div>
//       );
//     }
//   }

class CardSection extends React.Component {
    state = {
        open: false
      };
    
      onOpenModal = (e) => {
          e.preventDefault();
        this.setState({ open: true });
        
      };
    
      onCloseModal = () => {
        this.setState({ open: false });
      };
    render() {
        const { open } = this.state;
        return (
            <div>
             <div className="example">
            <Modal open={open} onClose={this.onCloseModal} focusTrapped>
              <h2>Your Payment Has Been Processed!</h2>
              <form action="">
                {/* <button>close</button> */}
              </form>
            </Modal>
          </div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Card number
                <CardNumberElement
                        onBlur={handleBlur}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onReady={handleReady}
                        {...createOptions(this.props.fontSize)}
                    />
                </label>
                <label>
                    Expiration date
                <CardExpiryElement
                        onBlur={handleBlur}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onReady={handleReady}
                        {...createOptions(this.props.fontSize)}
                    />
                </label>
                <label>
                    CVC
                <CardCVCElement
                        onBlur={handleBlur}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onReady={handleReady}
                        {...createOptions(this.props.fontSize)}
                    />
                </label>
                <label>
                    Postal code
                <PostalCodeElement
                        onBlur={handleBlur}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onReady={handleReady}
                        {...createOptions(this.props.fontSize)}
                    />
                </label>
                <button onClick={this.onOpenModal}>Pay</button>

            </form>
                </div>
        );
    }
};

export default CardSection;