import React, {Component, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Message from '../../components/Message';
import DropDownPicker from 'react-native-dropdown-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';

function AddSong({navigation, route}) {
  const [country, setCountry] = useState('gospel');
  const [name, setName] = useState('shef');

  return (
    <SafeAreaView>
      <ScrollView>
        <Message header={route.name} showMsg={true} />

        <View style={styles.row}>
          {/* row one  */}
          <View style={{marginStart: 20}}>
            <Text
              style={{fontWeight: 'bold', color: '#A30000', marginBottom: 10}}>
              {' '}
              Song Title{' '}
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                // value =  {state.body}
                placeholder="Enter Song Title"
                placeholderTextColor="#666666"
                autoCapitalize="none"
                onChangeText={val => textInputChange(val)}
                style={styles.input}
              />
            </View>
          </View>

          {/* section row  */}

          <View style={{marginStart: 20}}>
            <Text
              style={{fontWeight: 'bold', color: '#A30000', marginBottom: 10}}>
              {' '}
              Add Contributions{' '}
            </Text>

            <DropDownPicker
              items={[
                {label: 'Gospel', value: 'gospel', hidden: true},
                {label: 'Jazz', value: 'jazz'},
                {label: 'Pop', value: 'pop'},
              ]}
              defaultValue={country}
              containerStyle={{height: 40, width: 150}}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                justifyContent: 'flex-start',
              }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              onChangeItem={item => setCountry(item.value)}
            />
          </View>
        </View>

        <View style={styles.row}>
          {/* row one  */}
          <View style={{marginStart: 20}}>
            <Text
              style={{fontWeight: 'bold', color: '#A30000', marginBottom: 10}}>
              {' '}
              Song Title{' '}
            </Text>

            <DropDownPicker
              items={[
                {label: 'Shaffi', value: 'shef', hidden: true},
                {label: 'Biola', value: 'jazz'},
                {label: 'Abby', value: 'pop'},
              ]}
              defaultValue={name}
              containerStyle={{height: 40, width: 150}}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                justifyContent: 'flex-start',
              }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              onChangeItem={item => setCountry(item.value)}
            />
          </View>

          {/* section row  */}

          <View style={{marginStart: 20}}>
            <Text
              style={{fontWeight: 'bold', color: '#A30000', marginBottom: 10}}>
              {' '}
              Invite{' '}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Ionicons
                name="logo-facebook"
                size={23}
                color={'#301CAC'}
                style={{margin: 5}}
              />
              <Ionicons
                name="logo-google"
                size={23}
                color={'#A30000'}
                style={{margin: 5}}
              />

              <Ionicons
                name="mail"
                size={23}
                color={'#A30000'}
                style={{margin: 5}}
              />
            </View>
          </View>
        </View>

        <View style={styles.menuRow}>
          <View style={styles.menuBg}>
            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={() => {
                navigation.navigate('LyricsNav', {screen: 'AddSong'});
              }}>
              <Image
                style={styles.menuImg}
                source={require('../../assets/imgs/menu/lyrics.png')}
              />
              <Text style={styles.menuText}>Load Song Template</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.saveBtnBg}>
          <Text style={styles.saveBtnText}>Save</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default AddSong;
const styles = StyleSheet.create({
  inputContainer: {
    height: 40,
    borderRadius: 5,
    backgroundColor: '#fff',
    borderBottomWidth: 2,
    borderBottomColor: '#A30000',
  },

  input: {
    width: 150,
    textAlignVertical: 'top',
    backgroundColor: '#fff',
  },

  saveBtnBg: {
    backgroundColor: '#AC1C1C',
    padding: 5,
    margin: 10,
    borderRadius: 50,
  },

  saveBtnText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
  },
  row: {flexDirection: 'row', marginTop: 10},
  menuBg: {
    backgroundColor: '#F8AE33',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    height: 110,
    alignSelf: 'center',
    marginTop: 10,
  },
  menuImg: {width: 50, height: 50, margin: 10, borderRadius: 5},
  menuText: {color: '#AC1C1C', fontSize: 18},
});
