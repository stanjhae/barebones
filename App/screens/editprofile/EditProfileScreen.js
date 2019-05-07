import React from 'react';
import { connect } from 'react-redux';
import EditProfileComponent from './EditProfileComponent';

class EditProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Edit Profile',
  };

  render() {
    console.log(this.props);
    return <EditProfileComponent {...this.props}/>;
  }
}

const mapStateToProps = state => ({
  user: state.helper.asyncStorage.user,
});

export default connect(mapStateToProps)(EditProfileScreen);
