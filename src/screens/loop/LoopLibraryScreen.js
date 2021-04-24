import React, {useState} from 'react';
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
import DropDownPicker from 'react-native-dropdown-picker';

export default function LoopLibraryScreen({navigation}) {
  const [country, setCountry] = useState('gospel');
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <Message
          navigation={navigation}
          showBackBtn={true}
          header={'Loop Library'}
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

        {/* search result */}
        <View
          style={{
            elevation: 5,
            backgroundColor: '#ffffff',
            margin: 5,
            borderRadius: 10,
          }}>
          <View style={styles.listItemRow}>
            <Ionicons
              name="square-outline"
              size={20}
              color={'#000000'}
              style={{padding: 5}}
            />
            <Text style={styles.listItem}>Jazzy Loop</Text>

            <Text style={styles.listItem}>Administrator</Text>

            <Text style={styles.listItem}>15 MB</Text>

            <Text style={styles.listItem}>03/15/2020</Text>

            <TouchableOpacity style={styles.listItemPlayBtn}>
              <Ionicons name="play" size={15} color={'#F8AE33'} />
            </TouchableOpacity>
          </View>
          <View style={styles.listItemRow}>
            <Ionicons
              name="square-outline"
              size={20}
              color={'#000000'}
              style={{padding: 5}}
            />
            <Text style={styles.listItem}>Jazzy Loop</Text>

            <Text style={styles.listItem}>Administrator</Text>

            <Text style={styles.listItem}>15 MB</Text>

            <Text style={styles.listItem}>03/15/2020</Text>

            <TouchableOpacity style={styles.listItemPlayBtn}>
              <Ionicons name="play" size={15} color={'#F8AE33'} />
            </TouchableOpacity>
          </View>
        </View>
        {/* select drop downs */}
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#A30000',
              }}>
              {' '}
              Select Recording{' '}
            </Text>

            <DropDownPicker
              items={[
                {label: 'Gospel', value: 'gospel', hidden: true},
                {label: 'Jazz', value: 'jazz'},
                {label: 'Pop', value: 'pop'},
              ]}
              defaultValue={country}
              containerStyle={{height: 40, width: 150}}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                justifyContent: 'flex-start',
              }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              onChangeItem={item => setCountry(item.value)}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#A30000',
              }}>
              {' '}
              Choose Elements{' '}
            </Text>

            <DropDownPicker
              items={[
                {label: 'Gospel', value: 'gospel', hidden: true},
                {label: 'Jazz', value: 'jazz'},
                {label: 'Pop', value: 'pop'},
              ]}
              defaultValue={country}
              containerStyle={{height: 40, width: 150}}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                justifyContent: 'flex-start',
              }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              onChangeItem={item => setCountry(item.value)}
            />
          </View>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
          }}>
          {/* right hand side */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1,
            }}>
            <View style={styles.editMenuItem}>
              <Ionicons
                name="create-outline"
                style={{margin: 5}}
                size={18}
                color={'#000'}
              />
              <Text style={styles.editMenuText}>Metromone Tool</Text>
            </View>
            <View style={[styles.editMenuItem]}>
              <Ionicons
                name="create-outline"
                style={{margin: 5}}
                size={18}
                color={'#000'}
              />
              <Text style={styles.editMenuText}>Split Melody</Text>
            </View>
          </View>
        </View>
        {/* pplayer side */}
        <View style={{flexDirection: 'row'}}>
          {/*  the red and button  */}
          <View style={{alignItems: 'center', margin: 10}}>
            <Text style={{fontWeight: 'bold', color: '#000'}}>Mone Record</Text>
            <Ionicons
              name="ellipse"
              size={35}
              color={'#00A651'}
              style={{padding: 5}}
            />
            <Text style={{fontWeight: 'bold', color: '#000'}}>
              Stereo Record
            </Text>
            <Ionicons
              name="ellipse"
              size={35}
              color={'#FF0024'}
              style={{padding: 5}}
            />
          </View>
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

        <View style={[styles.editMenuItem, {marginStart: 10}]}>
          <Ionicons
            name="create-outline"
            style={{margin: 5}}
            size={18}
            color={'#000'}
          />
          <Text style={styles.editMenuText}>Metromone Tool</Text>
        </View>

        <View style={styles.saveBtnText}>
          <Text style={styles.saveBtnBg}>Save</Text>
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

  listItem: {margin: 5},
  listItemPlayBtn: {
    width: 20,
    height: 20,
    margin: 10,
    borderWidth: 1,
    borderColor: '#F8AE33',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    paddingEnd: 5,
    paddingStart: 5,
    justifyContent: 'space-evenly',
  },
});
