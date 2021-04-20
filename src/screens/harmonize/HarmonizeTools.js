import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Switch,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Message from '../../components/Message';
import DropDownPicker from 'react-native-dropdown-picker';
import MySongsHeader from '../../components/MySongsHeader';
import SingButton from '../../components/SaveButton';

function HarmonizeTools({navigation}) {
  const [select, setSelect] = useState('gospel');
  return (
    <SafeAreaView>
      <ScrollView>
        <Message
          navigation={navigation}
          showBackBtn={true}
          header={'Harmonize Tool'}
        />
        <View style={{alignItems: 'center'}}>
          {/* first row */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.selectText}>Song Title :</Text>

            <View>
              <DropDownPicker
                items={[
                  {label: 'Select', value: 'gospel', hidden: true},
                  {label: 'Jazz', value: 'jazz'},
                  {label: 'Pop', value: 'pop'},
                ]}
                defaultValue={select}
                containerStyle={{height: 40, width: 150}}
                style={{backgroundColor: '#fafafa'}}
                itemStyle={{
                  justifyContent: 'flex-start',
                }}
                arrowColor={'#A30000'}
                arrowSize={18}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={item => setSelect(item.value)}
              />
              <View style={{borderWidth: 1, borderColor: '#A30000'}} />
            </View>
          </View>
          {/* second row */}
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
            <Text style={styles.selectText}>Choose Melody :</Text>

            <View>
              <DropDownPicker
                items={[
                  {label: 'Select', value: 'gospel', hidden: true},
                  {label: 'Jazz', value: 'jazz'},
                  {label: 'Pop', value: 'pop'},
                ]}
                defaultValue={select}
                containerStyle={{height: 40, width: 150}}
                style={{backgroundColor: '#fafafa'}}
                itemStyle={{
                  justifyContent: 'flex-start',
                }}
                arrowColor={'#A30000'}
                arrowSize={18}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={item => setSelect(item.value)}
              />
              <View style={{borderWidth: 1, borderColor: '#A30000'}} />
            </View>
          </View>
        </View>
        <MySongsHeader />
        <SingButton
          testColor="#A30000"
          bGcolor="#F8AE33"
          buttonTitle="Press to Sing into the App"
          onPress={() => alert('hello')}
          style={{
            margin: 5,
            backgroundColor: '#F8AE33',
            borderRadius: 10,
          }}
        />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ImageBackground
            style={{
              width: 350,
              height: 150,

              marginBottom: 10,
            }}
            source={require('../../assets/imgs/harmo.png')}
          />
        </View>
        {/* switch */}
        <View
          style={{
            elevation: 5,
            alignItems: 'center',
            backgroundColor: '#fff',
            padding: 5,
            borderRadius: 5,
            marginTop: -10,
          }}>
          {/* top row */}
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View style={styles.swichItem}>
              <Text style={styles.swichItemText}>Melody</Text>
              <Switch
                value={true}
                trackColor={{false: 'grey', true: 'green'}}
              />
            </View>
            <View style={styles.swichItem}>
              <Text style={styles.swichItemText}>Voice 1</Text>
              <Switch
                value={true}
                trackColor={{false: 'grey', true: 'green'}}
              />
            </View>
            <View style={styles.swichItem}>
              <Text style={styles.swichItemText}>Voice 2</Text>
              <Switch
                value={true}
                trackColor={{false: 'grey', true: 'green'}}
              />
            </View>
          </View>
        </View>
        <Text
          style={{color: '#000', fontSize: 18, margin: 10, fontWeight: 'bold'}}>
          Export To:
        </Text>
        <View
          style={{
            padding: 10,
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            backgroundColor: '#301CAC',
            margin: 5,
            borderRadius: 10,
          }}>
          <Text style={[styles.exportTitle, {width: 130}]}>Melody Name</Text>

          <Text style={[styles.exportTitle, {width: 80}]}>Genre</Text>

          <Text style={[styles.exportTitle, {width: 80}]}>File Size</Text>

          <View style={{alignSelf: 'flex-end'}}>
            <Ionicons
              name="information-circle-outline"
              size={25}
              color="#F8AE33"
              style={{marginEnd: 20}}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
          }}>
          <View style={[styles.exportTextBg, {width: 110}]}>
            <Text style={[styles.exportText]}>Love Universe</Text>
          </View>

          <View style={[styles.exportTextBg, {width: 70}]}>
            <Text style={[styles.exportText]}>Gospel</Text>
          </View>

          <View style={[styles.exportTextBg, {width: 50}]}>
            <Text style={[styles.exportText]}>5MB</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity style={styles.iconBg}>
              <Ionicons name="play" size={15} color="#AC1C1C" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBg}>
              <Ionicons name="pause" size={15} color="#AC1C1C" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HarmonizeTools;

const styles = StyleSheet.create({
  selectText: {
    fontWeight: 'bold',
    color: '#A30000',
    marginEnd: 5,
    width: 110,
    textAlign: 'right',
    marginTop: 20,
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
  exportTitle: {
    color: '#fff',
    fontWeight: 'bold',
    marginEnd: 5,
  },

  exportTextBg: {
    padding: 5,
    margin: 10,
    backgroundColor: '#AE1F1F',
  },
  exportText: {
    color: '#fff',
    textAlign: 'center',
  },
  iconBg: {
    margin: 5,
    borderRadius: 10,
    width: 20,
    height: 20,
    padding: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 5,
    alignContent: 'center',
  },
});
