import React from 'react';
import ForgotPasswordComponent from './ForgotPasswordComponent';
import AuthWrapper from '../../../utils/authWrapper/AuthWrapper';

export default class ForgotPasswordScreen extends React.Component {
  static navigationOptions = {
    title: 'Forgot Password',
  };

  render() {
    return (
      <AuthWrapper>
        <ForgotPasswordComponent {...this.props} />
      </AuthWrapper>
    );
  }
}
