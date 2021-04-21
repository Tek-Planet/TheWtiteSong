import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MetromonesScreen from '../screens/metromones/MetromonesScreen';
import InstrumentTunerScreen from '../screens/InstrumentTunerScreen';
const RootStack = createStackNavigator();
const Stack = createStackNavigator();

function MetromonesNavigation() {
  return (
    <RootStack.Navigator headerMode={'none'} initialRouteName="{Instrument">
      <RootStack.Screen name="Metromones" component={MetromonesScreen} />

      <RootStack.Screen name="{Instrument" component={InstrumentTunerScreen} />
    </RootStack.Navigator>
  );
}

export default MetromonesNavigation;
