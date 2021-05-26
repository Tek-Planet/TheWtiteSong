import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Message({songInfo}) {
  const [lyrics, setLyrics] = useState(songInfo.element);

  const templateListitem = (item, index) => {
    return (
      <View key={index}>
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
            <Text style={[styles.text]}>{item.body}</Text>
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
        {lyrics.map((item, index) => {
          return templateListitem(item, index);
        })}

        {/* <View style={{flexDirection: 'row'}}>
          <Ionicons
            name="lock-open"
            size={20}
            color={'#AC1C1C'}
            style={{padding: 5}}
          />
          <Text style={{fontWeight: 'bold', margin: 5}}>Bridge</Text>
        </View> */}
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
