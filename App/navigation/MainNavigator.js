import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from '../screens/home/HomeScreen';
import MoreScreen from '../screens/more/MoreScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import EditProfileScreen from '../screens/editprofile/EditProfileScreen';
import NewItemScreen from '../screens/newItem/NewItemScreen';
import ItemDetailsScreen from '../screens/itemDetails/ItemDetailsScreen';
import BottomBarIcon from '../utils/BottomBarIcon';
import Icons from '../constants/Icons';
import EditItemScreen from '../screens/editItem/EditItemScreen';
import ExploreScreen from '../screens/explore/ExploreScreen';
import NewStoreScreen from '../screens/newStore/NewStoreScreen';
import ExploreDetailsScreen from '../screens/exploreDetails/ExploreDetailsScreen';

const HomeStack = createStackNavigator({
  HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <BottomBarIcon icon={focused ? Icons.focusedHome : Icons.unfocusedHome}/>
  ),
};

const MoreStack = createStackNavigator({
  MoreScreen,
});

MoreStack.navigationOptions = {
  tabBarLabel: 'More',
  tabBarIcon: ({ focused }) => (
    <BottomBarIcon icon={focused ? Icons.focusedMore : Icons.unFocusedMore}/>
  ),
};

const ExploreStack = createStackNavigator({
  ExploreScreen,
});

ExploreStack.navigationOptions = {
  tabBarLabel: 'Explore',
  tabBarIcon: ({ focused }) => (
    <BottomBarIcon icon={focused ? Icons.focusedExplore : Icons.unfocusedExplore}/>
  ),
};

const MainBottomTabNavigation = createBottomTabNavigator({
  HomeStack,
  ExploreStack,
  MoreStack,
});

MainBottomTabNavigation.navigationOptions = {
  header: null,
};

const MainStack = createStackNavigator({
  MainBottomTabNavigation,
  EditProfileScreen,
  ProfileScreen,
  ItemDetailsScreen,
  EditItemScreen,
  ExploreDetailsScreen,
});

const MainRootStack = createStackNavigator(
  {
    MainStack,
    NewItemScreen,
    NewStoreScreen,
  },
  {
    headerMode: 'none',
    mode: 'modal',
  },
);

export default MainRootStack;
