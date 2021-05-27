import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Message from '../../components/Message';
import SaveButton from '../../components/SaveButton';
import DropDownPicker from 'react-native-dropdown-picker';
import {Picker} from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from '../../context/AuthProvider';

function AddSong({navigation, route}) {
  const {setMySongs} = useContext(AuthContext);

  const [genre, setGenre] = useState('gospel');
  const [name, setName] = useState('shef');
  const [title, setTitle] = useState('');

  const addSong = async (songName, songGenre, songContributor) => {
    if (songName.trim().length < 1) {
      alert('song name cannot be empty');
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

          console.log('song list updated', songs);
          setMySongs(songs);
        } else {
          const songs = [];
          songs.push(newSong);
          AsyncStorage.setItem('songs', JSON.stringify(songs));
          alert('song added');
          setMySongs(songs);
          console.log('new song added', songs);
        }
      } catch (e) {
        // error reading value
      }
    }
  };

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'space-between'}}>
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
              style={{fontWeight: 'bold', color: '#A30000', marginBottom: 10}}>
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
            <Text
              style={{fontWeight: 'bold', color: '#A30000', marginBottom: 10}}>
              Choose Genre
            </Text>

            <View style={styles.inputContainer}>
              <Picker
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
              style={{fontWeight: 'bold', color: '#A30000', marginBottom: 10}}>
              Add Contributor(s)
            </Text>
            <View></View>
            <DropDownPicker
              items={[
                {label: 'Shaffi', value: 'Shaffi', hidden: true},
                {label: 'Biola', value: 'BigBee'},
                {label: 'Abby', value: 'Abby'},
              ]}
              defaultValue={name}
              containerStyle={{height: 40, width: 150}}
              style={{
                borderWidth: 0,
                borderBottomWidth: 1,
                borderBottomColor: '#A30000',
              }}
              itemStyle={{
                justifyContent: 'flex-start',
              }}
              onChangeItem={item => setName(item.value)}
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

      <View style={styles.saveBtnBg}>
        <SaveButton
          buttonTitle={'Save'}
          onPress={() => {
            //  fetchSongs();
            addSong(title, genre, name);
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default AddSong;
const styles = StyleSheet.create({
  inputContainer: {
    height: 40,
    borderRadius: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#A30000',
  },

  input: {
    width: 150,
    textAlignVertical: 'top',
  },

  saveBtnBg: {},

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

  menuText: {color: '#AC1C1C', fontSize: 14},
});
