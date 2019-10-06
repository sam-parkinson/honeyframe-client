import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = { error: null };

  handleSubmitJwtAuth = ev => {
    ev.preventDefault();
    this.setState({ error: null });
    const { user_name, password } = ev.target;

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then(res => {
        user_name.value = ''
        password.value = ''
        this.props.onLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state;
    return (
      <form
        className='loginForm'
        onSubmit={this.handleSubmitJwtAuth}
      >
        <p role='alert'>
          {error && <div>{error}</div>}
        </p>
        <p>
          <label htmlFor='user_name'>
            User name
          </label>
          <br />
          <input
            required
            name='user_name'
            id='user_name'
            placeholder='beekeeper'
          />
        </p>
        <p>
          <label htmlFor='password'>
            Password
          </label>
          <br />
          <input
            required
            name='password'
            type='password'
            id='password'
            placeholder='testpassword'
          />
        </p>
        <button type='submit'>
          Log In
        </button>
      </form>
    )
  }
}