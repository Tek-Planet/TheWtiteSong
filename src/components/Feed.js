import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Feed = () => {
  const [showDesc, setShowDesc] = useState(false);
  const handleShowDesc = value => {
    setShowDesc(!value);
  };
  return (
    <View>
      <TouchableOpacity
        onPress={() => handleShowDesc(showDesc)}
        style={{marginBottom: 20}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 0.1, marginRight: 10}}>
            <Image
              style={{width: 40, height: 40}}
              source={require('../assets/imgs/icons/contact-icon.png')}
            />
          </View>
          <View style={{flex: 0.9}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                flex: 1,
                marginBottom: 10,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold', color: '#8a2be2'}}>
                  Topic TItle:{' '}
                </Text>
                <Text>Title</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold', color: '#AC1C1C'}}>
                  Date:{' '}
                </Text>
                <Text>02/01/2020</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold', color: '#0ca678'}}>
                  Replies:{' '}
                </Text>
                <Text>385</Text>
              </View>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold', marginRight: 10}}>
                  Message:
                </Text>
                <Text>Dummy text dummy text</Text>
              </View>
              {showDesc ? (
                <Ionicons name="chevron-down" size={30} color={'#AC1C1C'} />
              ) : (
                <Ionicons name="chevron-forward" size={30} color={'#AC1C1C'} />
              )}
            </View>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 20,
                }}>
                <Image
                  style={{width: 18, height: 18, marginRight: 10}}
                  source={require('../assets/imgs/icons/love-icon.png')}
                />
                <Text>25</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 40,
                }}>
                <Image
                  style={{width: 18, height: 18, marginRight: 10}}
                  source={require('../assets/imgs/icons/blue-like-icon.png')}
                />
                <Text>10</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      {showDesc && (
        <View>
          <TextInput
            placeholder="Enter Description"
            multiline
            label="Description"
            numberOfLines={5}
            mode="outlined"
            theme={{colors: {primary: '#AC1C1C', background: '#fff'}}}
            style={{
              margin: 20,
              marginTop: 0,
            }}
          />
        </View>
      )}
    </View>
  );
};

export default Feed;
