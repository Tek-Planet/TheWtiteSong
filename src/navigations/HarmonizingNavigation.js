import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HarmonizeTools from '../screens/harmonize/HarmonizeTools';

const RootStack = createStackNavigator();
const Stack = createStackNavigator();

function HarmonizingNavigation() {
  return (
    <RootStack.Navigator headerMode={'none'} initialRouteName="Harmonize">
      <RootStack.Screen name="Harmonize" component={HarmonizeTools} />
    </RootStack.Navigator>
  );
}

export default HarmonizingNavigation;
