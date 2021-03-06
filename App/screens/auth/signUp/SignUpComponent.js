import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native';
import { Formik } from 'formik';
import TextInput from '../../../utils/textInput/TextInput';
import AuthWrapper from '../../../utils/authWrapper/AuthWrapper';
import { signUp } from '../../../utils/actions/user.util';

const SignUpComponent = (props) => {
  const { navigation, user } = props;
  return (
    <Formik
      initialValues={user}
      // validationSchema={firstNewItemSchema}
      enableReinitialize={true}
      isInitialValid={true}
      onSubmit={values => signUp(values, navigation)}>
      {({
        handleChange, handleSubmit, values,
      }) => (
        <AuthWrapper>
          <TextInput textContentType="name" autoCapitalize="words" keyboardType="default" label="First Name" value={values.firstName} onChange={handleChange('firstName')}/>
          <TextInput textContentType="name" autoCapitalize="words" keyboardType="default" label="Last Name" value={values.lastName} onChange={handleChange('lastName')}/>
          <TextInput keyboardType="email-address" textContentType="emailAddress" label="Email" value={values.email} onChange={handleChange('email')}/>
          <TextInput secureTextEntry keyboardType="email-address" textContentType="password" label="Password" value={values.password} onChange={handleChange('password')}/>
          <Button title="Sign Up" onPress={handleSubmit} />
        </AuthWrapper>
      )}
    </Formik>
  );
};

SignUpComponent.propTypes = {
  navigation: PropTypes.object.isRequired,
  user: PropTypes.any,
};

export default SignUpComponent;
