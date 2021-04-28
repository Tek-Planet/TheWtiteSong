import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Message from '../../components/Message';
import Rhyme from './Rhyme';

const RhymeLibraryScreen = ({navigation}) => {
  return (
    <ScrollView>
      <Message header="Rhyme Library" showBackBtn navigation={navigation} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 20,
          marginBottom: 20,
        }}>
        <TextInput
          placeholder="Search Rhymes & Catch Phrases"
          placeholderTextColor="#AC1C1C"
          style={{
            borderWidth: 1,
            flex: 0.9,
            borderColor: '#AC1C1C',
            borderRadius: 30,
            height: 40,
            textAlign: 'center',
            color: '#AC1C1C',
          }}
        />
        <TouchableOpacity>
          <Ionicons name="search-circle-outline" size={40} color="#AC1C1C" />
        </TouchableOpacity>
      </View>
      <Rhyme title="Lorem ipsum dolor sit amet,elit,tempor." />
      <Rhyme title="Lorem ipsum dolor sit amet,elit,tempor." />
      <Rhyme title="Lorem ipsum dolor sit amet,elit,tempor." />
      <Rhyme title="Lorem ipsum dolor sit amet,elit,tempor." />
      <Rhyme title="Lorem ipsum dolor sit amet,elit,tempor." />
      <Rhyme title="Lorem ipsum dolor sit amet,elit,tempor." />
      <Rhyme title="Lorem ipsum dolor sit amet,elit,tempor." />
      <Rhyme title="Lorem ipsum dolor sit amet,elit,tempor." />
      <Rhyme title="Lorem ipsum dolor sit amet,elit,tempor." />
      <View
        style={{
          marginTop: 10,
          borderTopWidth: 1,
          borderTopColor: '#AC1C1C',
          padding: 15,
          paddingTop: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 16}}>Next</Text>
          <Ionicons name="chevron-forward" size={30} color={'#000'} />
        </TouchableOpacity>

        <Text
          style={{
            color: '#AC1C1C',
            fontSize: 16,
            padding: 5,
            borderRightWidth: 1,
            borderRightColor: '#AC1C1C',
            fontWeight: 'bold',
          }}>
          1
        </Text>
        <Text
          style={{
            color: '#AC1C1C',
            fontSize: 16,
            padding: 5,
            borderRightWidth: 1,
            borderRightColor: '#AC1C1C',
            fontWeight: 'bold',
          }}>
          2
        </Text>
        <Text
          style={{
            color: '#AC1C1C',
            fontSize: 16,
            padding: 5,
            borderRightWidth: 1,
            borderRightColor: '#AC1C1C',
            fontWeight: 'bold',
          }}>
          3
        </Text>
        <Text
          style={{
            color: '#AC1C1C',
            fontSize: 16,
            padding: 5,
            borderRightWidth: 1,
            borderRightColor: '#AC1C1C',
            fontWeight: 'bold',
          }}>
          4
        </Text>
        <Text
          style={{
            color: '#AC1C1C',
            fontSize: 16,
            padding: 5,
            fontWeight: 'bold',
          }}>
          5
        </Text>
      </View>
    </ScrollView>
  );
};

export default RhymeLibraryScreen;
