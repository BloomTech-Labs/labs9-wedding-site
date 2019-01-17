import React from 'react';
import styled from 'styled-components';
import { StripeProvider } from 'react-stripe-elements';
import Checkout from './checkout/stripeCheckout';


const PaymentContainer = styled.div`
margin: auto;
border: 1px solid black;
background-color: white;
width: 500px;
display:flex;
justify-content: center;
height: 250px;
`

function Payment() {
    return (
        <PaymentContainer>
            <StripeProvider apiKey="pk_test_M1Y5kyDDSB7dOAWXIhzOOqMV">
                <Checkout />
            </StripeProvider>
        </PaymentContainer>
    );
}

export default Payment;