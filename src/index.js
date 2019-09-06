import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from './contexts/StoreContext';
import { BlogProvider } from './contexts/BlogContext';
import App from './components/App/App';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <StoreProvider>
      <BlogProvider>
        <App />
      </BlogProvider>
    </StoreProvider>    
  </BrowserRouter>, 
  document.getElementById('root')
);