import React from 'react';
import { Button } from 'react-native';
import PropTypes from 'prop-types';

export const ProfileComponent = props => {
  const { navigation } = props;
  return <Button title="Edit profile" onPress={() => navigation.navigate('EditProfileScreen')} />;
};

ProfileComponent.propTypes = {
  navigation: PropTypes.object.isRequired,
};
