import React from 'react';
import { LoginComponent } from './LoginComponent';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: "Log In",
  };

  render() {
    return <LoginComponent {...this.props} />;
  }
}
