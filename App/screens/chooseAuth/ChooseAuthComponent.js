import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native';
import { withNavigation } from 'react-navigation';
import { facebookLogin } from '../../utils/actions/helper.util';

const ChooseAuthComponent = ({ navigation }) => (
    <>
      <Button title="Sign Up" onPress={() => navigation.navigate('SignUpScreen')} />
      <Button title="Log In" onPress={() => navigation.navigate('LoginScreen')} />
      <Button title="FaceBook" onPress={() => facebookLogin(navigation)} />
      <Button title="Google" onPress={() => null} />
    </>
);

ChooseAuthComponent.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default withNavigation(ChooseAuthComponent);
