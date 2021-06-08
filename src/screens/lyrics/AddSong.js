import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Message from '../../components/Message';
import SaveButton from '../../components/SaveButton';

import {Picker} from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from '../../context/AuthProvider';

import CustomAlert from '../../components/ErrorAlert';
function AddSong({navigation, route}) {
  const {setMySongs} = useContext(AuthContext);
  const [status, setStatus] = useState(false);
  const [genre, setGenre] = useState('gospel');
  const [name, setName] = useState('select');
  const [title, setTitle] = useState('');

  const showAlert = value => {
    setStatus(value);
  };

  const addSong = async (songName, songGenre, songContributor) => {
    if (songName.trim().length < 1) {
      showAlert(true);
      console.log('errrrror');
    } else {
      const newSong = {
        title: songName,
        genre: songGenre,
        author: 'Me',
        contributor: songContributor,
        createdAt: new Date().toISOString(),
        element: [],
      };

      try {
        // check for songs
        const jsonValue = await AsyncStorage.getItem('songs');
        if (jsonValue !== null) {
          // parse to json if its exist
          const songs = JSON.parse(jsonValue);
          // add new song
          songs.push(newSong);
          //  store on async stora
          AsyncStorage.setItem('songs', JSON.stringify(songs));

          console.log('resong list updated', songs);
          setMySongs(songs);
          alertSuccess();
        } else {
          const songs = [];
          songs.push(newSong);
          AsyncStorage.setItem('songs', JSON.stringify(songs));

          setMySongs(songs);
          console.log('new song added', songs);
          alertSuccess();
        }
      } catch (e) {
        // error reading value
      }
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'space-between'}}>
      <View>
        <Message
          navigation={navigation}
          showBackBtn={true}
          header={route.name}
          showMsg="Use this Tools to start Writing your next Hit Song"
        />

        <View style={styles.row}>
          {/* row one  */}
          <View style={{marginStart: 20}}>
            <Text
              style={[styles.textBold, {color: '#A30000', marginBottom: 10}]}>
              {' '}
              Song Title{' '}
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Enter Song Title"
                placeholderTextColor="#666666"
                autoCapitalize="none"
                onChangeText={val => setTitle(val)}
                style={styles.input}
              />
            </View>
          </View>

          {/* section row  */}

          <View style={{marginStart: 20}}>
            <Text style={[styles.textBold, {color: '#A30000'}]}>
              Choose Genre
            </Text>

            <View
              style={{
                borderBottomWidth: 2,
                borderBottomColor: '#AC1C1C',
                paddingBottom: 12,
              }}>
              <Picker
                itemStyle={styles.pickerLable}
                selectedValue={genre}
                style={{width: 150, height: 40}}
                mode="dropdown"
                dropdownIconColor="#AC1C1C"
                onValueChange={(itemValue, itemIndex) => setGenre(itemValue)}>
                <Picker.Item
                  style={styles.pickerItem}
                  label="Gospel"
                  value="gospel"
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="Pop"
                  value="pop"
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="Jazz"
                  value="jazz"
                />
              </Picker>
            </View>
          </View>
        </View>

        <View style={styles.row}>
          {/* row one  */}
          <View style={{marginStart: 20}}>
            <Text
              style={[styles.textBold, {color: '#A30000', marginBottom: 10}]}>
              Add Contributor(s)
            </Text>
            <View
              style={{
                borderBottomWidth: 2,
                borderBottomColor: '#AC1C1C',
                paddingBottom: 12,
              }}>
              <Picker
                selectedValue={name}
                style={{width: 150, height: 40}}
                mode="dropdown"
                dropdownIconColor="#AC1C1C"
                onValueChange={(itemValue, itemIndex) => setName(itemValue)}>
                <Picker.Item
                  style={styles.pickerItem}
                  label="select"
                  value="select"
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="Shaffi"
                  value="Shaffi"
                />

                <Picker.Item
                  style={styles.pickerItem}
                  label="Biola"
                  value="Biola"
                />

                <Picker.Item
                  style={styles.pickerItem}
                  label="Mark"
                  value="Mark"
                />
              </Picker>
            </View>
          </View>
          {/* section row  */}

          <View style={{marginStart: 20}}>
            <Text
              style={[styles.textBold, {color: '#A30000', marginBottom: 10}]}>
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
                alert('LyricsNav');
              }}>
              <Image
                style={styles.menuImg}
                source={require('../../assets/imgs/home/lyrics.png')}
              />
              <Text style={styles.menuText}>Load Song Template</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View>
        <CustomAlert status={status} showAlert={showAlert} />
        <View style={styles.saveBtnBg}>
          <SaveButton
            buttonTitle={'Save'}
            onPress={() => {
              //  fetchSongs();
              addSong(title, genre, name);
            }}
          />
        </View>
      </View>
    </View>
  );
}

export default AddSong;
const styles = StyleSheet.create({
  inputContainer: {
    height: 45,
    borderRadius: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#A30000',
    backgroundColor: '#fff',
    paddingBottom: 5,
  },

  input: {
    fontFamily: 'Montserrat-Medium',
    width: 150,
    color: '#000',
    backgroundColor: '#fff',
  },

  row: {flexDirection: 'row', marginTop: 10},

  menuBg: {
    marginTop: 10,
    backgroundColor: '#F8AE33',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'center',
  },

  menuImg: {width: 30, height: 30, margin: 10},

  menuText: {color: '#AC1C1C', fontSize: 14, fontFamily: 'Montserrat-Medium'},
  pickerItem: {
    backgroundColor: '#fff',
    color: '#000',
  },

  pickerLable: {
    fontFamily: 'Montserrat-Medium',
  },

  textBold: {fontFamily: 'Montserrat-Bold', fontSize: 13},
});
