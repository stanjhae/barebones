import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput as Input } from 'react-native';
import textInputStyles from './TextInputStyles';

const TextInput = props => {
  const {
    label,
    autoCorrect,
    autoCapitalize,
    onChange,
    keyboardType,
    secureTextEntry,
    clearButtonMode,
    maxLength,
    keyboardAppearance,
    textContentType,
  } = props;
  return (
    <View style={textInputStyles.container}>
      <Text>{label}</Text>
      <Input
        clearButtonMode={clearButtonMode}
        autoCorrect={autoCorrect}
        autoCapitalize={autoCapitalize}
        onChangeText={onChange}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        maxLength={maxLength}
        keyboardAppearance={keyboardAppearance}
        textContentType={textContentType}
        style={textInputStyles.textInput}
      />
    </View>
  );
};

TextInput.defaultProps = {
  autoCapitalize: 'none',
  autoCorrect: false,
  onChange: () => null,
  keyboardAppearance: 'default',
  secureTextEntry: false,
  clearButtonMode: 'always',
  keyboardType: 'default',
  maxLength: null,
};

TextInput.propTypes = {
  clearButtonMode: PropTypes.string,
  autoCapitalize: PropTypes.string,
  autoCorrect: PropTypes.bool,
  keyboardAppearance: PropTypes.string,
  keyboardType: PropTypes.string,
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  onChange: PropTypes.func,
  textContentType: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool,
};

export default TextInput;
