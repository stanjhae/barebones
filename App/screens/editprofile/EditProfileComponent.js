import PropTypes from 'prop-types';
import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Button,
} from 'react-native';
import { Formik } from 'formik';
import { editProfile } from '../../utils/actions/user.util';
import TextInput from '../../utils/textInput/TextInput';

const EditProfileComponent = ({ user, navigation }) => (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <KeyboardAvoidingView style={styles.keyboardAvoidingViewContainer} behavior="padding">
        <Formik
          initialValues={user}
          onSubmit={(values, formikBag) => editProfile(values, formikBag, navigation)}
        >
          {({ handleChange, values, handleSubmit }) => (
            <View>
              <TextInput textContentType="givenName" autoCapitalize="words" keyboardType="default" label="firstName" value={values.firstName} onChange={handleChange('firstName')}/>
              <TextInput textContentType="familyName" autoCapitalize="words" keyboardType="default" label="lastName" value={values.lastName} onChange={handleChange('lastName')}/>
              <Button title="Submit" onPress={handleSubmit} />
            </View>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </View>

);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  keyboardAvoidingViewContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default EditProfileComponent;

EditProfileComponent.propTypes = {
  navigation: PropTypes.any,
  user: PropTypes.any,
};
