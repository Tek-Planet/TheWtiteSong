import React, {Component} from 'react';
import {Text, View} from 'react-native';
import TrackPlayer, {formatTime} from 'react-native-track-player';

let redBar = [];
let greenBar = [];
let smallBar = [];
// Loop 5 times
for (var i = 1; i <= 3; i++) {
  smallBar.push(
    <View
      style={{height: 15, width: 2, backgroundColor: '#009200', marginEnd: 4}}
      key={i}
    />,
  );
}
for (var i = 1; i <= 7; i++) {
  redBar.push(
    <View
      style={{height: 30, width: 2, backgroundColor: '#FE0006', marginEnd: 20}}
      key={i}>
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          bottom: 2,
          paddingStart: 5,
        }}>
        {smallBar}
      </View>
    </View>,
  );

  greenBar.push(
    <View
      style={{height: 30, width: 2, backgroundColor: '#009200', marginEnd: 20}}
      key={i}
    />,
  );
}

class componentName extends TrackPlayer.ProgressComponent {
  render() {
    return (
      <View style={{backgroundColor: '#000', height: 150, borderRadius: 10}}>
        <View
          style={{
            flexDirection: 'row',
            marginStart: 20,
          }}>
          {greenBar}
        </View>

        <View
          style={{
            position: 'absolute',
            bottom: 0,
            flexDirection: 'row',
            marginStart: 20,
          }}>
          {redBar}
        </View>
        <Text
          style={{
            color: '#fff',
            position: 'absolute',
            right: 5,
            margin: 10,
          }}>
          Brown Skin Girl
        </Text>
      </View>
    );
  }
}

export default componentName;
