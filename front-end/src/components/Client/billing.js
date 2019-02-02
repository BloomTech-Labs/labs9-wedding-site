import React from 'react';
import { StripeProvider } from 'react-stripe-elements';
import Checkout from './checkout/stripeCheckout';
import Sidebar from './clientNav';
import './billing.css';


class Payment extends React.Component {

    state = {}

    componentDidMount() {

        
        let vbtoken = localStorage.getItem('vbtoken');
        let oauth_id = localStorage.getItem('vbtoken');

        if(vbtoken){
            axios.post(`${process.env.REACT_APP_LOCAL_URL}/loaduser`, {oauth_id, vbtoken})
            .then(res => {
                console.log(res)
                this.props.setUser(res.data.couple[0], res.data.couple[1], res.data.guests, [ {...res.data.couple[0]}, {...res.data.couple[1]} ], res.data.wedding_data.event_address, res.data.wedding_data.event_date, res.data.couple[0].email, res.data.couple[0].phone)
                this.props.login()
                this.setState({
                   userLoaded: true 
                })
            })
            .catch(err => console.log(err))
        } 
        else {
            this.props.history.push('/login')
        }
    }

    render(){

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
    
}

export default Payment;