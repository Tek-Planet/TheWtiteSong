import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import DrawerNavigation from '../navigations/DrawerNavigation';
import LyricsNavigation from '../navigations/LyricsNavigation';

const RootStack = createStackNavigator();
const Stack = createStackNavigator();

function OtherStackScreen() {
  return (
    <RootStack.Navigator headerMode={'none'} initialRouteName="Drawer">
      <RootStack.Screen name="Drawer" component={DrawerNavigation} />
      <RootStack.Screen name="LyricsNav" component={LyricsNavigation} />
    </RootStack.Navigator>
  );
}

export default OtherStackScreen;
