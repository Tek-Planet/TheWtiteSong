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

  return (
    <SafeAreaView>
      <ScrollView>
        {/* subheader */}
        <Message header={'Lyrics Manager'} />
        {/* freestyle and template row */}
        <View style={styles.menuRow}>
          <TouchableOpacity
            style={{alignItems: 'center', margin: 5}}
            onPress={() => {
              navigation.navigate('LyricsNav', {screen: 'Lyrics'});
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
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <MusicPlayer />
          </View>
          <View style={styles.sideRod}>
            <TouchableOpacity onPress={() => alert('searech')}>
              <Ionicons
                name="chevron-forward-outline"
                size={25}
                color={'#fff'}
              />
            </TouchableOpacity>
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
    height: 250,
    width: 25,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#AC1C1C',
    justifyContent: 'center',
  },
});
