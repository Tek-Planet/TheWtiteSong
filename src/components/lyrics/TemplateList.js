import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import dayjs from 'dayjs';
import {Item} from 'react-native-paper/lib/typescript/components/List/List';

export default function Message({navigation, template, keyWord}) {
  // to upate keyword for search

  const templateListitem = item => {
    return (
      <View
        style={[styles.row, {marginTop: 10}]}
        key={item.createdAt.toString()}>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.text, {width: 60, marginEnd: 3}]}>
            {item.genre}
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('LyricsNav', {
                screen: 'MySong',
                params: {songInfo: item},
              });
            }}>
            <Text
              style={[
                styles.text,
                {width: 70, textAlign: 'center', marginEnd: 3},
              ]}>
              {item.title}
            </Text>
          </TouchableOpacity>
          <Text
            style={[
              styles.text,
              {width: 65, textAlign: 'center', marginEnd: 5},
            ]}>
            {dayjs(item.createdAt).format('DD:MM:YYYY')}
          </Text>
          <Text style={[styles.text, {width: 60, textAlign: 'center'}]}>
            {item.author}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: -5,
            marginStart: -2,
          }}>
          <TouchableOpacity style={styles.iconBg}>
            <Ionicons name="play" size={15} color="#AC1C1C" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('LyricsNav', {
                screen: 'SongTemplate',
                params: {songInfo: item},
              });
            }}
            style={styles.iconBg}>
            <Ionicons name="pencil" size={15} color="#301CAC" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBg}>
            <Ionicons name="trash" size={15} color="#AC1C1C" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView>
        {keyWord.trim().length > 0 && (
          <View style={styles.row}>
            <Text style={[styles.headingText, {width: 60}]}>Genre</Text>
            <Text
              style={[styles.headingText, {width: 70, textAlign: 'center'}]}>
              Name
            </Text>
            <Text
              style={[
                styles.headingText,
                {width: 65, textAlign: 'center', marginEnd: 5},
              ]}>
              Updated
            </Text>
            <Text
              style={[styles.headingText, {width: 60, textAlign: 'center'}]}>
              Author
            </Text>
          </View>
        )}
        {/* lsit all template */}

        {template.map(item => {
          if (
            keyWord.trim().length > 0 &&
            item.title.toLowerCase().includes(keyWord.toLowerCase())
          ) {
            return templateListitem(item);
          }
        })}

        {/* <FlatList
          data={template}
          renderItem={({item}) => {
            if (keyWord.trim().length > 0 && item.name.includes(keyWord)) {
              return templateListitem(item);
            }
          }}
          keyExtractor={item => item.key}
        /> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginStart: 10,
  },
  headingText: {
    color: '#3725AE',
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
  },
  text: {
    color: '#000',
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
  },
  iconBg: {
    margin: 5,
    borderRadius: 100,
    width: 20,
    height: 20,

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 5,
    alignContent: 'center',
  },
});
