import React, {Component} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import Message from '../../components/Message';
import SongVersesPosition from '../../components/lyrics/SongVersesPosition';
import SongTemplateHeader from '../../components/SongTemplateHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function MySongsEditor({navigation, route}) {
  const {songInfo} = route.params;
  return (
    <SafeAreaView>
      <ScrollView>
        <Message
          navigation={navigation}
          showBackBtn={true}
          header={'Lyrics Manager > Song Template Editor'}
        />
        <SongTemplateHeader songInfo={songInfo} />
        <View
          style={{marginTop: 10, borderBottomWidth: 3, borderColor: '#AC1C1C'}}
        />
        <View style={{}}>
          <SongVersesPosition />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default MySongsEditor;
