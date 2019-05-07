import React from 'react';
import { Button } from 'react-native';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import AuthWrapper from '../../../utils/authWrapper/AuthWrapper';
import TextInput from '../../../utils/textInput/TextInput';
import { login } from '../../../utils/actions/user.util';

const LoginComponent = (props) => {
  const { navigation, user } = props;
  return (
    <Formik
      initialValues={user}
      // validationSchema={firstNewItemSchema}
      enableReinitialize={true}
      isInitialValid={true}
      onSubmit={values => login(values, navigation)}
    >
      {({
        handleChange, handleSubmit, values,
      }) => (
        <AuthWrapper>
          <TextInput keyboardType="email-address" textContentType="emailAddress" label="Email" value={values.email} onChange={handleChange('email')}/>
          <TextInput secureTextEntry keyboardType="email-address" textContentType="password" value={values.password} label="Password" onChange={handleChange('password')}/>
          <Button
            title="Forgot password?"
            onPress={() => navigation.navigate('ForgotPasswordScreen')}
          />
          <Button title="Log In" onPress={handleSubmit} />
          <Button title="Home" onPress={() => navigation.navigate('MainNavigator')} />
        </AuthWrapper>
      )}
    </Formik>

  );
};

LoginComponent.propTypes = {
  navigation: PropTypes.object.isRequired,
  user: PropTypes.any,
};

export default LoginComponent;
