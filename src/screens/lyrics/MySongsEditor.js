import React, {Component} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import Message from '../../components/Message';
import SongVerses from '../../components/lyrics/SongVerses';
import MySongsHeader from '../../components/MySongsHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function MySongsEditor() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Message header={'Lyrics Manager > My Songs Editor'} />
        <MySongsHeader />
        <View style={{flexDirection: 'row'}}>
          <Ionicons
            name="lock-open"
            size={20}
            color={'#AC1C1C'}
            style={{padding: 5}}
          />
          <Text style={{fontWeight: 'bold', margin: 5}}>Introduction</Text>
        </View>
        <View style={{}}>
          <SongVerses />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default MySongsEditor;
