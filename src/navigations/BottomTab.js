import React from 'react';
import {Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SetttingsScreen';

// const Tab = createMaterialBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabScreen = ({navigation}) => (
  <Tab.Navigator
    activeColor="#FFFFFF"
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
    <Tab.Screen name="Settings" component={SettingsScreen} />
    <Tab.Screen name="Profile" component={SettingsScreen} />
    <Tab.Screen name="Community" component={SettingsScreen} />
    <Tab.Screen name="Support" component={SettingsScreen} />
    <Tab.Screen name="Tutorial" component={SettingsScreen} />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStack = ({navigation}) => (
  <Stack.Navigator
    screenOptions={{
      headerTitle: 'SONG WRITING PALETTE',

      headerStyle: {
        backgroundColor: '#AE1F1F',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 18,
      },
    }}>
    <Stack.Screen
      name="MatchInfo"
      component={HomeScreen}
      options={{
        headerLeft: () => (
          <Ionicons
            name="ios-menu"
            color={'#fff'}
            style={{margin: 10}}
            size={25}
            color={'#FFF'}
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        ),
        headerRight: () => (
          <Ionicons
            name="ellipsis-vertical-outline"
            color={'#fff'}
            style={{margin: 10}}
            size={25}
            color={'#FFF'}
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        ),
      }}
    />
  </Stack.Navigator>
);
