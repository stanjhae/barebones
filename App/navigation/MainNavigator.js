import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from '../screens/home/HomeScreen';
import MoreScreen from '../screens/more/MoreScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import EditProfileScreen from '../screens/editprofile/EditProfileScreen';

const HomeScreenStack = createStackNavigator({
  HomeScreen,
});

HomeScreenStack.navigationOptions = {
  tabBarLabel: 'Home',
};

const MoreScreenStack = createStackNavigator({
  MoreScreen,
  ProfileScreen,
});

MoreScreenStack.navigationOptions = {
  tabBarLabel: 'More',
};

const MainBottomTabNavigation = createBottomTabNavigator({
  HomeScreenStack,
  MoreScreenStack,
});

MainBottomTabNavigation.navigationOptions = {
  header: null,
};

export default createStackNavigator({
  MainBottomTabNavigation,
  EditProfileScreen,
});
