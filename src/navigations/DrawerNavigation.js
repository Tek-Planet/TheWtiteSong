import 'react-native-gesture-handler';
import * as React from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// screens
import {DrawerContent} from '../navigations/DrawerContent';
import BottomTab from '../navigations/BottomTab';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
      <Drawer.Screen navs = {navigation} name="Tab" component={BottomTab} />
    </Drawer.Navigator>
  );
};

export default DrawerScreen;
