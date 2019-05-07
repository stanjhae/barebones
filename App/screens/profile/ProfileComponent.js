import React from 'react';
import { View, Button } from 'react-native';
import PropTypes from 'prop-types';
import ProfileStyles from './ProfileStyles';
import ProfileNameAndImageView from './ProfileHelperComponents';

const ProfileComponent = props => (
    <View style={ProfileStyles.container}>
      <ProfileNameAndImageView {...props.user}/>
      <Button title={'Edit Profile'} onPress={() => props.navigation.navigate('EditProfileScreen')}/>
    </View>
);

ProfileComponent.propTypes = {
  navigation: PropTypes.any,
  user: PropTypes.any,
};

export default ProfileComponent;
