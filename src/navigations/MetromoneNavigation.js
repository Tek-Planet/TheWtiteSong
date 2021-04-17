import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MetromonesScreen from '../screens/metromones/MetromonesScreen';

const RootStack = createStackNavigator();
const Stack = createStackNavigator();

function MetromonesNavigation() {
  return (
    <RootStack.Navigator headerMode={'none'} initialRouteName="Metromones">
      <RootStack.Screen name="Metromones" component={MetromonesScreen} />
    </RootStack.Navigator>
  );
}

export default MetromonesNavigation;
