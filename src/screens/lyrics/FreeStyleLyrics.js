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

function FreeStyleLyrics({navigation}) {
  const {partialResults, edit, setEdit} = useContext(AuthContext);
  const [content, setContent] = useState(partialResults[0]);

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
              fontSize: 20,
              padding: 10,
              textAlign: 'center',
              color: '#fff',
              fontWeight: 'bold',
            }}>
            Or Just
          </Text>
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
            />
            <Text
              style={{
                color: '#000',
                fontSize: 18,
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
                fontSize: 18,
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
              width: 50,
              height: 50,
              justifyContent: 'center',
              borderRadius: 10,
              marginTop: 5,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                color: '#fff',
                fontWeight: 'bold',
              }}>
              Live
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
                    fontSize: 18,
                    color: '#000',
                  }}>
                  {partialResults[0]}
                </Text>
                <Ionicons
                  onPress={() => {
                    setContent(partialResults[0]);
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
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View style={styles.saveBtnBg}>
            <Text style={styles.saveBtnText}>Save</Text>
          </View>

          <View style={styles.saveBtnBg}>
            <Text style={styles.saveBtnText}>Save Template</Text>
          </View>
        </View>
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
    margin: 5,
    borderRadius: 10,
    textAlignVertical: 'top',
    backgroundColor: '#ccc',
    paddingLeft: 15,
    color: '#000',
    paddingRight: 15,
  },
});
