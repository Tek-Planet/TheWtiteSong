import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Message({navigation}) {
  const [lyrics, setLyrics] = useState([
    {
      key: '001',
      title: 'Verse 1',
      verses: 'Lorem ipsum dolor sit amet,  ',
    },
    {
      key: '002',
      title: 'Chorus 1',
      verses: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      key: '003',
      title: 'Verse 1',
      verses:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.tor ac, ultrices ac nulla. Duis consectetur',
    },
  ]);

  const templateListitem = item => {
    return (
      <View key={item.key.toString()}>
        <View style={{flexDirection: 'row'}}>
          <Ionicons
            name="lock-open"
            size={20}
            color={'#AC1C1C'}
            style={{padding: 5}}
          />
          <Text style={{fontWeight: 'bold', margin: 5}}>{item.title}</Text>
        </View>

        <View style={[styles.row]}>
          <View style={{flex: 1}}>
            <Text style={[styles.text]}>{item.verses}</Text>
          </View>
          <View style={[styles.row]}>
            <TouchableOpacity style={styles.iconBg}>
              <Ionicons name="play" size={15} color="#FFF" />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.iconBg,
                {width: 25, backgroundColor: 'transparent'},
              ]}>
              <Ionicons name="mail" size={18} color="#F8AE33" />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.iconBg, {backgroundColor: '#fff'}]}>
              <Ionicons name="book" size={18} color="#301CAC" />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.iconBg, {backgroundColor: 'transparent'}]}>
              <Ionicons name="contract" size={18} color="#F8AE33" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
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

        <View style={{flexDirection: 'row'}}>
          <Ionicons
            name="lock-open"
            size={20}
            color={'#AC1C1C'}
            style={{padding: 5}}
          />
          <Text style={{fontWeight: 'bold', margin: 5}}>Bridge</Text>
        </View>
      </View>

      <View style={styles.saveBtnBg}>
        <Text style={styles.saveBtnText}>Save</Text>
      </View>
    </View>
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
    marginStart: 20,
    color: '#000',
    fontSize: 15,
    textAlign: 'justify',
  },
  iconBg: {
    margin: 3,
    borderRadius: 5,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AC1C1C',
  },
  saveBtnBg: {
    backgroundColor: '#AC1C1C',
    padding: 5,
    margin: 10,
    borderRadius: 50,
  },

  saveBtnText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
  },
});
