import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import CartContext from '../../contexts/CartContext';
import config from '../../config';


export default class CheckoutPage extends Component {
  static contextType = CartContext

  onToken = (token) => {
    /* 
      Post payment to stripe, then post order to orders server
    */
  }

  render() {
    return (
      <StripeCheckout 
        amount={this.context.totalPrice}
        currency="USD"
        shippingAddress
        billingAddress
        token={this.onToken}
        stripeKey={config.STRIPE_KEY}
        className="checkoutButton"
      />
    )
  }
}