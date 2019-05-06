import React from 'react';
import ProfileComponent from './ProfileComponent';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: ''
  };

  render() {
    return <ProfileComponent {...this.props} />;
  }
}
