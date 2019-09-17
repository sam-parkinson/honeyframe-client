import React, { Component } from 'react';

const StoreContext = React.createContext({
  storeItems: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setStoreItems: () => {},
});

export default StoreContext;

export class StoreProvider extends Component {
  state = {
    storeItems: [],
  }

  setStoreItems = storeItems => {
    this.setState({ storeItems })
  }

  setError = error => {
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      storeItems: this.state.storeItems,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setStoreItems: this.setStoreItems
    }

    return (
      <StoreContext.Provider value={value}>
        {this.props.children}
      </StoreContext.Provider>
    )
  }
}