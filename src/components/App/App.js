import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HomePage from '../../routes/HomePage/HomePage';
import StorePage from '../../routes/StorePage/StorePage';
import BlogPage from '../../routes/BlogPage/BlogPage';
import PostPage from '../../routes/PostPage/PostPage';
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
        <Switch>
          <Route 
            exact
            path={'/'}
            component={HomePage}
          />
          <Route 
            path={'/store'}
            component={StorePage}
          />
          <Route 
            exact
            path={'/blog'}
            component={BlogPage}
          />
          <Route 
            path={'/blog/:post_id'}
            component={PostPage}
          />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;