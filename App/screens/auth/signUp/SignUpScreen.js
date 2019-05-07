import React from 'react';
import SignUpComponent from './SignUpComponent';

export default class SignUpScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign Up',
  };

  render() {
    return <SignUpComponent {...this.props} />;
  }
}
