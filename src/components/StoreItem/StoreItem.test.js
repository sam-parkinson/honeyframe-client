import React from 'react';
import ReactDOM from 'react-dom';
import StoreItem from './StoreItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StoreItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});