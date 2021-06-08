import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RecordButton from './RecordButton';
import TrackPlayer from 'react-native-track-player';
import MyPlayerBar from './MyPlayerBar';

export function MusicPlayer({navigation}) {
  const start = async () => {
    // Set up the player
    await TrackPlayer.setupPlayer();
    TrackPlayer.registerPlaybackService(() => require('../components/service'));
    // Add a track to the queue
    await TrackPlayer.add({
      id: 'trackId',
      url: require('../assets/music/brownskin.mp3'),
      title: 'Track Title',
      artist: 'Track Artist',
      artwork: require('../assets/music/track.png'),
      duration: 302,
    });

    // Start playing it

    const position = await TrackPlayer.getPosition();
    const duration = await TrackPlayer.getDuration();
    console.log(`${duration - position} seconds left.`);

    await TrackPlayer.play();
  };

  return (
    <View style={{marginTop: 20, marginStart: 5, flex: 0.7}}>
      <MyPlayerBar />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 10,
        }}>
        <TouchableOpacity onPress={() => start()} style={styles.iconBg}>
          <Ionicons name="play" size={25} color="#AC1C1C" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => TrackPlayer.pause()}
          style={styles.iconBg}>
          <Ionicons name="pause" size={25} color="#AC1C1C" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => TrackPlayer.stop()}
          style={styles.iconBg}>
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
        <View>
          <Text
            style={{
              color: '#AC1C1C',
              margin: 5,
              fontFamily: 'Montserrat-Bold',
              fontSize: 16,
            }}>
            Run Time :
          </Text>
          <View
            style={{
              backgroundColor: '#F8AE33',
              margin: 5,
              borderRadius: 10,
              width: 80,
              paddingTop: 5,
              paddingBottom: 5,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: '#000',
                fontSize: 14,
                fontFamily: 'Montserrat-Medium',
              }}>
              05:00{'\n'}MM | SS
            </Text>
          </View>
        </View>
        <RecordButton />
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
