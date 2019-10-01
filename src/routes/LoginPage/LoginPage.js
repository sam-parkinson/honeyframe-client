import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

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
      <section>
        <LoginForm 
          onLoginSuccess={this.handleLoginSuccess}
        />
      </section>
    )
  }
}