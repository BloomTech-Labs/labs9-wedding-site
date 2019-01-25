import React from 'react';
import styled from 'styled-components';
import { StripeProvider } from 'react-stripe-elements';
import Checkout from './checkout/stripeCheckout';


// const PaymentContainer = styled.div`
// margin: auto;
// margin-top: 200px;
// width: 90%;
// display:flex;
// justify-content: center;
// `

function Payment() {
    return (
        <StripeProvider apiKey="pk_test_M1Y5kyDDSB7dOAWXIhzOOqMV">
            <Checkout />
        </StripeProvider>
    );
}

export default Payment;