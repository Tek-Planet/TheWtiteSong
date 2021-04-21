import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Switch,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Message from '../components/Message';
import SaveButton from '../components/SaveButton';

function InstrumentTunerScreen({navigation}) {
  const [digital, setDigital] = useState(true);
  const [analog, setAnalog] = useState(false);

  return (
    <SafeAreaView>
      <ScrollView>
        <Message header={'Instrument Tuner'} />
        <View style={styles.userInfoSection}>
          <Text style={{textAlign: 'center', paddingStart: 20, paddingEnd: 20}}>
            Select your Module then Start Button to Start Tuning Instruments
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginEnd: 10,
            }}>
            <Ionicons
              onPress={() => alert('Like')}
              name="square"
              size={25}
              color={'#00A651'}
              style={{padding: 5}}
            />
            <Text style={{}}>Simple Configuration View</Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons
              onPress={() => alert('Like')}
              name="square-outline"
              size={25}
              color={'#000'}
              style={{padding: 5}}
            />
            <Text style={{}}>Harmonic View</Text>
          </View>
        </View>

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
        {/*  the player section */}
        <View style={styles.userInfoSection}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={{fontWeight: 'bold'}}>Tuning Frequency</Text>
              <Text style={{marginStart: 5, borderWidth: 1, padding: 3}}>
                440Hz
              </Text>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{color: '#00A651', fontWeight: 'bold'}}>
                Note Stream:
              </Text>
              <Text
                style={{
                  marginStart: 5,
                  borderWidth: 1,
                  padding: 2,
                  color: '#AC1C1C',
                  backgroundColor: '#ccc',
                }}>
                C Sharp
              </Text>
            </View>
          </View>
          {/* meter */}
          {digital && (
            <Image
              resizeMode={'contain'}
              style={{margin: 10}}
              source={require('../assets/imgs/digital.png')}
            />
          )}
          {analog && (
            <Image
              resizeMode={'contain'}
              style={{margin: 10}}
              source={require('../assets/imgs/analog.png')}
            />
          )}
          {/* switch */}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={styles.swichItem}>
              <Text style={styles.swichItemText}>Digital Meter</Text>
              <Switch
                value={digital}
                onValueChange={val => [setDigital(val), setAnalog(!val)]}
                trackColor={{false: 'grey', true: 'green'}}
              />
            </View>

            <View style={styles.swichItem}>
              <Text style={styles.swichItemText}>Analog Meter</Text>
              <Switch
                value={analog}
                onValueChange={val => [setAnalog(val), setDigital(!val)]}
                trackColor={{false: 'grey', true: 'green'}}
              />
            </View>
          </View>
        </View>
        <SaveButton buttonTitle={'Save'} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default InstrumentTunerScreen;

const styles = StyleSheet.create({
  userInfoSection: {
    margin: 5,
    padding: 10,
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 5,
  },
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
  swichItem: {
    flexDirection: 'row',
    marginEnd: 10,
    marginStart: 10,
  },
  swichItemText: {
    color: '#000000',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
