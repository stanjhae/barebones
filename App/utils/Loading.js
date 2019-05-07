import PropTypes from 'prop-types';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { DotIndicator } from 'react-native-indicators';
import Colors from '../constants/Colors';

const Loading = ({ message }) => (
    <View style={styles.container}>
      <DotIndicator count={3} size={10} color={Colors.appMainColor} />
      <Text>{message}</Text>
    </View>
);

const styles = StyleSheet.create({
  container: {
    zIndex: 100,
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Loading.propTypes = {
  message: PropTypes.any,
};

export default Loading;
