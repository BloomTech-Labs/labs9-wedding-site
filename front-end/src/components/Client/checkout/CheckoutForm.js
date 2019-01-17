import React from 'react';
import { injectStripe } from 'react-stripe-elements';

import CardSection from './CardSection';

class CheckoutForm extends React.Component {
  handleSubmit = (ev) => {
    ev.preventDefault();

    this.props.stripe.createToken({ name: 'Random Name' }).then(({ token }) => {
      console.log('Received Stripe token:', token);
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <CardSection />
        <button>Confirm order</button>
      </form>
    );
  }
}

export default injectStripe(CheckoutForm);