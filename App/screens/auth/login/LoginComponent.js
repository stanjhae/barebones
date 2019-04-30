import React from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';

export const LoginComponent = props => {
  const { navigation } = props;
  return (
    <View>
      <Button
        title="Forgot password?"
        onPress={() => navigation.navigate('ForgotPasswordScreen')}
      />
      <Button title="Home" onPress={() => navigation.navigate('MainNavigator')} />
    </View>
  );
};

LoginComponent.propTypes = {
  navigation: PropTypes.object.isRequired,
};
