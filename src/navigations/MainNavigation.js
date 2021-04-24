import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import DrawerNavigation from '../navigations/DrawerNavigation';
import AuthNavigation from '../navigations/AuthNavigation';

const RootStack = createStackNavigator();
const Stack = createStackNavigator();

function OtherStackScreen() {
  return (
    <RootStack.Navigator headerMode={'none'} initialRouteName="Auth">
      <RootStack.Screen name="Drawer" component={DrawerNavigation} />
      <RootStack.Screen name="Auth" component={AuthNavigation} />
    </RootStack.Navigator>
  );
}

export default OtherStackScreen;
