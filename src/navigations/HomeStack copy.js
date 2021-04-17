import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AddSong from '../screens/lyrics/AddSong';
import LyricsNavigation from '../navigations/LyricsNavigation';
import SongTempScreen from '../screens/songTemplate/SongTempScreen';

const Stack = createStackNavigator();

const HomeStack = ({navigation}) => (
  <Stack.Navigator
    initialRouteName="HomePage"
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
    <Stack.Screen name="HomePage" component={HomeScreen} />
    <Stack.Screen name="LyricsNav" component={LyricsNavigation} />
    <Stack.Screen name="SongTempScreen" component={SongTempScreen} />
  </Stack.Navigator>
);

export default HomeStack;
