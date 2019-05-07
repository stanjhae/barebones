import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

export const JustFlex = (props) => {
  const { children, backgroundColor } = props;
  return <View style={[{ flex: 1, backgroundColor }]}>{children}</View>;
};

export const JustFlexWithAlignCenter = (props) => {
  const { children, backgroundColor } = props;
  return (
    <View style={[{ flex: 1, backgroundColor, alignItems: 'center' }]}>
      {children}
    </View>
  );
};

JustFlexWithAlignCenter.defaultProps = {
  backgroundColor: 'white',
};

JustFlexWithAlignCenter.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  children: PropTypes.node,
};

JustFlex.defaultProps = {
  backgroundColor: 'white',
};

JustFlex.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  children: PropTypes.node,
};
