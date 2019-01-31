import React from 'react';
import { injectStripe } from 'react-stripe-elements';
import CardSection from './CardSection';
import axios from 'axios';

class _CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    ev.preventDefault();
    let { token } = await this.props.stripe.createToken({ name: "Name" });
    console.log(token);
    axios.post(`${process.env.REACT_APP_LOCAL_URL}/vb/billing`, {token})
      .then(
        function (response) {
          console.log(response, { message: "Charge Successful" });
        }
      )
      .catch(
        function (err) {
          console.log(err, { message: "error, charge unsuccessful" })
        }
      )
  }
  render() {
    return (
      <CardSection submit={this.submit} />
    );
  }
}
const CheckoutForm = injectStripe(_CheckoutForm);

export default CheckoutForm