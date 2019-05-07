import React from 'react';
import { connect } from 'react-redux';
import ProfileComponent from './ProfileComponent';

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: '',
  };

  render() {
    return <ProfileComponent {...this.props} />;
  }
}

const mapStateToProps = state => ({
  user: state.helper.asyncStorage.user,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
