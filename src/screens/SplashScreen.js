import React from 'react';
import {View, Text, Image} from 'react-native';

export default function Splash() {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        style={{width: 300, height: 300, borderRadius: 100, margin: 5}}
        source={require('../assets/imgs/logo.png')}
      />
    </View>
  );
}
