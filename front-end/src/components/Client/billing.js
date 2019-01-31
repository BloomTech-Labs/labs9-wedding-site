import React from 'react';
import { StripeProvider } from 'react-stripe-elements';
import Checkout from './checkout/stripeCheckout';
import Sidebar from './clientNav';
import './billing.css';


function Payment() {
    return (
        <div className="billing">
            <Sidebar />
            <div className="billingContainer">
                <StripeProvider apiKey="pk_test_M1Y5kyDDSB7dOAWXIhzOOqMV">
                    <Checkout />
                </StripeProvider>
            </div>
        </div>
    );
}

export default Payment;