import React from 'react';
import PropTypes from 'prop-types';
import { View, Button } from 'react-native';

export const SignUpComponent = props => {
  const { navigation } = props;
  return (
    <View>
      <Button title="Login" onPress={() => navigation.navigate('LoginScreen')} />
      <Button title="Home" onPress={() => navigation.navigate('MainNavigator')} />
    </View>
  );
};

SignUpComponent.propTypes = {
  navigation: PropTypes.object.isRequired,
};
