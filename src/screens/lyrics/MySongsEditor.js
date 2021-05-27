import React, {Component} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import Message from '../../components/Message';
import SongVerses from '../../components/lyrics/SongVerses';
import MySongsHeader from '../../components/MySongsHeader';
import SaveButton from '../../components/SaveButton';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function MySongsEditor({navigation, route}) {
  const {songInfo} = route.params;
  return (
    <ScrollView>
      <SafeAreaView style={{flex: 1, justifyContent: 'space-between'}}>
        <View>
          <Message
            navigation={navigation}
            showBackBtn={true}
            header={'Lyrics Manager > My Songs Editor'}
          />
          <MySongsHeader songInfo={songInfo} />
          {/* <View style={{flexDirection: 'row'}}>
          <Ionicons
            name="lock-open"
            size={20}
            color={'#AC1C1C'}
            style={{padding: 5}}
          />
          <Text style={{fontWeight: 'bold', margin: 5}}>Introduction</Text>
        </View> */}
          <View style={{}}>
            {songInfo.element.length < 0 ? (
              <SongVerses songInfo={songInfo} />
            ) : (
              // <Text> {element.length}Found element</Text>
              <Text
                style={{
                  color: '#000',
                  fontSize: 18,
                  margin: 6,
                  textAlign: 'center',
                }}>
                {' '}
                No Element found{' '}
              </Text>
            )}
          </View>
        </View>

        <SaveButton
          onPress={() => {
            navigation.navigate('LyricsNav', {
              screen: 'Print Preview',
              params: {songInfo: songInfo},
            });
          }}
          buttonTitle={'Print'}
        />
      </SafeAreaView>
    </ScrollView>
  );
}

export default MySongsEditor;
