import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {Image, Avatar, Title} from 'react-native-paper';
import Message from '../../components/Message';
import Ionicons from 'react-native-vector-icons/Ionicons';
function DashBoardScreen({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView>
        <Message header={'Shared Songs'} />
        {/* profle section */}
        <View style={styles.userInfoSection}>
          <View
            style={{marginTop: 15, flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginLeft: 15, flexDirection: 'column'}}>
              <Avatar.Image
                source={require('../../assets/imgs/profile.jpg')}
                size={100}
              />
              <View style={{position: 'absolute', bottom: 0, right: 1}}>
                <TouchableOpacity style={styles.iconBg}>
                  <Ionicons name="american-football" size={10} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
            <Title style={styles.title}>Welcome: John Doe</Title>
          </View>
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
        {/* completed song section */}
        <View style={styles.userInfoSection}>
          <View
            style={{
              margin: 5,
              justifyContent: 'space-evenly',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                style={[styles.iconBg, {height: 40, width: 40}]}
                onPress={() => {
                  navigation.navigate('CompletedSong');
                }}>
                <Text style={styles.numberBg}>10</Text>
              </TouchableOpacity>
              <Title style={styles.numberText}>completed Songs</Title>
            </View>

            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('HomePage')}
                style={[styles.iconBg, {height: 40, width: 40}]}>
                <Text style={styles.numberBg}>5</Text>
              </TouchableOpacity>
              <Title style={styles.numberText}>Songs in Process</Title>
            </View>
          </View>
        </View>
        {/* notification section */}
        <View style={styles.userInfoSection}>
          <View
            style={{
              margin: 5,
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('MsgDetails')}
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                width: 150,
              }}>
              <Ionicons name="alert" size={20} color={'#AC1C1C'} />
              <Title style={styles.notificationText}>Alerts</Title>
            </TouchableOpacity>

            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Ionicons name="chatbubbles" size={20} color={'#AC1C1C'} />
              <Title style={styles.notificationText}>Messages</Title>
            </View>
          </View>
          <View
            style={{
              margin: 5,
              flexDirection: 'row',
            }}>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                width: 150,
              }}>
              <Ionicons name="notifications" size={20} color={'#AC1C1C'} />
              <Title style={styles.notificationText}>Notification</Title>
            </View>
          </View>
        </View>
        {/* profle section */}
        <View style={styles.userInfoSection}>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Title style={styles.notificationText}>1</Title>
            <TouchableOpacity onPress={() => navigation.navigate('SongPlayer')}>
              <Title style={[styles.notificationText, {width: 140}]}>
                The new Dawn
              </Title>
            </TouchableOpacity>

            <Text style={styles.listItemDate}>Last Viewed: 02/11/2020</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Title style={styles.notificationText}>2</Title>
            <Title style={[styles.notificationText, {width: 140}]}>
              Shape of you
            </Title>
            <Text style={styles.listItemDate}>Last Viewed: 02/11/2020</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Title style={styles.notificationText}>3</Title>
            <Title style={[styles.notificationText, {width: 140}]}>
              Apala Music
            </Title>
            <Text style={styles.listItemDate}>Last Viewed: 02/11/2020</Text>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <Title style={[styles.notificationText]}>View More</Title>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default DashBoardScreen;

const styles = StyleSheet.create({
  userInfoSection: {
    margin: 5,
    padding: 5,
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    marginStart: 20,
    color: '#000',
  },
  iconBg: {
    margin: 5,
    borderRadius: 100,
    width: 25,
    height: 25,
    padding: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AC1C1C',
    elevation: 5,
    alignContent: 'center',
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
  numberBg: {color: '#fff', padding: 5, fontSize: 18},
  numberText: {marginTop: -5, fontSize: 17},
  notificationText: {fontSize: 18, marginStart: 10},
  listItemDate: {
    color: '#AC1C1C',
  },
});
