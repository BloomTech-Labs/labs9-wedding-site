import React from 'react';
import styled from 'styled-components';


const PaymentContainer = styled.div`
margin 20px;
border: 1px solid black;
background-color: white;
width: 200px;
height: 150px;
`

function Payment() {
    return (
        <PaymentContainer>
            <form name="payment-form" onsubmit="handleSubmit()">
                <h1>Billing</h1>
                <div className="Payment-info">
                    <h3>Payment Info</h3>
                    <input type="text" name="CC#" />
                    <input type="text" name="EXP" />
                    <input type="text" name="CVV" />
                </div>
                <button tupe="submit">Buy Now</button>
            </form>
        </PaymentContainer>
    );
}

export default Payment;