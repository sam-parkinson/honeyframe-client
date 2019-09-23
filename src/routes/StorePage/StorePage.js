import React, { Component } from 'react';
import StoreContext from '../../contexts/StoreContext';
import StoreApiService from '../../services/store-api-service';
import SortBar from '../../components/SortBar/SortBar';

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
      <li
        key={index}
      >
        <h3>{item.item_name}</h3>
        {item.img_url && <img src={item.img_url} alt={item.item_name} />}
        {item.item_desc && <p>{item.item_desc}</p>}
        {item.date_harvested && <p>Harvest date: {new Date(item.date_harvested).toLocaleDateString()}</p>}
      </li>
    )
  }

  render() {
    return (
      <main>
        <h2>Store</h2>
        {/* <SortBar /> */}
        <section>  
          <ul>
            {this.renderStore()}
          </ul>
        </section>
      </main>
    )
  }
}