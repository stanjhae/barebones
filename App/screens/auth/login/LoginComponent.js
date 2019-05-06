import React from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';
import AuthWrapper from "../../../utils/authWrapper/AuthWrapper";
import TextInput from "../../../utils/textInput/TextInput";

export const LoginComponent = props => {
  const { navigation } = props;
  return (
    <AuthWrapper>
      <TextInput keyboardType="email-address" textContentType="emailAddress" label="Email" />
      <TextInput secureTextEntry keyboardType="email-address" textContentType="password" label="Password" />
      <Button
        title="Forgot password?"
        onPress={() => navigation.navigate('ForgotPasswordScreen')}
      />
      <Button title="Home" onPress={() => navigation.navigate('MainNavigator')} />
    </AuthWrapper>
  );
};

LoginComponent.propTypes = {
  navigation: PropTypes.object.isRequired,
};
