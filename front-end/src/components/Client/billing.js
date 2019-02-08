import React, {Component} from 'react';
import axios from 'axios';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './checkout/stripeCheckout';
import Sidebar from './clientNav';
import './billing.css';


class Billing extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        
        axios
        .get(`${process.env.REACT_APP_LOCAL_URL}/invite/${localStorage.getItem('weddingID')}`)
        .then(res => {
          console.log(res.data.weddingDetails.pricing_package)
          this.setState({
            pricingPackage: res.data.weddingDetails.pricing_package
          })
        })
        
        let vbtoken = localStorage.getItem('vbtoken');
        let oauth_id = localStorage.getItem('vbtoken');

        if(vbtoken){
            axios.post(`${process.env.REACT_APP_LOCAL_URL}/loaduser`, {oauth_id, vbtoken})
            .then(res => {
                this.props.setUser(res.data.couple[0], res.data.couple[1], res.data.guests, [ {...res.data.couple[0]}, {...res.data.couple[1]} ], res.data.wedding_data.event_address, res.data.wedding_data.event_date, res.data.couple[0].email, res.data.couple[0].phone)
                this.props.login()
                this.setState({
                   userLoaded: true,
                   user1: res.data.couple[0]
                })
            })
            .catch(err => console.log(err))
        } 
        else {
            this.props.history.push('/login')
        }
    }

    render() {
        return (
            <div className="billing">
                <Sidebar />
                <div className="billingContainer">
                    <StripeProvider apiKey={process.env.REACT_APP_STRIPE_API_KEY}>
                        <Elements>
                            <CheckoutForm user={this.state.user1} pricingPackage={this.state.pricingPackage}/>
                        </Elements>
                    </StripeProvider>
                </div>
            </div>
        );
    }
}

export default Billing;
