import React from 'react';
import { EditProfileComponent } from "./EditProfileComponent";

export default class EditProfileScreen extends React.Component {
  static navigationOptions = {
    title: "Edit Profile",
  };

  render() {
    return <EditProfileComponent />;
  }
}
