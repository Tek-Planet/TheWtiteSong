import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Text,
  Switch,
  ImageBackground,
  ScrollView,
} from 'react-native';
import Message from '../../components/Message';
import SingButton from '../../components/SaveButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DropDownPicker from 'react-native-dropdown-picker';

function PressansSingScreen({navigation}) {
  const [select, setSelect] = useState('gospel');

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView>
        <Message
          navigation={navigation}
          header={'Harmonize Tool'}
          showBackBtn={true}
        />

        <SingButton
          testColor="#000"
          bGcolor="#F8AE33"
          buttonTitle="Press to Sing into the App"
          onPress={() => alert('hello')}
          style={{
            margin: 5,
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
            elevation: 5,
          }}
        />

        <View style={styles.row}>
          <TouchableOpacity style={styles.iconBg}>
            <Ionicons name="play" size={25} color="#AC1C1C" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBg}>
            <Ionicons name="stop" size={25} color="#AC1C1C" />
          </TouchableOpacity>
        </View>

        <ImageBackground
          style={{
            width: 350,
            height: 50,
            marginBottom: 10,
            marginTop: 10,
          }}
          source={require('../../assets/imgs/harmosmall.png')}
        />
        <View style={styles.swichItem}>
          <Text style={styles.swichItemText}>Melody</Text>
          <Switch value={true} trackColor={{false: 'grey', true: 'green'}} />
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
              borderRadius: 10,
              padding: 5,
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
        <View
          style={{
            margin: 20,
            borderWidth: 1,
            borderRadius: 10,
            height: 100,
            borderColor: '#AC1C1C',
          }}>
          <Text
            style={{
              backgroundColor: '#fff',
              color: '#AC1C1C',
              position: 'absolute',
              margin: 10,
              top: -20,
            }}>
            {' '}
            Vocal Key Detector{' '}
          </Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <Text style={styles.selectText}>Select Muscical keys</Text>

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

        <View
          style={{
            flexDirection: 'row',
            margin: 10,
            justifyContent: 'space-evenly',
          }}>
          <SingButton
            testColor="#fff"
            bGcolor="#F8AE33"
            buttonTitle="Save"
            onPress={() => alert('save')}
            style={{
              margin: 5,
              backgroundColor: '#A30000',
              borderRadius: 50,
              elevation: 5,
              width: 150,
            }}
          />
          <SingButton
            testColor="#fff"
            bGcolor="#F8AE33"
            buttonTitle="Save Template"
            onPress={() => alert('Save Template')}
            style={{
              margin: 5,
              backgroundColor: '#A30000',
              borderRadius: 50,
              elevation: 5,
              width: 150,
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default PressansSingScreen;

const styles = StyleSheet.create({
  row: {
    alignItems: 'center',
    width: 150,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
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
  selectText: {
    fontWeight: 'bold',
    color: '#A30000',
    margin: 10,

    textAlign: 'center',
    marginTop: 20,
  },
});
