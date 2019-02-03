import React, { Component } from 'react';
import {  injectStripe,
          CardNumberElement,
          CardExpiryElement,
          CardCVCElement,
          PostalCodeElement} from 'react-stripe-elements';
import "./cardSection.css";


class CheckoutForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      complete: false
    };
  }

  submit = async (e) => {
    e.preventDefault();
    let {token} = await this.props.stripe.createToken({name: "Customer Name"});
    let response = await fetch(`${process.env.REACT_APP_LOCAL_URL}/charge`, {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: token.id
    });
  
    if (response.ok) {
      console.log("Purchase Complete!")
      this.setState({complete: true});
    }
  }

  render() {
    if (this.state.complete) return <h2>Your Payment Has Been Processed!</h2>;
    return (
      <div className="checkout">
        <form onSubmit={this.submit}>
          <label>Card number<CardNumberElement /></label>
          <label>Expiration date<CardExpiryElement /></label>
          <label>CVC<CardCVCElement /></label>
          <label>Zip code<PostalCodeElement /></label>
          <button onClick={this.submit}>Complete Purchase</button>
        </form>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);