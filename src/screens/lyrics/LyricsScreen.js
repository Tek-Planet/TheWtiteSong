import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import Message from '../../components/Message';
import MusicPlayer from '../../components/MusicPlayer';
import TemplateList from '../../components/TemplateList';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function componentName() {
  const [keyWord, setKeyWord] = useState('');
  const [side, setSide] = useState(true);
  // sample test data
  const [template, setTemplate] = useState([
    {
      key: '001',
      template: 'beat',
      name: 'Jazz',
      update: '03/02/2020',
      author: 'James Mary',
    },
    {
      key: '002',
      template: 'beat',
      name: 'pop',
      update: '03/02/2021',
      author: 'Shaffi Deen',
    },
  ]);

  // methid to update the search keywor
  const textInputChange = val => {
    if (val.trim().length > 0) {
      setKeyWord(val);
    } else {
      setKeyWord(val);
    }
  };
  // show side bar
  const showSideMenu = () => {
    if (side) {
      setSide(false);
    } else {
      setSide(true);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        {/* subheader */}
        <Message header={'Lyrics Manager'} showMsg={true} />
        {/* freestyle and template row */}
        <View style={styles.menuRow}>
          <TouchableOpacity
            style={{alignItems: 'center', margin: 5}}
            onPress={() => {
              navigation.navigate('LyricsNav', {screen: 'MySong'});
            }}>
            <Image
              style={styles.menuImg}
              source={require('../../assets/imgs/lyrics/freestyle.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{alignItems: 'center', margin: 5}}
            onPress={() => {
              navigation.navigate('More');
            }}>
            <Image
              style={styles.menuImg}
              source={require('../../assets/imgs/lyrics/template.png')}
            />
          </TouchableOpacity>
        </View>
        {/* search box  */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
          }}>
          <View style={styles.searchBox}>
            <TextInput
              onChangeText={val => textInputChange(val)}
              placeholder="Search Loops, Lyrics, Melodies, Templates"
              placeholderTextColor="#000"
              color="#000"
              autoCapitalize="none"
              fontSize={15}
              fontWeight="normal"
              style={{flex: 1, padding: 1}}
            />
          </View>
          <TouchableOpacity
            style={{
              borderColor: '#AC1C1C',
              borderWidth: 2,
              borderRadius: 100,
              margin: 5,
            }}
            onPress={() => alert('searech')}>
            <Ionicons
              name="ios-search"
              size={20}
              color={'#AC1C1C'}
              style={{padding: 5}}
            />
          </TouchableOpacity>
        </View>
        {/* template list */}
        {<TemplateList template={template} keyWord={keyWord} />}

        {/* media player section */}
        <View style={{flexDirection: 'row', flex: 1}}>
          <MusicPlayer />

          {/* editing menu */}

          <View style={{margin: 10, marginEnd: 20, flex: 0.4}}>
            {side ? (
              <View>
                <View style={styles.editMenuItem}>
                  <View style={{backgroundColor: '#301CAC', margin: 5}}>
                    <Ionicons
                      name="musical-notes-outline"
                      size={18}
                      color={'#fff'}
                    />
                  </View>
                  <Text style={styles.editMenuText}>
                    Create / Insert Lyrics
                  </Text>
                </View>

                <View style={styles.editMenuItem}>
                  <View style={{backgroundColor: '#301CAC', margin: 5}}>
                    <Ionicons
                      name="musical-notes-outline"
                      size={18}
                      color={'#fff'}
                    />
                  </View>
                  <Text style={styles.editMenuText}>Bible Search</Text>
                </View>
                <View style={styles.editMenuItem}>
                  <View style={{backgroundColor: '#301CAC', margin: 5}}>
                    <Ionicons
                      name="musical-notes-outline"
                      size={18}
                      color={'#fff'}
                    />
                  </View>
                  <Text style={styles.editMenuText}>Harmonizwe Tools</Text>
                </View>
                <View style={styles.editMenuItem}>
                  <View style={{backgroundColor: '#301CAC', margin: 5}}>
                    <Ionicons
                      name="musical-notes-outline"
                      size={18}
                      color={'#fff'}
                    />
                  </View>
                  <Text style={styles.editMenuText}>Loop Manager</Text>
                </View>
                <View style={styles.editMenuItem}>
                  <View style={{backgroundColor: '#301CAC', margin: 5}}>
                    <Ionicons
                      name="musical-notes-outline"
                      size={18}
                      color={'#fff'}
                    />
                  </View>
                  <Text style={styles.editMenuText}>Rhyming Tools</Text>
                </View>

                <View style={styles.editMenuItem}>
                  <View style={{backgroundColor: '#301CAC', margin: 5}}>
                    <Ionicons
                      name="musical-notes-outline"
                      size={18}
                      color={'#fff'}
                    />
                  </View>
                  <Text style={styles.editMenuText}>Print</Text>
                </View>
              </View>
            ) : null}
          </View>

          {/* side rod */}
          <View style={styles.sideRod}>
            {side ? (
              <TouchableOpacity onPress={() => showSideMenu()}>
                <Ionicons name="chevron-back" size={25} color={'#fff'} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => showSideMenu()}>
                <Ionicons
                  name="chevron-forward-outline"
                  size={25}
                  color={'#fff'}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
        {/* save botton */}
        <View
          style={{
            backgroundColor: '#AC1C1C',
            padding: 5,
            margin: 10,
            borderRadius: 50,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#fff',
              margin: 5,
              padding: 5,
              fontSize: 20,
            }}>
            Save
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  menuRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 5,
  },
  searchBox: {
    height: 40,
    flexDirection: 'row',
    backgroundColor: '#fff',
    flex: 1,
    borderRadius: 20,
    padding: 5,
    elevation: 10,
    borderWidth: 1,
    borderColor: '#AC1C1C',
  },
  sideRod: {
    height: 210,
    width: 25,
    marginStart: 15,
    marginTop: 10,
    marginEnd: 5,
    marginStart: 10,
    marginStart: 14,
    borderRadius: 10,
    backgroundColor: '#AC1C1C',
    justifyContent: 'center',
  },
  editMenuItem: {
    flexDirection: 'row',
    backgroundColor: '#F8AE33',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 5,
    height: 30,
    width: 130,
  },
  editMenuText: {
    width: 100,
    color: '#000',
    fontWeight: 'bold',
    margin: 4,
    fontSize: 15,
  },
});
