import React from 'react';
import { View, Button } from 'react-native';
import PropTypes from 'prop-types';

export const MoreComponent = (props) => {
  const { navigation } = props;
  return (
    <View>
      <Button title="View Profile" onPress={() => navigation.navigate('ProfileScreen')} />
      <Button title="Logout" onPress={() => navigation.navigate('AuthNavigator')} />
    </View>
  );
};

MoreComponent.propTypes = {
  navigation: PropTypes.object.isRequired,
};
