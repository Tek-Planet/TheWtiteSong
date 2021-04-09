import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoopScreen from '../screens/loop/LoopScreen';
import LoopLibraryScreen from '../screens/loop/LoopLibraryScreen';

const RootStack = createStackNavigator();
const Stack = createStackNavigator();

function LyricsNavigation() {
  return (
    <RootStack.Navigator headerMode={'none'} initialRouteName="LoopLib">
      {/* done */}
      <RootStack.Screen name="Loop" component={LoopScreen} />
      <RootStack.Screen name="LoopLib" component={LoopLibraryScreen} />
    </RootStack.Navigator>
  );
}

export default LyricsNavigation;
