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

TextInput.propTypes = {
  label: PropTypes.any,
  onChange: PropTypes.any,
};

export default TextInput;
