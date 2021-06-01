import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
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
for (var i = 1; i <= 15; i++) {
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

const componentName = props => {
  return (
    <View style={{backgroundColor: '#000', height: 150, borderRadius: 10}}>
      <View
        style={{
          flexDirection: 'row',
          marginStart: 20,
        }}>
        {greenBar}
      </View>
      {props.static ? (
        <Image
          style={{width: '100%', height: 100}}
          source={require('../assets/imgs/wave.gif')}
        />
      ) : (
        <Image
          style={{width: '100%', height: 100}}
          source={require('../assets/imgs/wavestatic.png')}
        />
      )}
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
        }}></Text>
    </View>
  );
};

export default componentName;
