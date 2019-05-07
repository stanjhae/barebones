import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  View,
  StatusBar,
  Text,
} from 'react-native';

import { View as AnimatableView } from 'react-native-animatable';
import FlashBarStyles from './FlashBarStyles';
import Icons from '../../constants/Icons';
import TouchableOpacity from '../TouchableOpacity';
import { store } from '../../redux/store';
import { toggleFlashMessage } from '../../redux/helper/helper.creators';

const FlashBar = (props) => {
  const { message, type } = props;
  return (
    <>
      <StatusBar hidden />
      <AnimatableView
        animation="slideInDown" duration={500} style={[{ backgroundColor: type === 'error' ? '#cc0000' : 'green' }, FlashBarStyles.errorContainer]}>
        <View style={FlashBarStyles.errorMessageContainer}>
          <Text style={FlashBarStyles.fontStyle}>{message}</Text>
        </View>
        <TouchableOpacity onPress={() => store.dispatch(toggleFlashMessage('', '', false))} style={FlashBarStyles.iconView}>
          <Image style={{ height: 16, width: 16 }} source={Icons.whiteCancelButton} />
        </TouchableOpacity>
      </AnimatableView>
    </>
  );
};

FlashBar.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['error', 'success', 'warning']),
};

export default FlashBar;
