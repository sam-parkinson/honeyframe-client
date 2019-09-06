import React, { Component } from 'react';
import { store } from './store';

const StoreContext = React.createContext({
  storeItems: store,
});

export default StoreContext;

export class StoreProvider extends Component {
  state = {
    storeItems: store,
  }

  render() {
    const value = {
      storeItems: this.state.storeItems,
    }

    return (
      <StoreContext.Provider value={value}>
        {this.props.children}
      </StoreContext.Provider>
    )
  }
}