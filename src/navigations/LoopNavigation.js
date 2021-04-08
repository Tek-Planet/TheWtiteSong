import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoopScreen from '../screens/loop/LoopScreen';

const RootStack = createStackNavigator();
const Stack = createStackNavigator();

function LyricsNavigation() {
  return (
    <RootStack.Navigator headerMode={'none'} initialRouteName="Loop">
      {/* done */}
      <RootStack.Screen name="Loop" component={LoopScreen} />
    </RootStack.Navigator>
  );
}

export default LyricsNavigation;
