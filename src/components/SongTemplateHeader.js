import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export function SongTemplateHeader() {
  return (
    <View
      style={{
        backgroundColor: '#F4F4F4',
        margin: 5,
        borderRadius: 10,
        elevation: 5,
      }}>
      <View style={styles.row}>
        {/* row one */}
        <View style={styles.subRow}>
          <Text style={styles.titleText}>Title: </Text>
          <Text style={styles.text}>Template 1</Text>
        </View>

        {/* rew twwo */}
        <View style={styles.subRow}>
          <Text style={styles.titleText}>Updated:</Text>
          <Text style={styles.text}>01/04/2021</Text>
        </View>
      </View>

     
      {/* third row */}
      <View style={styles.row}>
        {/* row one */}
        <View style={[styles.subRow,{justifyContent: 'space-between',}]}>
         
        </View>

        {/* rew twwo */}
        <View style={[styles.subRow,{justifyContent: 'space-between',}]}>
          <Text style={[styles.titleText,{textAlign:'right'}]}>Time: </Text>
          <Text style={styles.text}>08:00 Am</Text>
        </View>
        
        
      </View>
    </View>
  );
}

export default SongTemplateHeader;

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
    maxWidth: 80,
    fontWeight: 'bold',
    fontSize: 15,
    color: '#000',
  },
  text: {
    flex: 0.8,
    fontSize: 15,
  },
});
