import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { SplashStyles } from './SplashStyles';

export default class SplashScreen extends React.Component {
  componentDidMount() {
    const { navigation } = this.props;
    setTimeout(() => {
      navigation.navigate('AuthNavigator');
    }, 1000);
  }

  render() {
    return (
      <View style={SplashStyles.container}>
        <Text> Splash Screen </Text>
      </View>
    );
  }
}

SplashScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};
