import React from 'react';
import styled from 'styled-components';
import { StripeProvider } from 'react-stripe-elements';
import Checkout from './checkout/stripeCheckout';


const PaymentContainer = styled.div`
margin: auto;
margin-top: 200px;
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
            <StripeProvider apiKey="sk_test_4eC39HqLyjWDarjtT1zdp7dc">
                <Checkout />
            </StripeProvider>
        </PaymentContainer>
    );
}

export default Payment;