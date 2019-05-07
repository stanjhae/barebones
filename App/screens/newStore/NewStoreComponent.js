import PropTypes from 'prop-types';
import React from 'react';
import {
  Button, ActionSheetIOS,
} from 'react-native';
import { Formik } from 'formik';
import { newStore } from '../../utils/actions/store.util';
import AuthWrapper
  from '../../utils/authWrapper/AuthWrapper';
import TextInput
  from '../../utils/textInput/TextInput';
import ImagePicker from '../../utils/imagePicker/ImagePicker';


class NewStoreComponent extends React.Component {
  state ={
    isImageOpen: false,
    type: '',
  };

  showActionSheet = () => {
    ActionSheetIOS.showActionSheetWithOptions({
      options: ['Cancel', 'Take a photo', 'Photo & Video Library'],
      cancelButtonIndex: 0,
    },
    (buttonIndex) => {
      if (buttonIndex === 2) {
        this.handleImagePicker('library');
      } else if (buttonIndex === 1) {
        this.handleImagePicker('camera');
      }
    });
  };

  handleImagePicker = (type) => {
    this.setState({ isImageOpen: true, type });
  };

  render() {
    const { navigation, store } = this.props;
    return (
      <Formik
        initialValues={store}
        enableReinitialize={true}
        isInitialValid={true}
        onSubmit={values => newStore(values, navigation)}
      >
        {({
          values, handleChange, handleSubmit, touched, errors, setFieldValue,
        }) => (
          <AuthWrapper>
            <TextInput autoCapitalize="words" keyboardType="default" label="Name" value={values.name} onChange={handleChange('name')}/>
            <TextInput autoCapitalize="words" keyboardType="default" label="Address" value={values.address} onChange={handleChange('address')}/>

            <Button title={'Add Photo'} onPress={this.showActionSheet}/>

            {
              this.state.isImageOpen
              && <ImagePicker
                error={touched.picture && errors.picture}
                value={values.picture}
                type={this.state.type}
                onChange={(e) => { setFieldValue('image', e); }}
                onClose={() => this.setState({ isImageOpen: false })}
              />
            }

            <Button title="Create" onPress={handleSubmit} />
          </AuthWrapper>
        )}
      </Formik>
    );
  }
}

export default NewStoreComponent;

NewStoreComponent.propTypes = {
  store: PropTypes.any,
  navigation: PropTypes.any,
};
