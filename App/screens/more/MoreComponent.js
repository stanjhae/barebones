import React from 'react';
import { View, Button } from 'react-native';
import PropTypes from 'prop-types';

export const MoreComponent = props => {
  const { navigation } = props;
  return (
    <View>
      <Button title="Logout" onPress={() => navigation.navigate('AuthNavigator')} />
      <Button title="Profile" onPress={() => navigation.navigate('ProfileScreen')} />
    </View>
  );
};

MoreComponent.propTypes = {
  navigation: PropTypes.object.isRequired,
};
