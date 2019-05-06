import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import ProfileStyles from './ProfileStyles';
import { ProfileNameAndImageView } from './ProfileHelperComponents';

const ProfileComponent = props => {
  const { navigation } = props;
  return (
    <View style={ProfileStyles.container}>
      <ProfileNameAndImageView />
    </View>
  );
};

ProfileComponent.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ProfileComponent;
