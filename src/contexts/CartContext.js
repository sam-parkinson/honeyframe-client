import React, { Component } from 'react';

const CartContext = React.createContext({
  cartItems: [],
  totalPrice: null,
  error: null,
  emptyCart: () => {},
  addItemToCart: () => {},
  updateTotalPrice: () => {},
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
    })
    this.updateTotalPrice(item.price)
  }

  updateTotalPrice = (price) => {
    const newAmt = this.state.totalPrice 
    ? this.state.totalPrice + parseFloat(price)
    : parseFloat(price)
    this.setState({
      totalPrice: newAmt,
    });
  }

  render() {
    const value = {
      cartItems: this.state.cartItems,
      totalPrice: this.state.totalPrice,
      error: this.state.error,
      addItemToCart: this.addItemToCart,
      updateTotalPrice: this.updateTotalPrice,
    }

    return (
      <CartContext.Provider value={value}>
        {this.props.children}
      </CartContext.Provider>
    )
  }
}