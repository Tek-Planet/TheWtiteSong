import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DropDownPicker from 'react-native-dropdown-picker';
import SaveButton from '../../components/SaveButton';

function FormTools({navigation}) {
  const [select, setSelect] = useState('gospel');
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={styles.headerBG}>
        <Text style={{color: '#fff', fontSize: 16}}>Save Melody Project</Text>
        <Ionicons
          name="close"
          size={18}
          color="#A30000"
          style={{
            position: 'absolute',
            right: 5,
            backgroundColor: '#fff',
            borderRadius: 100,
            margin: 5,
          }}
        />
      </View>

      <View style={styles.fromBg}>
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
        {/* second row / song element rows*/}
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
          <Text style={styles.selectText}>Song Element :</Text>

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
        {/* Harmony name */}
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
          <Text style={styles.selectText}>Harmony Name :</Text>

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
        {/* end of harmony name  start of voice element*/}
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
          <Text style={styles.selectText}>Voice Element :</Text>

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

        <SaveButton
          testColor="#FFF"
          bGcolor="#F8AE33"
          buttonTitle="Save"
          onPress={() => alert('hello Saves')}
          style={{
            width: 100,
            marginTop: 25,
            backgroundColor: '#A30000',
            borderRadius: 10,
          }}
        />
      </View>
    </View>
  );
}

export default FormTools;

const styles = StyleSheet.create({
  fromBg: {
    width: 300,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#A30000',
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  headerBG: {
    width: 300,
    margin: 10,
    marginBottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    backgroundColor: '#AE1F1F',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },

  buttonText: {
    textAlign: 'center',
    color: '#fff',
    margin: 5,
    padding: 5,
    fontSize: 18,
  },

  selectText: {
    fontWeight: 'bold',
    color: '#A30000',
    marginEnd: 5,
    width: 110,
    textAlign: 'right',
    marginTop: 20,
  },
});
