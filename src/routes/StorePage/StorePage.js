import React, { Component } from 'react';
import StoreItem from '../../components/StoreItem/StoreItem';
import Cart from '../../components/Cart/Cart';
import StoreContext from '../../contexts/StoreContext';
import StoreApiService from '../../services/store-api-service';
import './StorePage.css'

export default class StorePage extends Component {
  static contextType = StoreContext;

  componentDidMount() {
    this.context.clearError();
    StoreApiService.getAllItems()
      .then(this.context.setStoreItems)
      .catch(this.context.setError)
  }

  renderStore() {
    const { storeItems = [] } = this.context;
    return storeItems.map((item, index) => 
      <StoreItem 
        key={index}
        item={item}
      />
    )
  }

  render() {
    return (
      <main>
        <h2>Store</h2>
        <section>  
          <ul className='storeList'>
            {this.renderStore()}
          </ul>
        </section>        
        <Cart />        
      </main>
    )
  }
}