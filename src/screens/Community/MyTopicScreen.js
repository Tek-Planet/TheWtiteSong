import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Message from '../../components/Message';
import Feed from '../../components/Feed';

const MyTopicScreen = ({navigation}) => {
  return (
    <ScrollView>
      <Message
        navigation={navigation}
        header="Home > MyTopics > Message(s)"
        showBackBtn
      />
      <View style={{padding: 20}}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#fff',
            padding: 10,
            elevation: 5,
            borderRadius: 5,
            justifyContent: 'space-around',
            marginBottom: 20,
          }}>
          <TouchableOpacity
            style={{
              paddingTop: 5,
              paddingBottom: 5,
            }}>
            <Text style={{color: '#AC1C1C', fontWeight: 'bold'}}>
              Most Recent
            </Text>
          </TouchableOpacity>
          <View
            style={{
              borderRightWidth: 2,
            }}
          />
          <TouchableOpacity
            style={{
              paddingTop: 5,
              paddingBottom: 5,
            }}>
            <Text>Last Week</Text>
          </TouchableOpacity>
          <View
            style={{
              borderRightWidth: 2,
            }}
          />
          <TouchableOpacity
            style={{
              paddingTop: 5,
              paddingBottom: 5,
            }}>
            <Text>Last Month</Text>
          </TouchableOpacity>
          <View
            style={{
              borderRightWidth: 2,
            }}
          />
          <TouchableOpacity
            style={{
              paddingTop: 5,
              paddingBottom: 5,
            }}>
            <Text>Last Year</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            padding: 10,
            elevation: 5,
            borderRadius: 5,
          }}>
          <Feed />
          <Feed />
          <Feed />
        </View>
      </View>
    </ScrollView>
  );
};

export default MyTopicScreen;
