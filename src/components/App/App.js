import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HomePage from '../../routes/HomePage/HomePage';
import AboutPage from '../../routes/AboutPage/AboutPage';
import StorePage from '../../routes/StorePage/StorePage';
import BlogPage from '../../routes/BlogPage/BlogPage';
import PostPage from '../../routes/PostPage/PostPage';
import ContactPage from '../../routes/ContactPage/ContactPage';
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
            path={'/about'}
            component={AboutPage}
          />
          <Route 
            path={'/store'}
            component={StorePage}
          />
          <Route 
            exact
            path={'/news'}
            component={BlogPage}
          />
          <Route 
            path={'/news/:post_id'}
            component={PostPage}
          />
          <Route 
            path={'/contact'}
            component={ContactPage}
          />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;