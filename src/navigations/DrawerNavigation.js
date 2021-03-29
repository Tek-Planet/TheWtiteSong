import 'react-native-gesture-handler';
import * as React from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// screens
import {DrawerContent} from '../navigations/DrawerContent';
import HomeScreen from '../screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useWindowDimensions } from 'react-native';

//init stack
const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const DrawerScreen = ({navigation}) => {
  const dimensions = useWindowDimensions();
  return( <Drawer.Navigator 
    drawerType={dimensions.width >= 608 ? 'permanent' : 'front'}
  drawerContent={(props) => <DrawerContent {...props} />}>
    <Drawer.Screen name="Main" component={HomeStack} />
  </Drawer.Navigator>)
}

export default DrawerScreen;

const HomeStack = ({navigation}) => (
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
