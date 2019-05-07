import React from 'react';
import { ScrollView, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';
import AuthWrapperStyles from './AuthWrapperStyles';

const AuthWrapper = (props) => {
  const { children } = props;
  return (
    <KeyboardAvoidingView
      style={AuthWrapperStyles.keyboardAvoidingViewContainer}
      behavior="padding">
      <ScrollView
        contentContainerStyle={AuthWrapperStyles.scrollViewContainer}
        keyboardShouldPersistTaps="handled">
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

AuthWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthWrapper;
