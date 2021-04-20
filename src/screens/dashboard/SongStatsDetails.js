import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Message from '../../components/Message';
import Ionicons from 'react-native-vector-icons/Ionicons';

function SongStatsDetails({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView>
        <Message header={'Song Statistics'} />
        {/* writer box section */}
        <View
          style={{
            margin: 5,
            marginTop: 10,
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            borderColor: '#AC1C1C',
          }}>
          {/* the writer name section */}
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text
              style={{
                color: '#000',
                fontWeight: 'bold',
                margin: 5,
              }}>
              Writer(s)
            </Text>
            <View style={{margin: 5}}>
              <Text style={styles.writersName}>Writter Name</Text>
              <Text style={styles.writersName}>Contributor 1</Text>
              <Text style={styles.writersName}>Contributor 2</Text>
            </View>
          </View>
          {/* share section */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
              paddingEnd: 20,
              paddingStart: 20,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name="share-social" size={20} color="#000" />
              <Text style={{color: '#000', marginStart: 5, marginEnd: 5}}>
                Share
              </Text>
              <Text style={{color: '#3C328A'}}>195</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name="thumbs-up" size={20} color="#000" />
              <Text style={{color: '#000', marginStart: 5, marginEnd: 5}}>
                Likes
              </Text>
              <Text style={{color: '#328A3C'}}>195</Text>
            </View>
          </View>
        </View>
        {/* insert loop into song */}
        <View style={{backgroundColor: '#707070', padding: 5, marginTop: 5}}>
          <Text
            style={{color: '#F8AE33', textAlign: 'center', fontWeight: 'bold'}}>
            Insert Loop Into Song
          </Text>
        </View>
        {/* player section */}
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
            <Ionicons name="play" size={25} color="#AC1C1C" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.iconBg, {backgroundColor: '#fff'}]}>
            <Ionicons name="pause" size={25} color="#AC1C1C" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.iconBg, {backgroundColor: '#fff'}]}>
            <Ionicons name="stop" size={25} color="#AC1C1C" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 20,
          }}>
          <TouchableOpacity
            style={[
              styles.iconBg,
              {backgroundColor: '#AC1C1C', borderRadius: 100},
            ]}>
            <Ionicons name="american-football" size={15} color="#fff" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SongStatsDetails;

const styles = StyleSheet.create({
  iconBg: {
    margin: 3,
    borderRadius: 5,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AC1C1C',
  },
  writersName: {color: '#AC1C1C'},
});
