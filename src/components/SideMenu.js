import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SideMenu = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AddSong');
        }}>
        <View style={styles.editMenuItem}>
          <View style={{backgroundColor: '#301CAC', margin: 5}}>
            <Ionicons name="musical-notes-outline" size={18} color={'#fff'} />
          </View>
          <Text style={styles.editMenuText}>Create / Insert Lyrics</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.editMenuItem}>
        <View style={{backgroundColor: '#301CAC', margin: 5}}>
          <Ionicons name="musical-notes-outline" size={18} color={'#fff'} />
        </View>
        <Text style={styles.editMenuText}>Bible Search</Text>
      </View>
      <View style={styles.editMenuItem}>
        <View style={{backgroundColor: '#301CAC', margin: 5}}>
          <Ionicons name="musical-notes-outline" size={18} color={'#fff'} />
        </View>
        <Text style={styles.editMenuText}>Harmonize Tools</Text>
      </View>
      <View style={styles.editMenuItem}>
        <View style={{backgroundColor: '#301CAC', margin: 5}}>
          <Ionicons name="musical-notes-outline" size={18} color={'#fff'} />
        </View>
        <Text style={styles.editMenuText}>Loop Manager</Text>
      </View>
      <View style={styles.editMenuItem}>
        <View style={{backgroundColor: '#301CAC', margin: 5}}>
          <Ionicons name="musical-notes-outline" size={18} color={'#fff'} />
        </View>
        <Text style={styles.editMenuText}>Rhyming Tools</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Print Preview');
        }}>
        <View style={styles.editMenuItem}>
          <View
            onPress={() => {
              navigation.navigate('FreeStyleLyrics');
            }}
            style={{backgroundColor: '#301CAC', margin: 5}}>
            <Ionicons name="musical-notes-outline" size={18} color={'#fff'} />
          </View>
          <Text style={styles.editMenuText}>Print</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SideMenu;

const styles = StyleSheet.create({
  editMenuItem: {
    flexDirection: 'row',
    backgroundColor: '#F8AE33',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 5,
    height: 30,
    width: 140,
  },
  editMenuText: {
    width: 100,
    color: '#000',
    fontFamily: 'Montserrat-Bold',
    margin: 4,
    fontSize: 9,
  },
});
