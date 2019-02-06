import React, { Component } from 'react';
import {  injectStripe,
          CardElement,
          CardNumberElement,
          CardExpiryElement,
          CardCVCElement,
          PostalCodeElement} from 'react-stripe-elements';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import "./cardSection.css";
import axios from 'axios';


class CheckoutForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      complete: false
    };
  }

  submitForeverPackage = async (e) => {
    e.preventDefault();
    let customerName = `${this.props.user.first_name} ${this.props.user.last_name}`;
    let {token} = await this.props.stripe.createToken({name: customerName});
    axios
      .post(`${process.env.REACT_APP_LOCAL_URL}/chargeforever`, {
        token: token.id,
        wedding_id: localStorage.getItem('weddingID')
      })
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          console.log("Purchase Complete!")
          this.setState({complete: true});
        }
      })
      .catch(err => console.log(err));
  }

  submitEternityPackage = async (e) => {
    e.preventDefault();
    let customerName = `${this.props.user.first_name} ${this.props.user.last_name}`;
    let {token} = await this.props.stripe.createToken({name: customerName});
    axios
      .post(`${process.env.REACT_APP_LOCAL_URL}/chargeeternity`, {
        token: token.id,
        wedding_id: localStorage.getItem('weddingID')
      })
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          console.log("Purchase Complete!")
          this.setState({complete: true});
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.complete) return <h2>Your Payment Has Been Processed!</h2>;
    return (
      // <div className="checkout">
      //   <form onSubmit={this.submit}>
      //     <label>Card number<CardNumberElement /></label>
      //     <label>Expiration date<CardExpiryElement /></label>
      //     <label>CVC<CardCVCElement /></label>
      //     <label>Zip code<PostalCodeElement /></label>
      //     <button onClick={this.submit}>Complete Purchase</button>
      //   </form>
      // </div>
      <div className="checkout">
        <CardElement />
        <div className="pricing-packages">
          <Card className="package">
            <CardContent>
            <h4>The Forever Package | $9.99</h4>
            <p>30-person Guest List</p>
            <p>Unlimited Registries</p>
            <button onClick={this.submitForeverPackage}>Buy Forever Package</button>
            </CardContent>
          </Card>
          <Card className="package">
            <CardContent>
            <h4>The Eternity Package | $19.99</h4>
            <p>Unlimited Guest List</p>
            <p>Unlimited Registries</p>
            <button onClick={this.submitEternityPackage}>Buy Eternity Package</button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);