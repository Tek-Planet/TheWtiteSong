import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Message from '../../components/Message';
import RecordButton from '../../components/RecordButton';
import Ionicons from 'react-native-vector-icons/Ionicons';

function SongPlayer({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <Message header={'Song Player'} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
          }}>
          <View style={styles.searchBox}>
            <TextInput
              // onChangeText={val => textInputChange(val)}
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
        {/* song title section */}

        <View style={styles.userInfoSection}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Ionicons name="football-outline" size={30} color="#AC1C1C" />
            <View style={{marginStart: 10}}>
              <View style={{flexDirection: 'row', width: 200}}>
                <Text style={styles.titleText}>Song Title:</Text>
                <Text style={styles.text}>Shape of You</Text>
              </View>
              <View style={{flexDirection: 'row', width: 200, marginTop: -10}}>
                <Text style={styles.titleText}>Date:</Text>
                <Text style={styles.text}>01-01-2020</Text>
              </View>
            </View>

            <View style={[styles.row]}>
              <TouchableOpacity style={styles.iconBg}>
                <Ionicons name="play" size={20} color="#FFF" />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.iconBg, {backgroundColor: '#F8AE33'}]}>
                <Ionicons name="document-text-outline" size={20} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.iconBg, {backgroundColor: '#301CAC'}]}>
                <Ionicons name="share-social-outline" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#AC1C1C', marginEnd: 10, fontWeight: 'bold'}}>
            Run Time :
          </Text>
          <View
            style={{
              alignSelf: 'center',
              backgroundColor: '#F8AE33',
              borderRadius: 5,
              margin: 10,
              width: 90,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: '#000',
                fontSize: 11,
                fontWeight: 'bold',
                marginEnd: 10,
                marginStart: 10,
              }}>
              05:00{'\n'}MM | SS
            </Text>
          </View>
        </View>
        <Image
          resizeMode={'contain'}
          style={{margin: 10}}
          source={require('../../assets/imgs/lyrics/player.png')}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 20,
          }}>
          <TouchableOpacity style={[styles.iconBg, {backgroundColor: '#fff'}]}>
            <Ionicons name="play-back" size={25} color="#AC1C1C" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.iconBg, {backgroundColor: '#fff'}]}>
            <Ionicons name="play-forward" size={25} color="#AC1C1C" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.iconBg, {backgroundColor: '#fff'}]}>
            <Ionicons name="play" size={25} color="#AC1C1C" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.iconBg, {backgroundColor: '#fff'}]}>
            <Ionicons name="pause" size={25} color="#AC1C1C" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.iconBg, {backgroundColor: '#fff'}]}>
            <Ionicons name="stop" size={25} color="#AC1C1C" />
          </TouchableOpacity>
        </View>
        <RecordButton style={{alignItems: 'center'}} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default SongPlayer;

const styles = StyleSheet.create({
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
  userInfoSection: {
    margin: 5,
    padding: 5,
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 10,
  },
  titleText: {
    margin: 5,
    fontWeight: 'bold',
    width: 70,
    textAlign: 'right',
  },
  text: {margin: 5},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  iconBg: {
    margin: 3,
    borderRadius: 5,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AC1C1C',
  },
});
