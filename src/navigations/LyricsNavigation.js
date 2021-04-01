import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LyricsScreen from '../screens/lyrics/LyricsScreen';
import MySongsEditor from '../screens/lyrics/MySongsEditor';

const RootStack = createStackNavigator();
const Stack = createStackNavigator();

function LyricsNavigation() {
  return (
    <RootStack.Navigator headerMode={'none'} initialRouteName="MySong">
      <RootStack.Screen name="Lyrics" component={LyricsStack} />
      <RootStack.Screen name="MySong" component={MySongStack} />
    </RootStack.Navigator>
  );
}

export default LyricsNavigation;

const LyricsStack = ({navigation}) => (
  <Stack.Navigator
    screenOptions={{
      headerTitle: 'SONG WRITING PALETTE',

      headerStyle: {
        backgroundColor: '#AE1F1F',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 18,
      },
    }}>
    <Stack.Screen
      name="Lyrics"
      component={LyricsScreen}
      options={{
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
      }}
    />
  </Stack.Navigator>
);

const MySongStack = ({navigation}) => (
  <Stack.Navigator
    screenOptions={{
      headerTitle: 'SONG WRITING PALETTE',

      headerStyle: {
        backgroundColor: '#AE1F1F',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 18,
      },
    }}>
    <Stack.Screen
      name="Lyrics"
      component={MySongsEditor}
      options={{
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
      }}
    />
  </Stack.Navigator>
);
