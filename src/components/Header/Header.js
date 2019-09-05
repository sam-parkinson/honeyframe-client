import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1>Honeyframe Beekeeping</h1>
        <Nav />
      </header>
    )
  }
}