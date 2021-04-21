import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Message from '../components/Message';
import Ticket from '../components/Ticket';

const SupportScreen = () => {
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <Message header="Home > Support > Trouble Ticket View" />
      <View>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 10,
            fontWeight: 'bold',
            fontSize: 18,
          }}>
          All Tickets
        </Text>
        <Ticket isOpen="Open" />
        <Ticket isOpen="Open" />
        <Ticket isOpen="Closed" />
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
              style={{
                fontSize: 16,
                color: '#fff',
                fontWeight: 'bold',
                marginBottom: 20,
              }}>
              Subject:
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: '#fff',
                fontWeight: 'bold',
              }}>
              From:
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 16,
                color: 'yellow',
                marginBottom: 20,
              }}>
              Storage Space Low
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: 'yellow',
              }}>
              System Administrator
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 16,
                color: '#fff',
                fontWeight: 'bold',
                marginBottom: 20,
              }}>
              Date:
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: '#fff',
                fontWeight: 'bold',
              }}>
              Time:
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 16,
                color: 'yellow',
                marginBottom: 20,
              }}>
              15/01/2020
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: 'yellow',
              }}>
              11:59 PM, EST
            </Text>
          </View>
        </View>
        <View style={{padding: 15}}>
          <Text style={{marginBottom: 10, fontSize: 16}}>Message:</Text>
          <Text style={{fontSize: 16}}>
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
