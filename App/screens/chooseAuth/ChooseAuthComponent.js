import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native';
import { withNavigation } from 'react-navigation';

const ChooseAuthComponent = props => {
  const { navigation } = props;
  return (
    <>
      <Button title="Sign Up" onPress={() => navigation.navigate('SignUpScreen')} />
      <Button title="Log In" onPress={() => navigation.navigate('LoginScreen')} />
      <Button title="FaceBook" onPress={() => null} />
      <Button title="Google" onPress={() => null} />
    </>
  );
};

ChooseAuthComponent.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default withNavigation(ChooseAuthComponent);
