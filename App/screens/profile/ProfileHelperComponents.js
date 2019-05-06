import React from 'react';
import { View, Text, Image } from 'react-native'
import ProfileStyles from "./ProfileStyles";
import { myImage } from "../../constants/Layout";

export const ProfileNameAndImageView = props => {
  return (
    <View style={ProfileStyles.profileNameAndPictureViewContainer}>
      <View style={ProfileStyles.profilePictureContainer}>
        <Image source={{uri: myImage}} style={ProfileStyles.profilePictureView} />
      </View>
      <Text style={ProfileStyles.name}>Woyong</Text>
    </View>
  );
};
