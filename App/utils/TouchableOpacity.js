import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity as Touchable } from 'react-native';

const TouchableOpacity = (props) => {
  const { children, onPress, style } = props;
  return (
    <Touchable style={style} onPress={onPress} activeOpacity={0.7}>
      {children}
    </Touchable>
  );
};

TouchableOpacity.propTypes = {
  children: PropTypes.any,
  onPress: PropTypes.any,
  style: PropTypes.any,
};

export default TouchableOpacity;
