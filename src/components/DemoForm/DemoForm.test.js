import React from 'react';
import ReactDOM from 'react-dom';
import DemoForm from './DemoForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});