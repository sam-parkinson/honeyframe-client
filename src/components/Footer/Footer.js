import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer>      
        <span>Contact info goes here</span>
        <br />
        <span>
          <Link
            to={'/contact'}
          >
            Order now!
          </Link>
        </span>      
      </footer>
    )
  }
}