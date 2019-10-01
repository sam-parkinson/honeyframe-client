import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import PrivateRoute from '../Utils/PrivateRoute';
import HomePage from '../../routes/HomePage/HomePage';
import AboutPage from '../../routes/AboutPage/AboutPage';
import StorePage from '../../routes/StorePage/StorePage';
import BlogPage from '../../routes/BlogPage/BlogPage';
import PostPage from '../../routes/PostPage/PostPage';
import ContactPage from '../../routes/ContactPage/ContactPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import IdleService from '../../services/idle-service'
import './App.css'

class App extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidMount() {
    IdleService.setIdleCallback(this.logoutFromIdle);
    if (TokenService.hasAuthToken()) {
      IdleService.registerIdleTimerResets();
      TokenService.queueCallbackBeforeExpiry(() => {
        AuthApiService.postRefreshToken();
      });
    }
  }

  componentWillUnmount() {
    IdleService.unRegisterIdleResets();
    TokenService.clearCallbackBeforeExpiry();
    TokenService.clearAuthToken();
  }

  logoutFromIdle = () => {
    TokenService.clearAuthToken();
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
    this.forceUpdate();
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
          <PublicOnlyRoute 
            path={'/login'}
            component={LoginPage}
          />
          <PrivateRoute 
            path={'/admin'}
          />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;