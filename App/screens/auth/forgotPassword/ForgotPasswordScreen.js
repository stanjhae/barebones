import React from 'react';
import { ForgotPasswordComponent } from './ForgotPasswordComponent';

export default class ForgotPasswordScreen extends React.Component {
  static navigationOptions = {
    title: "Forgot Password",
  };

  render() {
    return <ForgotPasswordComponent {...this.props} />;
  }
}
