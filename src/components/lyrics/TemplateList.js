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

export default function Message({navigation, template, keyWord}) {
  // to upate keyword for search

  const templateListitem = item => {
    return (
      <View style={[styles.row, {marginTop: 10}]}>
        <View style={styles.row}>
          <Text style={[styles.text]}>{item.template}</Text>
          <Text style={[styles.text]}>{item.name}</Text>
          <Text style={[styles.text]}>{item.update}</Text>
          <Text style={[styles.text]}>{item.author}</Text>
        </View>
        <View style={[styles.row, {flex: 0.5}]}>
          <TouchableOpacity style={styles.iconBg}>
            <Ionicons name="play" size={15} color="#AC1C1C" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('LyricsNav', {screen: 'MySong'});
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
        <View style={styles.row}>
          <Text style={[styles.headingText]}>Template</Text>
          <Text style={[styles.headingText]}>Name</Text>
          <Text style={[styles.headingText]}>Updated</Text>
          <Text style={[styles.headingText]}>Author</Text>
          <View style={{flex: 0.5}}></View>
        </View>
        {/* lsit all template */}
        <FlatList
          data={template}
          renderItem={({item}) => {
            if (keyWord.trim().length > 0 && item.name.includes(keyWord)) {
              return templateListitem(item);
            }
          }}
          keyExtractor={item => item.key}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  headingText: {
    color: '#3725AE',
    fontSize: 17,
    fontWeight: 'bold',
  },
  text: {
    color: '#000',
    fontSize: 15,
    marginStart: 6,
    textAlign: 'center',
    width: 60,
  },
  iconBg: {
    margin: 5,
    marginEnd: 20,
    borderRadius: 100,
    width: 20,
    height: 20,
    padding: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 5,
    alignContent: 'center',
  },
});
