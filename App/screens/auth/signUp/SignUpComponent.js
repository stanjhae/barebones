import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native';
import TextInput from '../../../utils/textInput/TextInput';
import AuthWrapper from '../../../utils/authWrapper/AuthWrapper';

const SignUpComponent = props => {
  const { navigation } = props;
  return (
    <AuthWrapper>
      <TextInput textContentType="name" autoCapitalize="words" keyboardType="default" label="Name" />
      <TextInput keyboardType="email-address" textContentType="emailAddress" label="Email" />
      <TextInput secureTextEntry keyboardType="email-address" textContentType="password" label="Password" />
      <Button title="Login" onPress={() => navigation.navigate('LoginScreen')} />
      <Button title="Home" onPress={() => navigation.navigate('MainNavigator')} />
    </AuthWrapper>
  );
};

SignUpComponent.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SignUpComponent;
