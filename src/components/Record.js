import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Message from '../components/Message';
import Button from '../components/SaveButton';
import MyPlayerBar from '../components/MyPlayerBar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

const audioRecorderPlayer = new AudioRecorderPlayer();

export default function Record({navigation, route}) {
  const [recordSecs, setRecordSecs] = useState(0);
  const [recordTime, setRecordTime] = useState(0);
  const [currentPositionSec, setCurrentPositionSec] = useState(0);
  const [currentDurationSec, setCurrentDurationSec] = useState(0);
  const [playTime, setPlayTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const onStartRecord = async () => {
    const result = await audioRecorderPlayer.startRecorder();
    audioRecorderPlayer.addRecordBackListener(e => {
      setRecordSecs(e.currentPosition);
      setRecordTime(audioRecorderPlayer.mmssss(
        Math.floor(e.currentPosition)
        )
        );
      return;
    });
    console.log(result);
  };

  const onStopRecord = async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    setRecordSecs(0);
    console.log('Stopped');
  };

  const onStartPlay = async () => {
    console.log('onStartPlay');
    const msg = await audioRecorderPlayer.startPlayer();
    console.log(msg);
    audioRecorderPlayer.addPlayBackListener(e => {
      setCurrentPositionSec(e.currentPosition);
      setCurrentDurationSec(e.duration);
      setPlayTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));
      setDuration(audioRecorderPlayer.mmssss(Math.floor(e.duration)));
      return;
    });
  };

  const onPausePlay = async () => {
    await audioRecorderPlayer.pausePlayer();
  };

  const onStopPlay = async () => {
    console.log('onStopPlay');
    audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();
  };

  const {songInfo, element} = route.params;
  return (
    <View style={{justifyContent: 'space-between', flex: 1}}>
      <View>
        <Message
          navigation={navigation}
          showBackBtn={true}
          header={'Lyrics Manager > Record'}
        />
        <View>
          <View style={styles.userInfoSection}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.headerText, {fontWeight: 'bold'}]}>
                  Song Title:
                </Text>
                <Text style={styles.headerText}>{songInfo.title}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.headerText, {fontWeight: 'bold'}]}>
                  Genre:
                </Text>
                <Text style={styles.headerText}>{songInfo.genre}</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
              }}></View>
            <Text style={[styles.headerText, {fontWeight: 'bold'}]}>
              {element.title}
            </Text>
            <Text style={[styles.headerText, {textAlign: 'justify'}]}>
              {element.body}
            </Text>
          </View>
        </View>
        {/* recording section */}
      </View>
      <View>
        {/* <Text>Record Seconds {recordSecs}</Text>
        <Text>Record Time {recordTime}</Text>
        <Text>current position seconds {currentPositionSec}</Text>
        <Text>current duration seconds {currentDurationSec}</Text>
        <Text>Play time {playTime}</Text>
        <Text>duration {duration}</Text> */}
        <MyPlayerBar />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <TouchableOpacity
            onPress={() => onStartRecord()}
            style={styles.iconBg}>
            <Ionicons name="mic" size={25} color="#AC1C1C" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onStopRecord()}
            style={styles.iconBg}>
            <Ionicons name="stop" size={25} color="#AC1C1C" />
          </TouchableOpacity>
        </View>
        {/* playback */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <TouchableOpacity onPress={() => onStartPlay()} style={styles.iconBg}>
            <Ionicons name="play" size={25} color="#AC1C1C" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onPausePlay()} style={styles.iconBg}>
            <Ionicons name="pause" size={25} color="#AC1C1C" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onStopPlay()} style={styles.iconBg}>
            <Ionicons name="stop" size={25} color="#AC1C1C" />
          </TouchableOpacity>
        </View>

        <Button buttonTitle={'Save'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  headerText: {
    color: '#000',
    margin: 5,
    fontSize: 14,
  },

  heading: {
    fontSize: 16,
    color: '#AC1C1C',
    marginTop: 10,
    fontWeight: 'bold',
  },

  userInfoSection: {
    margin: 5,
    paddingStart: 10,
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 10,
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
