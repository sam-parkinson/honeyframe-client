import React, { Component } from 'react';

class App extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    return (
      <div className='App'>
        <header></header>
        <main>
          Text Goes Here!
        </main>
        <footer></footer>
      </div>
    )
  }
}

export default App;