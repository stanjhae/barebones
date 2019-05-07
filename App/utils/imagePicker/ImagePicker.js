import PropTypes from 'prop-types';
import React from 'react';
import { ImagePicker as imagePicker, Permissions } from 'expo';
import { View } from 'react-native';

class ImagePicker extends React.Component {
  pickImage = async (type) => {
    if (type === 'library') {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

      if (status === 'granted') {
        const result = await imagePicker.launchImageLibraryAsync({
          base64: true,
          quality: 0,
        });
        if (!result.cancelled) {
          this.props.onChange(result.uri);
        }
        this.props.onClose();
      } else {
        throw new Error('Camera roll permission not granted');
      }
    } else {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      if (status === 'granted') {
        const result = await imagePicker.launchCameraAsync({
          base64: true,
          quality: 0,
        });
        if (!result.cancelled) {
          this.props.onChange(result.uri);
        }
        this.props.onClose();
      } else {
        throw new Error('Camera roll permission not granted');
      }
    }
  }

  componentDidMount() {
    this.pickImage(this.props.type);
  }

  render() {
    return (
      <View>
        {/* {value && <Image source={{ uri: value }} style={{ width: 100, height: 100 }} />} */}
      </View>
    );
  }
}

export default ImagePicker;

ImagePicker.propTypes = {
  onChange: PropTypes.any,
  onClose: PropTypes.any,
  type: PropTypes.any,
};
