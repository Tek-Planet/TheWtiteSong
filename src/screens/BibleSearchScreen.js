import React, {useState} from 'react';
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

function BibleSearchScreen({navigation}) {
  const [version, setVersion] = useState('0c2ff0a5c8b9069c-01');
  const [verses, setVerses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState();
  const [selectedAge, setSelectedAge] = useState();
  const [selectedCountry, setSelectedCountry] = useState();

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
                selectedAge={selectedAge}
                style={{width: '100%'}}
                mode="dropdown"
                dropdownIconColor="#AC1C1C"
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedAge(itemValue)
                }>
                <Picker.Item label="Select" value="select" />
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
                items={[
                  {label: 'Gospel', value: 'gospel', hidden: true},
                  {label: 'Jazz', value: 'jazz'},
                  {label: 'Pop', value: 'pop'},
                ]}
                selectedCountry={selectedCountry}
                style={{width: '100%'}}
                mode="dropdown"
                dropdownIconColor="#AC1C1C"
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedCountry(itemValue)
                }></Picker>
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
                <Text style={styles.headerText}>Select Element</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.headerText, {fontWeight: 'bold'}]}>
                  Genre:
                </Text>
                <Text style={styles.headerText}>Select Element</Text>
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
                <Text style={styles.headerText}>Select Element</Text>
              </View>
            </View>
            <Text style={[styles.headerText, {fontWeight: 'bold'}]}>Verse</Text>
            <Text style={[styles.headerText, {textAlign: 'justify'}]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              imperdiet ipsum eget massa sagittis volutpat. Donec facilisis dui
              massa, in sagittis enim faucibus nec. Aenean ultrices justo
              turpis, in varius neque maximus vitae. Aenean urna enim, lobortis
              eu rutrum
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
              selectedValue={'select'}
              style={{width: '100%'}}
              mode="dropdown"
              dropdownIconColor="#AC1C1C"
              onValueChange={(itemValue, itemIndex) => {
                setVersion(itemValue);
                console.log(itemValue);
              }}>
              {versions.map(item => {
                return (
                  <Picker.Item
                    key={item.id}
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
              {loading && <ActivityIndicator color="#AC1C1C" size="large" />}
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
