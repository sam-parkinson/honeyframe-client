import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter }from 'react-router-dom';
import AboutPage from './AboutPage';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <BrowserRouter>
      <AboutPage />
    </BrowserRouter>,
    div
    );
  ReactDOM.unmountComponentAtNode(div);
});