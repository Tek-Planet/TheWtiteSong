import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Switch,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import Message from '../../components/Message';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function LoopLibraryScreen({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Message navigation={navigation} header={'Loop Library'} />
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
          {/* end of search box */}

          {/* search result */}
          <View srt></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchBox: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    flex: 1,
    borderRadius: 20,
    padding: 1,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#AC1C1C',
  },
  editMenuItem: {
    flexDirection: 'row',
    backgroundColor: '#F8AE33',
    alignItems: 'center',
    borderRadius: 10,
    height: 30,
    width: 130,
  },
  editMenuText: {
    width: 100,
    color: '#000',
    margin: 4,
    fontSize: 15,
  },
  joyButtonBg: {
    backgroundColor: '#F8AE33',
    flexDirection: 'row',
    width: 70,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 1,
    borderRadius: 10,
    marginEnd: 10,
  },
  joyButtonText: {color: '#fff', fontSize: 18},
  swichItem: {flexDirection: 'row', justifyContent: 'space-evenly', width: 105},
  swichItemText: {
    color: '#000000',
    fontSize: 18,
  },
  playerText: {textAlign: 'center', color: '#000', fontWeight: 'bold'},

  iconBg: {
    margin: 5,
    borderRadius: 10,
    width: 40,
    height: 40,
    padding: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 5,
    alignContent: 'center',
  },
  saveBtnText: {
    backgroundColor: '#AC1C1C',
    margin: 10,
    borderRadius: 50,
  },

  saveBtnBg: {
    textAlign: 'center',
    color: '#fff',
    margin: 5,
    padding: 5,
    fontSize: 20,
  },
});
