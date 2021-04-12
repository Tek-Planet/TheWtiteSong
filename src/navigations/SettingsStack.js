import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';

import SettingsScreen from '../screens/SetttingsScreen';

const Stack = createStackNavigator();

const SettingsStack = ({navigation}) => (
  <Stack.Navigator
    initialRouteName="SettingsPage"
    screenOptions={{
      headerTitle: 'APP SETTINGS',

      headerStyle: {
        backgroundColor: '#AE1F1F',
        height: 70,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
      },

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
    }}>
    <Stack.Screen name="SettingsPage" component={SettingsScreen} />
  </Stack.Navigator>
);

export default SettingsStack;
