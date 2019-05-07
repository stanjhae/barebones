import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput as Input } from 'react-native';
import textInputStyles from './TextInputStyles';

const TextInput = (props) => {
  const {
    label,
    onChange,
  } = props;
  return (
    <View style={textInputStyles.container}>
      <Text>{label}</Text>
      <Input
        {...props}
        onChangeText={onChange}
        style={textInputStyles.textInput}
      />
    </View>
  );
};

TextInput.defaultProps = {
  autoCapitalize: 'none',
  autoCorrect: false,
  clearButtonMode: 'always',
  keyboardAppearance: 'default',
  keyboardType: 'default',
  maxLength: null,
  secureTextEntry: false,
  value: '',
};

export default TextInput;

TextInput.propTypes = {
  autoCapitalize: PropTypes.string,
  autoCorrect: PropTypes.bool,
  clearButtonMode: PropTypes.string,
  keyboardAppearance: PropTypes.string,
  keyboardType: PropTypes.string,
  label: PropTypes.any,
  maxLength: PropTypes.any,
  onChange: PropTypes.any,
  secureTextEntry: PropTypes.bool,
};
