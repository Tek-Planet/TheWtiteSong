import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Message({navigation, header, showMsg}) {
  return (
    <View>
      <View style={styles.headingBox}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={25} color={'#000'} />
        </TouchableOpacity>
        <View
          style={{flex: 0.9, justifyContent: 'center', alignContent: 'center'}}>
          <Text style={styles.headingText}>{header}</Text>
        </View>
      </View>
      {showMsg ? (
        <View style={styles.subhHeadingBg}>
          <Text
            style={{
              color: '#000',
              fontSize: 14,
              textAlign: 'center',
              paddingTop: 10,
              paddingBottom: 10,
            }}>
            Use this Tools to start Writing your next Hit Song{' '}
          </Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  headingBox: {
    padding: 10,
    backgroundColor: '#F8AE33',
    flexDirection: 'row',
  },
  headingText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subhHeadingBg: {
    elevation: 5,
    padding: 5,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
});
