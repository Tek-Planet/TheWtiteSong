import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Message({navigation}) {
  const [lyrics, setLyrics] = useState([
    {
      key: '001',
      title: 'Shape of you',
      date: '01-01-2020',
    },
    {
      key: '002',
      title: 'Apala Music',
      date: '01-01-2021',
    },
    {
      key: '003',
      title: 'Title 1',
      date: '01-02-2020',
    },
    {
      key: '004',
      title: 'Eni Duro',
      date: '01-02-2020',
    },
    {
      key: '005',
      title: 'The champions League Tune',
      date: '01-02-2020',
    },
  ]);

  const templateListitem = item => {
    return (
      <View key={item.key.toString()} style={styles.userInfoSection}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Ionicons name="football-outline" size={30} color="#AC1C1C" />
          <View style={{marginStart: 10}}>
            <View style={{flexDirection: 'row', width: 200}}>
              <Text style={styles.titleText}>Song Title:</Text>
              <Text style={styles.text}>{item.title}</Text>
            </View>
            <View style={{flexDirection: 'row', width: 200, marginTop: -10}}>
              <Text style={styles.titleText}>Date:</Text>
              <Text style={styles.text}>{item.date}</Text>
            </View>
          </View>

          <View style={[styles.row]}>
            <TouchableOpacity style={styles.iconBg}>
              <Ionicons name="play" size={20} color="#FFF" />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.iconBg, {backgroundColor: '#F8AE33'}]}>
              <Ionicons name="document-text-outline" size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.iconBg, {backgroundColor: '#301CAC'}]}>
              <Ionicons name="share-social-outline" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        backgroundColor: '#F4F4F4',
        margin: 5,
        borderRadius: 10,
        elevation: 5,
      }}>
      {lyrics.map(item => {
        return templateListitem(item);
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  iconBg: {
    margin: 3,
    borderRadius: 5,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AC1C1C',
  },
  userInfoSection: {
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 5,
    padding: 3,
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 10,
  },
  titleText: {
    margin: 5,
    fontWeight: 'bold',
    width: 70,
    textAlign: 'right',
  },
  text: {maxWidth: 120, margin: 5},
});
