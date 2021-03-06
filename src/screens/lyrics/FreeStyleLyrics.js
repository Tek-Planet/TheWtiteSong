import React, {useContext} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import Message from '../../components/Message';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TTL from '../../components/TextToSpeech';
import {AuthContext} from '../../context/AuthProvider';
import {useState} from 'react';
import CustomAlert from '../../components/ErrorAlert';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SaveButton from '../../components/SaveButton';

function FreeStyleLyrics({navigation, route}) {
  const {setMySongs} = useContext(AuthContext);
  const [placeholder, setPlaceHolder] = useState('Live');
  const [status, setStatus] = useState(false);
  const [alertTitle, setAlertTitle] = useState('Error');
  const [alertMsg, setAlertMsg] = useState('qwert');
  const [edit, setEdit] = useState(false);
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const {songInfo} = route.params;

  // mddal to show error or success
  const showAlert = value => {
    setStatus(value);
  };

  const saveSongElement = async (title, details) => {
    const songElement = songInfo.element;

    if (title.trim().length === 0 || details.trim().length === 0) {
      setAlertTitle('Error');
      setAlertMsg('Kindly fill aff fields to proceed');
      showAlert(true);
    } else {
      console.log('details');
      const newElemet = {
        title: title,
        body: details,
      };

      songElement.push(newElemet);

      const newSong = {
        title: songInfo.title,
        genre: songInfo.genre,
        author: songInfo.author,
        contributor: songInfo.contributor,
        createdAt: songInfo.createdAt,
        element: songElement,
      };

      const jsonValue = await AsyncStorage.getItem('songs');
      if (jsonValue !== null) {
        // parse to json if its exist
        const songs = JSON.parse(jsonValue);
        // add new song
        songs[0] = newSong;
        //  store on async stora
        AsyncStorage.setItem('songs', JSON.stringify(songs));
        setMySongs(songs);
        setMySongs(songs);
        setAlertTitle('Success');
        setAlertMsg('Element Added.');
        showAlert(true);
      }
    }
  };

  const setResult = result => {
    setContent(result[0]);
    setEdit(edit);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Message
          navigation={navigation}
          showBackBtn={true}
          header={'Free Style Lyrics WhiteBoard'}
          showMsg={false}
        />

        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() => {
            navigation.navigate('LyricsNav', {screen: 'Manage Template'});
          }}>
          <Image
            style={styles.menuImg}
            source={require('../../assets/imgs/lyrics/frestyle.png')}
          />
        </TouchableOpacity>
        <View style={{backgroundColor: '#A30000'}}>
          <Text
            style={{
              fontSize: 16,
              padding: 10,
              textAlign: 'center',
              color: '#fff',
              fontFamily: 'Montserrat-Bold',
            }}>
            Or Just
          </Text>
        </View>
        {/* song header */}

        <View style={styles.row}>
          {/* row one  */}
          <View style={{marginStart: 20}}>
            <Text
              style={{
                fontFamily: 'Montserrat-Medium',
                color: '#A30000',
                marginBottom: 10,
              }}>
              Song Title{' '}
            </Text>

            <Text style={{fontFamily: 'Montserrat-Medium', color: '#000'}}>
              {songInfo.title}
            </Text>
          </View>

          {/* section row  */}

          <View style={{marginStart: 20}}>
            <Text style={{fontFamily: 'Montserrat-Medium', color: '#A30000'}}>
              Song Element
            </Text>

            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Song Element Title"
                placeholderTextColor="#666666"
                autoCapitalize="none"
                onChangeText={val => setTitle(val)}
                style={styles.inputText}
              />
            </View>

            {/* <Picker
                selectedValue={genre}
                style={{width: 180, height: 40}}
                mode="dropdown"
                dropdownIconColor="#AC1C1C"
                onValueChange={(itemValue, itemIndex) => setGenre(itemValue)}>
                <Picker.Item
                  style={styles.pickerItem}
                  label="Chorus"
                  value="chorus"
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="Introduction"
                  value="introduction"
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="Verse"
                  value="verse"
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="Bridge"
                  value="bridge"
                />
              </Picker> */}
          </View>
        </View>
        {/* mict and type option row */}
        <View style={styles.lyricsOption}>
          <View style={styles.lyricsMenu}>
            {/* <Ionicons
              name="mic-outline"
              size={50}
              color={'#A30000'}
              style={{margin: 5}}
            /> */}
            <TTL
              onPress={() => {
                setEdit(false);
              }}
              setResult={setResult}
              setPlaceHolder={setPlaceHolder}
            />
            <Text
              style={{
                fontFamily: 'Montserrat-Medium',
                color: '#000',
                fontSize: 14,
                textAlign: 'center',
              }}>
              Speak Your Lyrics
            </Text>
          </View>

          <View style={styles.lyricsMenu}>
            <Ionicons
              onPress={() => {
                setEdit(true);
              }}
              name="newspaper-outline"
              size={50}
              color={'#A30000'}
              style={{margin: 5}}
            />

            <Text
              style={{
                color: '#000',
                fontSize: 14,
                fontFamily: 'Montserrat-Medium',
                textAlign: 'center',
              }}>
              Type Your Lyrics
            </Text>
          </View>
        </View>
        {/* Lyrics display row */}
        <View style={{flexDirection: 'row', margin: 20}}>
          <View
            style={{
              backgroundColor: '#FE0000',
              minWidth: 50,
              height: 50,
              justifyContent: 'center',
              borderRadius: 10,
              marginTop: 5,
              padding: 4,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 12,
                color: '#fff',
                fontFamily: 'Montserrat-Medium',
              }}>
              {placeholder}
            </Text>
          </View>
          <View style={{flex: 1}}>
            {!edit ? (
              <View>
                <Text
                  style={{
                    borderRadius: 10,
                    height: 100,
                    backgroundColor: '#ccc',
                    marginStart: 10,
                    textAlign: 'justify',
                    fontSize: 16,
                    fontFamily: 'Montserrat-Medium',
                    color: '#000',
                    padding: 5,
                  }}>
                  {content}
                </Text>
                <Ionicons
                  onPress={() => {
                    setContent(content);
                    setEdit(true);
                  }}
                  name="pencil"
                  size={20}
                  color={'#A30000'}
                  style={{position: 'absolute', right: 5, bottom: -20}}
                />
              </View>
            ) : (
              <View style={styles.inputContainer}>
                <TextInput
                  value={content}
                  multiline={true}
                  numberOfLines={5}
                  placeholder="Type Here"
                  placeholderTextColor="#666666"
                  autoCapitalize="none"
                  onChangeText={val => setContent(val)}
                  style={styles.input}
                />
              </View>
            )}
          </View>
        </View>
        {/* save button sections */}
        <SaveButton
          onPress={() => {
            //  fetchSongs();
            saveSongElement(title, content);
          }}
          buttonTitle={'Save'}
        />
        <CustomAlert
          alertMsg={alertMsg}
          alertTitle={alertTitle}
          navigation={navigation}
          status={status}
          showAlert={showAlert}
        />
        {/* <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <TouchableOpacity
            style={styles.saveBtnBg}
            onPress={() => {
              //  fetchSongs();
              saveSongElement(title, content);
            }}>
            <Text style={styles.saveBtnText}>Save</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.saveBtnBg}
            onPress={() => {
              //  fetchSongs();
              AsyncStorage.removeItem('songs');
            }}>
            <Text style={styles.saveBtnText}>Save Template</Text>
          </TouchableOpacity>
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}

export default FreeStyleLyrics;

const styles = StyleSheet.create({
  menuImg: {height: 60, marginTop: 30, marginBottom: 30, borderRadius: 5},
  lyricsOption: {
    elevation: 5,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  lyricsMenu: {
    padding: 8,
    borderWidth: 3,
    borderColor: '#E9E9E9',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  saveBtnBg: {
    backgroundColor: '#AC1C1C',
    padding: 5,
    margin: 10,
    borderRadius: 50,
    flex: 0.5,
  },

  saveBtnText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    padding: 5,
  },

  input: {
    padding: 5,
    margin: 5,
    borderRadius: 10,
    textAlignVertical: 'top',
    backgroundColor: '#ccc',
    paddingLeft: 15,
    color: '#000',
    fontSize: 16,
    height: 100,
    paddingRight: 15,
    fontFamily: 'Montserrat-Medium',
  },

  inputContainer: {},

  inputText: {
    padding: 5,
    fontFamily: 'Montserrat-Medium',
    width: 150,
    color: '#000',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },

  row: {justifyContent: 'space-evenly', flexDirection: 'row', marginTop: 10},
});
