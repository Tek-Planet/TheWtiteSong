import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Message from '../../components/Message';
import Ticket from '../../components/Ticket';

const SupportScreen = ({navigation}) => {
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <Message header="Home > Support > Trouble Ticket View" />
      <View>
        <Text
          style={[
            styles.textBold,
            {
              textAlign: 'center',
              marginTop: 10,
              fontSize: 16,
            },
          ]}>
          All Tickets
        </Text>
        <Ticket navigation={navigation} isOpen="Open" />
        <Ticket navigation={navigation} isOpen="Open" />
        <Ticket navigation={navigation} isOpen="Closed" />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: 'grey',
            paddingTop: 15,
            paddingBottom: 15,
            borderRadius: 20,
          }}>
          <View>
            <Text
              style={[
                styles.textBold,
                {
                  color: '#fff',
                  marginBottom: 20,
                },
              ]}>
              Subject:
            </Text>
            <Text
              style={[
                styles.textBold,
                {
                  color: '#fff',
                },
              ]}>
              From:
            </Text>
          </View>
          <View>
            <Text
              style={[
                styles.textMedium,
                {
                  color: 'yellow',
                  marginBottom: 20,
                },
              ]}>
              Storage Space Low
            </Text>
            <Text
              style={[
                styles.textMedium,
                {
                  color: 'yellow',
                },
              ]}>
              System Administrator
            </Text>
          </View>
          <View>
            <Text
              style={[
                styles.textBold,
                {
                  color: '#fff',
                  marginBottom: 20,
                },
              ]}>
              Date:
            </Text>
            <Text
              style={[
                styles.textBold,
                {
                  color: '#fff',
                },
              ]}>
              Time:
            </Text>
          </View>
          <View>
            <Text
              style={[
                styles.textMedium,
                {
                  color: 'yellow',
                  marginBottom: 20,
                },
              ]}>
              15/01/2020
            </Text>
            <Text
              style={[
                styles.textMedium,
                {
                  color: 'yellow',
                },
              ]}>
              11:59 PM, EST
            </Text>
          </View>
        </View>
        <View style={{padding: 15}}>
          <Text style={[styles.textMedium, {marginBottom: 10, fontSize: 16}]}>
            Message:
          </Text>
          <Text style={[styles.textLight, {fontSize: 13}]}>
            Dear Subscriber, Your online storage limit has only 32MB Free.
            Kindly remove some songs repository or purchase additional storage
            space
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SupportScreen;

const styles = StyleSheet.create({
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
