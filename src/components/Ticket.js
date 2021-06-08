import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Ticket = ({navigation, isOpen}) => {
  return (
    <View style={{padding: 15}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('AddTroubleTicket')}
        style={isOpen === 'Open' ? styles.open : styles.closed}>
        <Text
          style={[
            styles.textBold,
            {
              textAlign: 'center',
              marginTop: 10,
              marginBottom: 10,
              color: '#fff',
            },
          ]}>
          {isOpen}
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 15,
          borderBottomWidth: 1,
          borderBottomColor: '#AC1C1C',
          paddingBottom: 10,
        }}>
        <Text
          style={[
            styles.textMedium,
            {
              color: '#000',
            },
          ]}>
          Can't Load My songs
        </Text>
        <View style={{alignItems: 'flex-end'}}>
          <Text
            style={[
              styles.textBold,
              {
                color: '#AC1C1C',
              },
            ]}>
            Date:
          </Text>
          <Text
            style={[
              styles.textBold,
              {
                color: '#AC1C1C',
              },
            ]}>
            Assigned To:
          </Text>
        </View>
        <View>
          <Text
            style={[
              styles.textMedium,
              {
                color: '#000',
              },
            ]}>
            02/02/2020
          </Text>
          <Text
            style={[
              styles.textMedium,
              {
                color: '#000',
              },
            ]}>
            Admin
          </Text>
        </View>
        <View style={{alignSelf: 'center'}}>
          <Ionicons name="chevron-forward" size={30} color={'#AC1C1C'} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  open: {
    backgroundColor: 'green',
    width: 90,
    padding: 5,
    borderRadius: 10,
  },
  closed: {
    backgroundColor: '#f00',
    width: 90,
    padding: 5,
    borderRadius: 10,
  },
  textBold: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 13,
  },
  textMedium: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 13,
  },
  textLight: {
    fontFamily: 'Montserrat-Light',
  },
});

export default Ticket;
