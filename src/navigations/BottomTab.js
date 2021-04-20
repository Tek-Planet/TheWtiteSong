import React from 'react';
import {Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeStack from './HomeStack';
import SettingsStack from './SettingsStack';
import ProfileStack from './ProfileStack';
import CommunityStack from '../navigations/CommunityStack';
import TestScreen from '../screens/TestScreen';

// const Tab = createMaterialBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();
// const Stack = createStackNavigator();

const MainTabScreen = ({navigation}) => (
  <Tab.Navigator
    activeColor="#F8AE33"
    inactiveColor="#A9A9A9"
    initialRouteName="Home"
    barStyle={{backgroundColor: '#A30000', height: 60}}
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color}) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused ? 'ios-home' : 'ios-home-outline';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'settings' : 'settings-outline';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'person' : 'person-outline';
        } else if (route.name === 'Community') {
          iconName = focused ? 'people' : 'people-outline';
        } else if (route.name === 'Support') {
          iconName = focused ? 'call' : 'call-outline';
        } else if (route.name === 'Tutorial') {
          iconName = focused ? 'book' : 'book-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={26} color={color} />;
      },
    })}>
    <Tab.Screen name="Home" component={HomeStack} />
    <Tab.Screen name="Settings" component={SettingsStack} />
    <Tab.Screen name="Profile" component={ProfileStack} />
    <Tab.Screen name="Community" component={CommunityStack} />
    <Tab.Screen name="Support" component={TestScreen} />
    <Tab.Screen name="Tutorial" component={TestScreen} />
  </Tab.Navigator>
);

export default MainTabScreen;
