import { createStackNavigator } from 'react-navigation';
import SignUpScreen from '../screens/auth/signUp/SignUpScreen';
import LoginScreen from '../screens/auth/login/LoginScreen';
import ChooseAuthScreen from '../screens/chooseAuth/ChooseAuthScreen';
import ForgotPasswordScreen from '../screens/auth/forgotPassword/ForgotPasswordScreen';

export default createStackNavigator({
  ChooseAuthScreen,
  SignUpScreen,
  LoginScreen,
  ForgotPasswordScreen,
});
