import 'react-native-gesture-handler';
import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// screens
import {DrawerContent} from '../navigations/DrawerContent';
import BottomTab from '../navigations/BottomTab';
import InstrumentTunerScreen from '../screens/InstrumentTunerScreen';

import {useWindowDimensions} from 'react-native';

//init stack
const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const DrawerScreen = ({navigation}) => {
  const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator
      drawerType={dimensions.width >= 608 ? 'permanent' : 'front'}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen navs={navigation} name="Tab" component={BottomTab} />
      <Drawer.Screen
        navs={navigation}
        name="Instrument"
        component={InstrumentTunerScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerScreen;
