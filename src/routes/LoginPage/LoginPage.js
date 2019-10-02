import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import DemoForm from '../../components/DemoForm/DemoForm';
import './LoginPage.css';

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = () => {
    const { history } = this.props;
    history.push('/admin')
  }

  render() {
    return (
      <main>
        <h2>Log In</h2>
        <section>
          <LoginForm 
            onLoginSuccess={this.handleLoginSuccess}
          />
        </section>
        <h2>Admin Page Demo</h2>
        <section>
          <DemoForm />
        </section>
      </main>
    )
  }
}