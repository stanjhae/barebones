import React from 'react';
import { connect } from 'react-redux';
import LoginComponent from './LoginComponent';

class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Log In',
  };

  render() {
    return <LoginComponent {...this.props} />;
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
});

export default connect(mapStateToProps)(LoginScreen);
