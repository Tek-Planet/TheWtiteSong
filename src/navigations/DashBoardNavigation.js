import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DashBoardScreen from '../screens/dashboard/DashBoardScreen';
import SongPlayer from '../screens/dashboard/SongPlayer';
import CompletedSong from '../screens/dashboard/CompletedSong';
import SongStatistics from '../screens/dashboard/SongStatistics';
import SongStatsDetails from '../screens/dashboard/SongStatsDetails';
import Alerts from '../screens/dashboard/Alerts';
import MessageDetails from '../screens/dashboard/MessageDetails';

const RootStack = createStackNavigator();
const Stack = createStackNavigator();

function LyricsNavigation() {
  return (
    <RootStack.Navigator headerMode={'none'} initialRouteName="Dashboard">
      {/* done */}
      <RootStack.Screen name="Dashboard" component={DashBoardScreen} />
      <RootStack.Screen name="SongPlayer" component={SongPlayer} />
      <RootStack.Screen name="CompletedSong" component={CompletedSong} />
      <RootStack.Screen name="SongStats" component={SongStatistics} />
      <RootStack.Screen name="SongDetails" component={SongStatsDetails} />
      <RootStack.Screen name="Alerts" component={Alerts} />
      <RootStack.Screen name="MsgDetails" component={MessageDetails} />
    </RootStack.Navigator>
  );
}

export default LyricsNavigation;
