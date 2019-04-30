import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthNavigator from './AuthNavigator';
import SplashScreen from '../screens/splash/SplashScreen';
import MainNavigator from './MainNavigator';

export default createAppContainer(
  createSwitchNavigator({
    SplashScreen,
    AuthNavigator,
    MainNavigator,
  })
);
