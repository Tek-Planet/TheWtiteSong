import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Message from '../../components/Message';
import Group from '../../components/Group';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MyGroupsScreen = ({navigation}) => {
  return (
    <ScrollView>
      <Message header="Home > Community > My Groups" showBackBtn />
      <View style={{padding: 20}}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#fff',
            padding: 10,
            elevation: 5,
            borderRadius: 5,
            marginBottom: 20,
            flex: 1,
          }}>
          <TouchableOpacity
            style={{
              paddingTop: 5,
              paddingBottom: 5,
              flexDirection: 'row',
              alignItems: 'center',
            }}
            onPress={() => navigation.navigate('CreateGroup')}>
            <Ionicons name="add-circle-outline" size={30} color={'#000'} />
            <Text
              style={{
                marginLeft: 10,
                color: '#AC1C1C',
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              Add New
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            padding: 10,
            elevation: 5,
            borderRadius: 5,
          }}>
          <Group />
          <Group />
          <Group />
          <Group />
        </View>
      </View>
    </ScrollView>
  );
};

export default MyGroupsScreen;
