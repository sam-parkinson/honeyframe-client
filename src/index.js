import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from './contexts/StoreContext';
import { CartProvider } from './contexts/CartContext';
import { BlogProvider } from './contexts/BlogContext';
import App from './components/App/App';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <StoreProvider>
      <CartProvider>
        <BlogProvider>
          <App />
        </BlogProvider>
      </CartProvider>
    </StoreProvider>    
  </BrowserRouter>, 
  document.getElementById('root')
);