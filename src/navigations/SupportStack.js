import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';

import SupportScreen from '../screens/support/SupportScreen';
import AddTroubleTicketScreen from '../screens/support/AddTroubleTicketScreen';

const Stack = createStackNavigator();

const SupportStack = ({navigation}) => (
  <Stack.Navigator
    initialRouteName="ProfilePage"
    screenOptions={{
      headerTitle: 'SUPPORT',

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
    <Stack.Screen name="SupportPage" component={SupportScreen} />
    <Stack.Screen name="AddTroubleTicket" component={AddTroubleTicketScreen} />
  </Stack.Navigator>
);

export default SupportStack;
