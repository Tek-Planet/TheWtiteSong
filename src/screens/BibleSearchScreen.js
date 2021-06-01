import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Message from '../components/Message';
import SaveButton from '../components/SaveButton';
import {Picker} from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {versions} from '../assets/constants';
import axios from 'axios';
import {AuthContext} from '../context/AuthProvider';
import dayjs from 'dayjs';

function BibleSearchScreen({navigation}) {
  const {fetchSongs, mySongs} = useContext(AuthContext);
  const [element, setElement] = useState([]);
  const [selectedSong, setSelectedSong] = useState({});
  const [songTitle, setSongTitle] = useState('');
  const [songGenre, setSongGenre] = useState('');
  const [songDate, setSongDate] = useState('');
  const [selectedElementBody, setSelectedElementBody] = useState();
  const [selectedElementTitle, setSelectedElementTitle] = useState();
  const [version, setVersion] = useState('0c2ff0a5c8b9069c-01');
  const [verses, setVerses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState();

  useEffect(() => {
    fetchSongs();
    // if (mySongs !== null && mySongs.length > 0) {
    //   setElement(mySongs[0].element);

    //   if (element.length > 0) setSelecteElement(element[0]);
    // }
  }, []);

  const updateState = song => {
    setSongTitle(song.title);
    //  console.log('state changed', selectedSong);
  };

  const searchBibleVerse = query => {
    setLoading(true);
    setError(null);
    axios
      .get(
        `https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-01/search?query=${query}`,
      )
      .then(res => {
        setVerses(res.data.data.verses);
        console.log(verses);
        setLoading(false);
        setError(null);
      })
      .catch(err => {
        console.log('Internet Problem', err);
        setError('Internet Problem ' + err);
        setLoading(false);
      });
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <Message
          navigation={navigation}
          header={'My songs > Bible Reference Tool'}
          showBackBtn={true}
        />
        {mySongs !== null ? (
          <View>
            <View
              style={{
                flexDirection: 'row',
                margin: 5,
                marginStart: 20,
                marginEnd: 20,
                justifyContent: 'space-evenly',
              }}>
              <View style={{width: '50%'}}>
                <Text style={styles.heading}>Select Song Title</Text>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#AC1C1C',
                  }}>
                  <Picker
                    selectedValue={mySongs[0].title}
                    style={{width: '100%'}}
                    mode="dropdown"
                    dropdownIconColor="#AC1C1C"
                    onValueChange={(itemValue, itemIndex) => {
                      setSongTitle(mySongs[itemIndex].title);
                      setSongGenre(mySongs[itemIndex].genre);
                      setSongDate(mySongs[itemIndex].createdAt);
                      setElement(mySongs[itemIndex].element);

                      //  console.log(element[itemIndex])
                    }}>
                    {mySongs.map((item, index) => {
                      return (
                        <Picker.Item
                          style={styles.pickerItem}
                          key={index}
                          label={item.title}
                          value={item.title}
                        />
                      );
                    })}
                  </Picker>
                </View>
              </View>
              <View style={{width: '50%', marginStart: 20}}>
                <Text style={styles.heading}>Select Element</Text>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#AC1C1C',
                  }}>
                  <Picker
                    selectedValue={'select'}
                    style={{width: '100%'}}
                    mode="dropdown"
                    dropdownIconColor="#AC1C1C"
                    onValueChange={(itemValue, itemIndex) => {
                      if (element.length > 0) {
                        setSelectedElementBody(element[itemIndex].body);
                        setSelectedElementTitle(element[itemIndex].title);
                      } else {
                        setSelectedElementBody('');
                        setSelectedElementTitle('');
                      }
                      //  console.log(element[itemIndex])
                    }}>
                    {element.map((item, index) => {
                      return (
                        <Picker.Item
                          style={styles.pickerItem}
                          key={index}
                          label={item.title}
                          value={item.title}
                        />
                      );
                    })}
                  </Picker>
                </View>
              </View>
            </View>
            <View>
              <Text style={[styles.heading, {marginStart: 20}]}>Details</Text>
              <View style={styles.userInfoSection}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.headerText, {fontWeight: 'bold'}]}>
                      Song Title:
                    </Text>
                    <Text style={styles.headerText}>{songTitle}</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.headerText, {fontWeight: 'bold'}]}>
                      Genre:
                    </Text>
                    <Text style={styles.headerText}>{songGenre} </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.headerText, {fontWeight: 'bold'}]}>
                      Date:
                    </Text>
                    <Text style={styles.headerText}>
                      {songDate && dayjs(songDate).format('YYYY:MM:DD')}
                    </Text>
                  </View>
                </View>
                <Text style={[styles.headerText, {fontWeight: 'bold'}]}>
                  {selectedElementTitle}{' '}
                </Text>
                <Text style={[styles.headerText, {textAlign: 'justify'}]}>
                  {selectedElementBody}
                </Text>
              </View>
            </View>
            {/* bible version */}
            <View style={{width: '50%', marginStart: 20}}>
              <Text style={styles.heading}>Choose Bible Version</Text>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#AC1C1C',
                }}>
                <Picker
                  selectedValue={versions[0].id}
                  style={{width: '100%'}}
                  mode="dropdown"
                  dropdownIconColor="#AC1C1C"
                  onValueChange={(itemValue, itemIndex) => {
                    setVersion(itemValue);
                    console.log(itemValue);
                  }}>
                  {versions.map((item, index) => {
                    return (
                      <Picker.Item
                        style={styles.pickerItem}
                        key={index}
                        label={item.abbreviation}
                        value={item.id}
                      />
                    );
                  })}
                </Picker>
              </View>
            </View>
            {/* word search box */}
            <View style={[styles.userInfoSection, {marginTop: 10}]}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View style={{}}>
                  <Text style={styles.heading}>World Search</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      padding: 10,
                      marginBottom: 10,
                      paddingBottom: 0,
                      borderBottomWidth: 1,
                      borderColor: '#AC1C1C',
                    }}>
                    <TextInput
                      onChangeText={val => setSearch(val)}
                      placeholder="Enter World Reference for bible search"
                      placeholderTextColor="#000"
                      color="#000"
                      autoCapitalize="none"
                      fontSize={15}
                      fontWeight="normal"
                      style={{width: '90%', padding: 1}}
                    />
                    <TouchableOpacity onPress={() => searchBibleVerse(search)}>
                      <Ionicons
                        name="ios-search"
                        size={20}
                        color={'#AC1C1C'}
                        style={{padding: 5}}
                      />
                    </TouchableOpacity>
                  </View>
                  {loading && (
                    <ActivityIndicator color="#AC1C1C" size="large" />
                  )}
                  {error !== null && (
                    <Text
                      style={[
                        styles.heading,
                        {fontSize: 14, textAlign: 'center', marginBottom: 15},
                      ]}>
                      {error}
                    </Text>
                  )}
                </View>
              </View>

              {verses.map((item, index) => {
                return (
                  <View key={item.id}>
                    <Text
                      style={[
                        styles.headerText,
                        {
                          fontWeight: 'bold',
                          marginBottom: 0,
                          borderBottomWidth: 2,
                          width: 105,
                          textAlign: 'center',
                          borderBottomColor: '#000',
                        },
                      ]}>
                      Bible Reference
                    </Text>

                    <Text
                      style={[
                        styles.headerText,
                        {
                          fontWeight: 'bold',
                          marginTop: 15,
                          color: '#000',
                        },
                      ]}>
                      {verses[index].reference}
                    </Text>

                    <Text style={[styles.headerText, {textAlign: 'justify'}]}>
                      {JSON.stringify(verses[index].text)}
                    </Text>
                    {/*  the like button section */}
                    <View
                      style={{
                        alignSelf: 'flex-end',
                        padding: 10,
                        paddingTop: 0,
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignSelf: 'center',
                        }}>
                        <Ionicons
                          onPress={() => alert('Like')}
                          name="heart"
                          size={25}
                          color={'red'}
                          style={{padding: 5}}
                        />
                        <Ionicons
                          onPress={() => alert('Add')}
                          name="add-circle-outline"
                          size={25}
                          color={'#000'}
                          style={{padding: 5}}
                        />
                      </View>
                      <View style={{backgroundColor: '#301CAC'}}>
                        <Text
                          style={[
                            styles.headerText,
                            {
                              padding: 3,
                              color: '#fff',
                            },
                          ]}>
                          Add to Favourite List
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
            <SaveButton buttonTitle={'Save'} />
          </View>
        ) : (
          <Text>Loading data</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default BibleSearchScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  headerText: {
    color: '#000',
    margin: 5,
    fontSize: 14,
  },

  heading: {
    fontSize: 16,
    color: '#AC1C1C',
    marginTop: 10,
    fontWeight: 'bold',
  },

  userInfoSection: {
    margin: 5,
    paddingStart: 10,
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 10,
  },

  inputBox: {
    borderTopWidth: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    width: 300,
    borderBottomColor: '#AC1C1C',
    color: '#000',
  },
  pickerItem: {backgroundColor: '#fff', color: '#000'},
});
