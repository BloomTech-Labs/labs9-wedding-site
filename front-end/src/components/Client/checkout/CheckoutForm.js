import React from 'react';
import { injectStripe } from 'react-stripe-elements';
import CardSection from './CardSection';

class _CheckoutForm extends React.Component {
  handleSubmit = (ev) => {
    ev.preventDefault();
    if (this.props.stripe) {
      this.props.stripe
        .createToken()
        .then((payload) => console.log('[token]', payload));
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  };
  render() {
    return (
      <CardSection />
    );
  }
}
const CheckoutForm = injectStripe(_CheckoutForm);

export default CheckoutForm