import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from '../screens/home/HomeScreen';
import MoreScreen from '../screens/more/MoreScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import EditProfileScreen from '../screens/editprofile/EditProfileScreen';
import NewItemScreen from '../screens/newItem/NewItemScreen';

const HomeScreenStack = createStackNavigator({
  HomeScreen,
});

HomeScreenStack.navigationOptions = {
  tabBarLabel: 'Home',
};

const MoreScreenStack = createStackNavigator({
  MoreScreen,
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

const MainStack = createStackNavigator({
  MainBottomTabNavigation,
  EditProfileScreen,
  ProfileScreen,
});

const MainRootStack = createStackNavigator(
  {
    MainStack,
    NewItemScreen,
  },
  {
    headerMode: 'none',
    mode: 'modal',
  }
);

export default MainRootStack;
