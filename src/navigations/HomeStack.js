import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LyricsNavigation from '../navigations/LyricsNavigation';
import LoopNavigation from '../navigations/LoopNavigation';
import MetromoneNavigation from '../navigations/MetromoneNavigation';
import HarmonizingNavigation from '../navigations/HarmonizingNavigation';
import DashBoardNavigation from '../navigations/DashBoardNavigation';
import BibleSearchScreen from '../screens/BibleSearchScreen';
import RhymeLibraryNavigation from '../navigations/RhymeLibraryNavigation';

import SongTempScreen from '../screens/songTemplate/SongTempScreen';

const Stack = createStackNavigator();

const HomeStack = ({navigation}) => (
  <Stack.Navigator
    initialRouteName="DashNav"
    screenOptions={{
      headerTitle: 'SONG WRITING PALETTE',

      headerStyle: {
        backgroundColor: '#AE1F1F',
        height: 70,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
      },

      headerLeft: () => (
        <Ionicons
          name="ios-menu"
          color={'#fff'}
          style={{margin: 10}}
          size={25}
          color={'#FFF'}
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),

      headerRight: () => (
        <Ionicons
          name="ellipsis-vertical-outline"
          color={'#fff'}
          style={{margin: 10}}
          size={25}
          color={'#FFF'}
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
    }}>
    <Stack.Screen name="DashNav" component={DashBoardNavigation} />
    <Stack.Screen name="HomePage" component={HomeScreen} />
    <Stack.Screen name="LyricsNav" component={LyricsNavigation} />
    <Stack.Screen name="SongTempScreen" component={SongTempScreen} />
    <Stack.Screen name="LoopNav" component={LoopNavigation} />
    <Stack.Screen name="MetroNav" component={MetromoneNavigation} />
    <Stack.Screen name="HarmoNav" component={HarmonizingNavigation} />
    <Stack.Screen name="BibleSearch" component={BibleSearchScreen} />
    <Stack.Screen name="RhymeLibraryNav" component={RhymeLibraryNavigation} />
  </Stack.Navigator>
);

export default HomeStack;
