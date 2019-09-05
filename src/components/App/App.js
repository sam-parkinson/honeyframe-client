import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './App.css'

class App extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <main>
          <h2>Welcome to Honeyframe!</h2>
          <section>
            <img src="https://picsum.photos/400/200" alt="Placeholder" />
            <h3>About us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed enim ut sem viverra aliquet. Est ante in nibh mauris cursus. Aenean pharetra magna ac placerat vestibulum lectus mauris. Nulla aliquet enim tortor at auctor. Viverra tellus in hac habitasse platea. Purus viverra accumsan in nisl nisi scelerisque eu ultrices. Sed adipiscing diam donec adipiscing tristique risus.</p>
          </section>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;