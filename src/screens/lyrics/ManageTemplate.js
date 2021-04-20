import React, {useState} from 'react';
import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import Message from '../../components/Message';
import DropDownPicker from 'react-native-dropdown-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';

function ManageTemplate({navigation}) {
  const [country, setCountry] = useState('select');
  const [template, setTemplate] = useState([
    {
      key: '001',
      title: 'Template 1',
    },
    {
      key: '002',
      title: 'Another Tempplate',
    },
    {
      key: '003',
      title: 'Dedication',
    },
  ]);

  const listItem = item => {
    return (
      <View
        key={item.key.toString()}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginStart: 10,
          marginEnd: 20,
          marginBottom: 10,
        }}>
        <View>
          <Ionicons
            name="square-outline"
            size={20}
            color={'#AC1C1C'}
            style={{margin: 10}}
          />
        </View>
        <View style={{flex: 1}}>
          <View style={styles.listItemBg}>
            <View style={styles.row}>
              {/* row one */}
              <View style={styles.subRow}>
                <Text style={styles.titleText}>Title: </Text>
                <Text style={styles.text}>{item.title}</Text>
              </View>

              {/* rew twwo */}
              <View style={styles.subRow}>
                <Text style={styles.titleText}>Updated:</Text>
                <Text style={styles.text}>03/12/2020</Text>
              </View>
            </View>

            {/* row two */}

            <View style={styles.row}>
              {/* row one */}
              <View style={styles.subRow}>
                <Text style={styles.titleText}>Details: </Text>
                <Text style={styles.text}>
                  Verses (3) Chorus (2), Bridge (1)
                </Text>
              </View>
            </View>
          </View>
          {/* button section */}
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <View style={[styles.saveBtnBg, {marginEnd: -10}]}>
              <Ionicons
                name="create-outline"
                size={20}
                color={'#FFFFFF'}
                style={{padding: 5}}
              />
              <Text style={styles.saveBtnText}>Edit</Text>
            </View>

            <View style={[styles.saveBtnBg, {backgroundColor: '#F8AE33'}]}>
              <Ionicons
                name="share-outline"
                size={20}
                color={'#AC1C1C'}
                style={{padding: 5}}
              />
              <Text style={[styles.saveBtnText, {color: '#AC1C1C'}]}>
                Export
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <Message
          navigation={navigation}
          header={'Lyrics Manager > Manage Template'}
          showMsg={false}
          showBackBtn={true}
        />

        <View style={{margin: 20, marginStart: 10, marginTop: 5}}>
          <Text
            style={{fontWeight: 'bold', color: '#A30000', marginBottom: 10}}>
            {' '}
            Select{' '}
          </Text>

          <DropDownPicker
            searchable={true}
            items={[
              {label: 'Custom Template', value: 'select', hidden: true},
              {label: 'Gospel', value: 'gospel'},
              {label: 'Jazz', value: 'jazz'},
              {label: 'Pop', value: 'pop'},
            ]}
            defaultValue={country}
            containerStyle={{height: 40}}
            style={{backgroundColor: '#fafafa'}}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            onChangeItem={item => setCountry(item.value)}
          />
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              margin: 20,
              marginStart: 10,
              marginTop: -5,
            }}>
            <Ionicons
              name="square"
              size={20}
              color={'#AC1C1C'}
              style={{padding: 5}}
            />
            <Text style={{fontWeight: 'bold', margin: 5}}>
              Select / Select All |{' '}
            </Text>

            <Ionicons
              name="trash"
              size={20}
              color={'#AC1C1C'}
              style={{padding: 5}}
            />

            <Text style={{fontWeight: 'bold', margin: 5}}>Delete</Text>
          </View>
        </View>
        {/* list item */}

        {template.map(item => {
          return listItem(item);
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

export default ManageTemplate;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    margin: 5,
    justifyContent: 'space-evenly',
  },
  subRow: {
    flex: 1,
    flexDirection: 'row',
  },
  titleText: {
    textAlign: 'left',
    width: 60,
    fontWeight: 'bold',
    fontSize: 15,
    color: '#000',
  },
  text: {
    flex: 1,
    fontSize: 15,
    marginEnd: 5,
  },

  saveBtnBg: {
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#AC1C1C',
    flex: 0.5,
  },

  saveBtnText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    padding: 5,
  },
  listItemBg: {
    backgroundColor: '#C1BFBF',
  },
});
