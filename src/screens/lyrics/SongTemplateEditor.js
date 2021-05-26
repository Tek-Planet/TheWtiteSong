import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';
import Message from '../../components/Message';
import SongVersesPosition from '../../components/lyrics/SongVersesPosition';
import SongTemplateHeader from '../../components/MySongsHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '../../components/SaveButton';
// import dayjs from 'daysjs'

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

        <Button
          onPress={() => {
            navigation.navigate('LyricsNav', {screen: 'FreeStyleLyrics'});
          }}
          buttonTitle={'Add song element'}
        />

        <View
          style={{marginTop: 10, borderBottomWidth: 3, borderColor: '#AC1C1C'}}
        />
        <View style={{}}>
          {songInfo.element.length > 0 ? (
            <SongVersesPosition songInfo={songInfo} />
          ) : (
            // <Text> {element.length}Found element</Text>
            <Text> No Element found </Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default MySongsEditor;
