import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LyricsScreen from '../screens/lyrics/LyricsScreen';
import MySongsEditor from '../screens/lyrics/MySongsEditor';
import SongTemplateEditor from '../screens/lyrics/SongTemplateEditor';
import AddSong from '../screens/lyrics/AddSong';
import FreeStyleLyrics from '../screens/lyrics/FreeStyleLyrics';
import ManageTemplate from '../screens/lyrics/ManageTemplate';
import PrintPage from '../screens/lyrics/PrintPage';
import Record from '../components/Record';

const RootStack = createStackNavigator();
const Stack = createStackNavigator();

function LyricsNavigation() {
  return (
    <RootStack.Navigator headerMode={'none'} initialRouteName="Lyrics">
      {/* done */}
      <RootStack.Screen name="Lyrics" component={LyricsScreen} />

      <RootStack.Screen name="MySong" component={MySongsEditor} />
      {/* done */}
      <RootStack.Screen name="SongTemplate" component={SongTemplateEditor} />
      {/* done */}
      <RootStack.Screen name="AddSong" component={AddSong} />
      {/* done */}
      <RootStack.Screen name="FreeStyleLyrics" component={FreeStyleLyrics} />
      {/* done */}
      <RootStack.Screen name="Manage Template" component={ManageTemplate} />
      {/* done */}
      <RootStack.Screen name="Print Preview" component={PrintPage} />

      <RootStack.Screen name="Record" component={Record} />
    </RootStack.Navigator>
  );
}

export default LyricsNavigation;
