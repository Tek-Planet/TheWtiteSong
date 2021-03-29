import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import DrawerNavigation from '../navigations/DrawerNavigation';


const RootStack = createStackNavigator();
const Stack = createStackNavigator();
 
function OtherStackScreen() {
  return (
    <RootStack.Navigator headerMode={'none'} initialRouteName="Drawer">
      <RootStack.Screen name="Drawer" component={DrawerNavigation} />
      {/* <RootStack.Screen name="Home" component={HomeStack} /> */}
      {/* <RootStack.Screen name="MatchDetails" component={MatchDetailsStack} />
      <RootStack.Screen name="NewsDetails" component={NewsDetailsStack} />
      <RootStack.Screen name="SeriesDetails" component={SeriesDetailsStack} />
      <RootStack.Screen name="SignIn" component={SignInScreen} /> */}
    </RootStack.Navigator>
  );
}

export default OtherStackScreen;

const HomeStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitle: 'SONG WRITING PALETTE',

      headerStyle: {
        backgroundColor: '#AE1F1F',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize:18,
        
      },
    }}>
    <Stack.Screen name="MatchInfo" component={HomeScreen}
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
        }} />
  </Stack.Navigator>
);

const NewsDetailsStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitle: 'CricketTone',

      headerStyle: {
        backgroundColor: '#23395d',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Stack.Screen name="NewsInfo" component={NewsDetailsScreen} />
  </Stack.Navigator>
);

const SeriesDetailsStack = () => (
  <Stack.Navigator
    screenOptions={{
      // headerTitle: 'Info',

      headerStyle: {
        backgroundColor: '#23395d',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Stack.Screen name="SeriesInfo" component={SeriesDetailsScreen} />
  </Stack.Navigator>
);
