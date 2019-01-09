import React from 'react';
import styled from 'styled-components';


const PaymentContainer = styled.div`
margin 20px;
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
            <h1>Billing</h1>
            <form name="payment-form" onsubmit="handleSubmit()">
                <div className="Payment-info">
                    <h3>Payment Info</h3>
                    <input type="text" name="CC#" placeholder="CC#" /><br />
                    <input type="text" name="EXP" placeholder="EXP" /><br />
                    <input type="text" name="CVV" placeholder="CVV" />
                </div>
                <button tupe="submit">Buy Now</button>
            </form>
        </PaymentContainer>
    );
}

export default Payment;