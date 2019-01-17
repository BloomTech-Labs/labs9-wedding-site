import React from 'react';
import { CardNumberElement, CardExpiryElement, CardCVCElement } from 'react-stripe-elements';

class CardSection extends React.Component {
    render() {
        return (
            <label>
                Card details
                <CardNumberElement style={{ base: { fontSize: '18px' } }} />
                <CardExpiryElement style={{ base: { fontSize: '18px' } }} />
                <CardCVCElement style={{ base: { fontSize: '18px' } }} />
            </label>
        );
    }
};

export default CardSection;