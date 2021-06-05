import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Group = () => {
  return (
    <View>
      <TouchableOpacity style={{marginBottom: 20}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 0.1, marginRight: 10}}>
            <Image
              style={{width: 40, height: 40}}
              source={require('../assets/imgs/icons/contact-icon.png')}
            />
          </View>
          <View
            style={{
              flex: 0.83,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flex: 1}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.textBold, {color: '#8a2be2'}]}>
                  Prestige Song Writers Group
                </Text>
              </View>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Text style={[styles.textBold, {color: '#000'}]}>Title: </Text>
                <Text style={styles.textMedium}>Admin</Text>
              </View>
            </View>

            <View style={{flex: 1}}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={[
                    styles.textBold,
                    {
                      color: '#AC1C1C',
                      marginRight: 5,
                    },
                  ]}>
                  Created:
                </Text>
                <Text style={styles.textMedium}>02/01/2020</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={[styles.textBold, {color: '#000', marginRight: 5}]}>
                  Members:
                </Text>
                <Text style={styles.textMedium}>125</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 0.07,
              justifyContent: 'flex-end',
              marginLeft: 10,
            }}>
            <Ionicons name="chevron-forward" size={30} color={'#AC1C1C'} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Group;

const styles = StyleSheet.create({
  textBold: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 13,
  },
  textMedium: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 13,
  },
});
