import React from 'react';
import { ProfileComponent } from './ProfileComponent';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile'
  };

  render() {
    return <ProfileComponent {...this.props} />;
  }
}
