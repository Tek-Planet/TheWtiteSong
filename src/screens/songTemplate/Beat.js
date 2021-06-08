import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Beat = ({title, info}) => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text
            style={{
              fontFamily: 'Montserrat-Medium',
              fontSize: 13,
              textAlign: 'center',
            }}>
            {info}
          </Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconBg}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../../assets/imgs/song_template/play.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBg}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../../assets/imgs/song_template/edit.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBg}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../../assets/imgs/song_template/export.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBg}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../../assets/imgs/song_template/delete.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    color: '#AE1F1F',
    fontSize: 13,
  },
  iconBg: {
    elevation: 5,
    padding: 5,
    margin: 3,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  titleContainer: {
    marginRight: 15,
  },
  infoContainer: {
    flexShrink: 1,
  },
});

export default Beat;
