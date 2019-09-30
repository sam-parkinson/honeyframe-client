import React, { Component } from 'react';

const CartContext = React.createContext({
  cartItems: [],
  totalPrice: null,
  error: null,
  emptyCart: () => {},
  addItemToCart: () => {},
  setError: () => {},
  clearError: () => {},
});

export default CartContext;

export class CartProvider extends Component {
  state = {
    cartItems: [],
    totalPrice: null,
  }

  addItemToCart = (item) => {
    const newCart = this.state.cartItems.concat(item)
    this.setState({
      cartItems: newCart,
    });
  }

  render() {
    const value = {
      cartItems: this.state.cartItems,
      totalPrice: this.state.totalPrice,
      error: this.state.error,
      addItemToCart: this.addItemToCart,
    }

    return (
      <CartContext.Provider value={value}>
        {this.props.children}
      </CartContext.Provider>
    )
  }
}