import React, {Component} from 'react';
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
import RecordButton from '../../components/RecordButton';
import Ionicons from 'react-native-vector-icons/Ionicons';

function LoopScreen({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Message
            navigation={navigation}
            showBackBtn={true}
            header={'Mobile Studio | Loops'}
          />

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

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginEnd: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginStart: 20,
              }}>
              <Ionicons
                name="star"
                size={25}
                color={'#F8AE33'}
                style={{padding: 5}}
              />
              <Text style={{margin: 5, fontSize: 16}}>Favourites Loops</Text>
            </View>

            <TouchableOpacity
              style={styles.editMenuItem}
              onPress={() => {
                navigation.navigate('LoopNav', {screen: 'LoopLib'});
              }}>
              <Ionicons
                name="create-outline"
                style={{margin: 5}}
                size={18}
                color={'#000'}
              />
              <Text style={styles.editMenuText}>Loop Library</Text>
            </TouchableOpacity>
          </View>
          {/* the row with forward and backward chevron */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back" size={35} color={'#AC1C1C'} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.joyButtonBg}>
              <Text style={styles.joyButtonText}>Joy</Text>
              <Ionicons name="play" size={25} color="#AC1C1C" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.joyButtonBg}>
              <Text style={styles.joyButtonText}>Joy</Text>
              <Ionicons name="play" size={25} color="#AC1C1C" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.joyButtonBg}>
              <Text style={styles.joyButtonText}>Joy</Text>
              <Ionicons name="play" size={25} color="#AC1C1C" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.joyButtonBg}>
              <Text style={styles.joyButtonText}>Joy</Text>
              <Ionicons name="play" size={25} color="#AC1C1C" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-forward" size={35} color={'#AC1C1C'} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{textAlign: 'center', color: '#F8AE33', fontSize: 18}}>
              Insert Loop into insert song
            </Text>
          </View>
          {/* mutitple switch section */}
          <View
            style={{
              elevation: 5,
              margin: 5,
              backgroundColor: '#fff',
              padding: 5,
              borderRadius: 5,
            }}>
            {/* top row */}
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <View style={styles.swichItem}>
                <Text style={styles.swichItemText}>Guitar</Text>
                <Switch
                  value={true}
                  trackColor={{false: 'grey', true: 'green'}}
                />
              </View>
              <View style={styles.swichItem}>
                <Text style={styles.swichItemText}>Loops</Text>
                <Switch
                  value={true}
                  trackColor={{false: 'grey', true: 'green'}}
                />
              </View>
              <View style={styles.swichItem}>
                <Text style={styles.swichItemText}>Keys</Text>
                <Switch
                  value={true}
                  trackColor={{false: 'grey', true: 'green'}}
                />
              </View>
            </View>
            {/* bottom row */}
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <View style={styles.swichItem}>
                <Text style={styles.swichItemText}>Bass</Text>
                <Switch
                  value={true}
                  trackColor={{false: 'grey', true: 'green'}}
                />
              </View>
              <View style={styles.swichItem}>
                <Text style={styles.swichItemText}>Custom</Text>
                <Switch
                  value={true}
                  trackColor={{false: 'grey', true: 'green'}}
                />
              </View>
              <View style={styles.swichItem}>
                <Text style={styles.swichItemText}>Vox</Text>
                <Switch
                  value={true}
                  trackColor={{false: 'grey', true: 'green'}}
                />
              </View>
            </View>
          </View>
          {/* player section */}
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <View
              style={{
                position: 'absolute',
                left: 1,
                marginTop: 10,
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 12, color: '#000'}}>Mono Record</Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#00A651',
                  borderRadius: 100,
                  width: 30,
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: '#fff', fontSize: 10}}>Rec</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                backgroundColor: '#F8AE33',
                borderRadius: 10,
                marginStart: 10,
                marginEnd: 10,

                width: 80,
                paddingStart: 15,
                paddingEnd: 15,
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#000',

                  fontSize: 13,
                  fontWeight: 'bold',
                }}>
                05:00 MM | SS
              </Text>
            </View>

            <View
              style={{
                position: 'absolute',
                right: 1,
                alignItems: 'flex-end',
                marginTop: 10,
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 12, color: '#000'}}>Stereo Record</Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#FF0024',
                  borderRadius: 100,
                  width: 30,
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: '#fff', fontSize: 10}}>Rec</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* the player section */}
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            {/*  the red and button  */}

            {/* the player side */}
            <View>
              <Image
                style={{marginTop: 10, height: 120}}
                source={require('../../assets/imgs/player.png')}
              />
              {/* below the player */}
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 5,
                }}>
                <Text style={styles.playerText}>
                  Display Bars{`\n`}
                  {'&'} Beat
                </Text>
                <Switch
                  value={true}
                  trackColor={{false: 'grey', true: 'green'}}
                />

                <Text style={[styles.playerText, {marginStart: 5}]}>Loops</Text>
                <Switch
                  value={true}
                  trackColor={{false: 'grey', true: 'green'}}
                />
              </View>
              {/* the  media buttos  */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity style={styles.iconBg}>
                  <Ionicons name="play" size={25} color="#AC1C1C" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconBg}>
                  <Ionicons name="pause" size={25} color="#AC1C1C" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconBg}>
                  <Ionicons name="stop" size={25} color="#AC1C1C" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* the four bottons aboe the save button */}
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: 10,
            }}>
            {/* right hand side */}
            <View>
              <View style={styles.editMenuItem}>
                <Ionicons
                  name="create-outline"
                  style={{margin: 5}}
                  size={18}
                  color={'#000'}
                />
                <Text style={styles.editMenuText}>Metromone Tool</Text>
              </View>
              <View style={[styles.editMenuItem, {marginTop: 10}]}>
                <Ionicons
                  name="create-outline"
                  style={{margin: 5}}
                  size={18}
                  color={'#000'}
                />
                <Text style={styles.editMenuText}>Split Melody</Text>
              </View>
            </View>
            {/* left hand side  */}
            <RecordButton onPress={() => alert('Press to record')} />
            <View>
              <View style={styles.editMenuItem}>
                <Ionicons
                  name="mic"
                  style={{margin: 5}}
                  size={18}
                  color={'#000'}
                />
                <Text style={styles.editMenuText}>Internal Mic</Text>
              </View>
              <View
                style={[
                  styles.editMenuItem,
                  {marginTop: 10, backgroundColor: '#AC1C1C'},
                ]}>
                <Ionicons
                  name="create-outline"
                  style={{margin: 5}}
                  size={18}
                  color={'#F8AE33'}
                />
                <Text style={[styles.editMenuText, {color: '#ffffff'}]}>
                  Plugin Device
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.saveBtnText}>
            <Text style={styles.saveBtnBg}>Save</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default LoopScreen;

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
