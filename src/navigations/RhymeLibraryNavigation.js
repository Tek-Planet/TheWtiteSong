import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RhymeLibraryScreen from '../screens/RhymeLibrary/RhymeLibraryScreen';
import SongRhymingToolScreen from '../screens/RhymeLibrary/SongRhymingToolScreen';

const Stack = createStackNavigator();

const RhymeLibraryNavigation = ({navigation}) => (
  <Stack.Navigator headerMode={'none'} initialRouteName="RhymeLibrary">
    <Stack.Screen name="SongRhymingTool" component={SongRhymingToolScreen} />
    <Stack.Screen name="RhymeLibrary" component={RhymeLibraryScreen} />
  </Stack.Navigator>
);

export default RhymeLibraryNavigation;
