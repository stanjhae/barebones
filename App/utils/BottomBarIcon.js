import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import Layout from '../constants/Layout';

const BottomBarIcon = (props) => {
  const { icon } = props;
  return (
    <Image
      style={{ width: Layout.bottomBarIconsStyle, height: Layout.bottomBarIconsStyle }}
      source={icon}
    />
  );
};

BottomBarIcon.propTypes = {
  icon: PropTypes.any.isRequired,
};

export default BottomBarIcon;
