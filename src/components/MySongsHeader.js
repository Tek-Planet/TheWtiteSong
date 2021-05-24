import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export function MySongsHeader({songInfo}) {
  return (
    <View
      style={{
        backgroundColor: '#F4F4F4',
        margin: 5,
        marginTop: 10,
        borderRadius: 10,
        elevation: 5,
      }}>
      <View style={styles.row}>
        {/* row one */}
        <View style={styles.subRow}>
          <Text style={styles.titleText}>Song Title: </Text>
          <Text style={styles.text}>{songInfo.title}</Text>
        </View>

        {/* rew twwo */}
        <View style={styles.subRow}>
          <Text style={styles.titleText}>Main Writter:</Text>
          <Text style={styles.text}>{songInfo.author}</Text>
        </View>
      </View>

      {/* row two */}

      <View style={styles.row}>
        {/* row one */}
        <View style={styles.subRow}>
          <Text style={styles.titleText}>Genre: </Text>
          <Text style={styles.text}>{songInfo.genre}</Text>
        </View>

        {/* rew twwo */}
        <View style={styles.subRow}>
          <Text style={styles.titleText}>Co Writer(s):</Text>
          <Text style={styles.text}>{songInfo.contributor}</Text>
        </View>
      </View>
      {/* third row */}
      <View style={styles.row}>
        {/* row one */}
        <View style={styles.subRow}>
          <Text style={styles.titleText}>Date: </Text>
          <Text style={styles.text}>{songInfo.createdAt}</Text>
        </View>

        {/* rew twwo */}
        <View style={styles.subRow}>
          <Text style={styles.titleText}>Update:</Text>
          <Text style={styles.text}>3</Text>
        </View>
      </View>
    </View>
  );
}

export default MySongsHeader;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    margin: 5,
    justifyContent: 'space-evenly',
  },
  subRow: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  titleText: {
    textAlign: 'right',
    width: 90,
    fontWeight: 'bold',
    fontSize: 15,
    color: '#AE1F1F',
  },
  text: {
    flex: 0.8,
    fontWeight: 'bold',
    fontSize: 15,
  },
});
