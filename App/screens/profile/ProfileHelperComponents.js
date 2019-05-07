import PropTypes from 'prop-types';
import React from 'react';
import { View, Text } from 'react-native';
import ProfileStyles from './ProfileStyles';
// import url from '../../constants/url';

const ProfileNameAndImageView = props => (
    <View style={ProfileStyles.profileNameAndPictureViewContainer}>
      <View style={ProfileStyles.profilePictureContainer}>
        {/* <Image source={{ uri: `${url}/image/${props.avatar}` }} style={ProfileStyles.profilePictureView} /> */}
      </View>
      <Text style={ProfileStyles.name}>{props.firstName} {props.lastName}</Text>
    </View>
);

export default ProfileNameAndImageView;

ProfileNameAndImageView.propTypes = {
  avatar: PropTypes.any,
  firstName: PropTypes.any,
  lastName: PropTypes.any,
};
