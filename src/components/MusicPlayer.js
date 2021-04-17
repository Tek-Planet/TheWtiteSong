import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function MusicPlayer({navigation}) {
  return (
    <View style={{marginTop: 10, margin: 5, flex: 0.7}}>
      <Image
        resizeMode="contain"
        style={{maxWidth: 180, marginTop: -40}}
        source={require('../assets/imgs/lyrics/player.png')}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: -30,
        }}>
        <TouchableOpacity style={styles.iconBg}>
          <Ionicons name="play" size={25} color="#AC1C1C" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBg}>
          <Ionicons name="pause" size={25} color="#AC1C1C" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBg}>
          <Ionicons name="stop" size={25} color="#AC1C1C" />
        </TouchableOpacity>
      </View>

      <View
        style={{
          margin: 5,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#AC1C1C',
            margin: 5,
            fontWeight: 'bold',
            fontSize: 18,
          }}>
          Run Time :
        </Text>
        <View
          style={{
            backgroundColor: '#F8AE33',
            padding: 5,
            margin: 5,
            borderRadius: 10,
            width: 80,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#000',
              margin: 5,
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            05:00{'\n'}MM | SS
          </Text>
        </View>
      </View>
    </View>
  );
}

export default MusicPlayer;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  iconBg: {
    margin: 5,
    borderRadius: 10,
    width: 40,
    height: 40,
    padding: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 5,
    alignContent: 'center',
  },
});
