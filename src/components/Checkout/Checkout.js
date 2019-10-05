import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import CartContext from '../../contexts/CartContext';
import StoreApiService from '../../services/store-api-service';
import config from '../../config';


export default class Checkout extends Component {
  static contextType = CartContext

  onToken = (token) => {
    const body = {
      amount: this.context.totalPrice * 100,
      token: token
    }
    StoreApiService.postToken(body)
      .then(() =>
        this.context.emptyCart()
      )
  }

  render() {
    return (
      <StripeCheckout 
        amount={this.context.totalPrice * 100} // convert to cents
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