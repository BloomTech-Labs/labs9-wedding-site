import React from 'react';
import { CardNumberElement, CardExpiryElement, CardCVCElement, PostalCodeElement } from 'react-stripe-elements';
import './CardSection.css';

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

class CardSection extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.submit}>
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
                <button type='submit'>Pay</button>
            </form>
        );
    }
};

export default CardSection;