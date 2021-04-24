import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from '../screens/auth/SignInScreen';

const RootStack = createStackNavigator();

function AuthNavigation() {
  return (
    <RootStack.Navigator headerMode={'none'} initialRouteName="SignIn">
      <RootStack.Screen name="SignIn" component={SignInScreen} />
    </RootStack.Navigator>
  );
}

export default AuthNavigation;
