import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../../components/SaveButton';
import {AuthContext} from '../../context/AuthProvider';

export default function Message({songInfo, navigation}) {
  const {setMySongs} = useContext(AuthContext);

  const [change, setChange] = useState(null);
  var [lyrics, setLyrics] = useState(songInfo.element);

  const saveSongElement = async () => {
    const newSong = {
      title: songInfo.title,
      genre: songInfo.genre,
      author: songInfo.author,
      contributor: songInfo.contributor,
      createdAt: songInfo.createdAt,
      element: lyrics,
    };

    const jsonValue = await AsyncStorage.getItem('songs');
    if (jsonValue !== null) {
      // parse to json if its exist
      const songs = JSON.parse(jsonValue);
      // add new song
      songs[0] = newSong;
      //  store on async stora
      AsyncStorage.setItem('songs', JSON.stringify(songs));
      setMySongs(songs);
      console.log('song element updated', songs);
    }
  };

  const swapUp = pos => {
    if (pos > 0) {
      let abovePosition = pos - 1;
      var currentItem = lyrics[pos];
      var aboveItem = lyrics[abovePosition];
      setChange(currentItem.title);
      lyrics[abovePosition] = currentItem;
      lyrics[pos] = aboveItem;
      console.log(lyrics);
    }
  };

  const swapDown = pos => {
    if (pos < lyrics.length - 1) {
      let belowPosition = pos + 1;
      var currentItem = lyrics[pos];
      var belowItem = lyrics[belowPosition];
      setChange(currentItem.title);
      lyrics[belowPosition] = currentItem;
      lyrics[pos] = belowItem;

      console.log(lyrics);
    }
  };

  const templateListitem = (item, index) => {
    return (
      <View
        style={{flexDirection: 'row', justifyContent: 'space-evenly'}}
        key={item.body}>
        {/* first colum */}
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <Ionicons name="lock-open" size={20} color={'#AC1C1C'} />
          <Text
            style={{
              fontFamily: 'Montserrat-Medium',
              fontSize: 12,
              margin: 5,
              width: 90,
            }}>
            {item.title}
          </Text>
        </View>

        {/* second colum */}
        <View style={{flexDirection: 'row'}}>
          <Ionicons
            onPress={() => {
              navigation.navigate('LyricsNav', {
                screen: 'Record',
                params: {songInfo: songInfo, element: item},
              });
            }}
            name="add-outline"
            size={23}
            color={'#301CAC'}
          />
          <Ionicons name="remove-outline" size={23} color={'#F8AE33'} />
        </View>
        {/* third colum */}
        <View style={{flexDirection: 'row'}}>
          <Ionicons
            name="arrow-down-outline"
            size={23}
            color={'#AC1C1C'}
            onPress={() => swapDown(index)}
          />
          <Ionicons
            name="arrow-up-outline"
            size={23}
            color={'#F8AE33'}
            onPress={() => swapUp(index)}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1, justifyContent: 'space-between'}}>
      {/* <View style={{flexDirection: 'row', marginTop: 10, marginStart: 40}}>
        <Ionicons name="lock-open" size={20} color={'#AC1C1C'} />
        <Text style={{fontWeight: 'bold', margin: 5, width: 90}}>
          Introduction
        </Text>

        <Text
          style={{
            color: '#AC1C1C',
            textAlign: 'right',
            margin: 5,
            width: 180,
            marginTop: -3,
          }}>
          Re-Order Position
        </Text>
      </View> */}

      <ScrollView
        style={{
          backgroundColor: '#F4F4F4',
          margin: 5,
          borderRadius: 10,
          elevation: 5,
          flex: 1,
          minHeight: 310,
        }}>
        {lyrics.map((item, index) => {
          return templateListitem(item, index);
        })}
      </ScrollView>

      <Button
        onPress={() => {
          saveSongElement();
        }}
        buttonTitle={'Save'}
      />
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
  saveBtnText: {
    backgroundColor: '#AC1C1C',
    margin: 10,
    borderRadius: 50,
  },

  saveBtnBg: {
    textAlign: 'center',
    color: '#fff',
    margin: 5,
    padding: 5,
    fontSize: 20,
  },
});
