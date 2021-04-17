import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HarmonizeTools from '../screens/harmonize/HarmonizeTools';
import FormTools from '../screens/harmonize/FormTools';
import PressansSingScreen from '../screens/harmonize/PressansSingScreen';

const RootStack = createStackNavigator();
const Stack = createStackNavigator();

function HarmonizingNavigation() {
  return (
    <RootStack.Navigator headerMode={'none'} initialRouteName="Formtool">
      <RootStack.Screen name="Harmonize" component={HarmonizeTools} />
      <RootStack.Screen name="Formtool" component={FormTools} />
      <RootStack.Screen name="PressSing" component={PressansSingScreen} />
    </RootStack.Navigator>
  );
}

export default HarmonizingNavigation;
