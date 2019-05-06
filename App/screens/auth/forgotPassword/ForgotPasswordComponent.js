import React from 'react';
import TextInput from '../../../utils/textInput/TextInput';

const ForgotPasswordComponent = () => {
  return (
    <TextInput keyboardType="email-address" textContentType="emailAddress" label="Email" />
  );
};

export default ForgotPasswordComponent;
