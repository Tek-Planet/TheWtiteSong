import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Message({header, showMsg}) {
  return (
    <View>
      <View style={styles.headingBox}>
        <Text style={styles.headingText}>{header}</Text>
      </View>
      {showMsg ? (
        <View style={styles.subhHeadingText}>
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
  },
  headingText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subhHeadingText: {
    elevation: 5,
    padding: 5,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
});
