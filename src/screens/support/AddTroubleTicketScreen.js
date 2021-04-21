import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import Message from '../../components/Message';
import {Picker} from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AddTroubleTicketScreen = ({navigation}) => {
  const [selectedGroup, setSelectedGroup] = useState();
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <Message
        navigation={navigation}
        header="Home > Support > Add Trouble Ticket"
        showBackBtn={true}
      />
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#e9ecef',
            padding: 10,
            borderRadius: 5,
            margin: 20,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 16, fontWeight: 'bold', paddingRight: 10}}>
              Resolved Tickets
            </Text>
            <View
              style={{
                backgroundColor: 'red',
                width: 40,
                height: 40,
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>
                4
              </Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 16, fontWeight: 'bold', paddingRight: 10}}>
              Pending Tickets
            </Text>
            <View
              style={{
                backgroundColor: '#2f9e44',
                width: 40,
                height: 40,
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>
                1
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#5f3dc4',
            padding: 10,
            paddingLeft: 20,
            paddingRight: 20,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: '#fff',
              borderRadius: 20,
            }}></View>
          <Text style={{color: '#fff', fontSize: 16}}>Add Trouble Tickets</Text>
          <Ionicons name="chevron-down" size={30} color={'#fff'} />
        </View>

        <View style={{padding: 20}}>
          <View>
            <Text style={styles.heading}>Priority*</Text>
            <View
              style={{
                borderBottomWidth: 3,
                borderBottomColor: '#AC1C1C',
              }}>
              <Picker
                selectedCity={selectedGroup}
                style={{width: '100%'}}
                mode="dropdown"
                dropdownIconColor="#AC1C1C"
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedGroup(itemValue)
                }>
                <Picker.Item
                  style={styles.pickerItem}
                  label="-Select-"
                  value=""
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="IOS"
                  value="ios"
                />
              </Picker>
            </View>
          </View>

          <View>
            <Text style={styles.heading}>Subject*</Text>
            <View
              style={{
                borderBottomWidth: 3,
                borderBottomColor: '#AC1C1C',
              }}>
              <Picker
                selectedCity={selectedGroup}
                style={{width: '100%'}}
                mode="dropdown"
                dropdownIconColor="#AC1C1C"
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedGroup(itemValue)
                }>
                <Picker.Item
                  style={styles.pickerItem}
                  label="-Select-"
                  value=""
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="IOS"
                  value="ios"
                />
              </Picker>
            </View>
          </View>

          <TextInput
            placeholder="Enter Description"
            multiline
            label="Description"
            numberOfLines={5}
            mode="outlined"
            theme={{colors: {primary: '#AC1C1C', background: '#fff'}}}
            style={{
              margin: 20,
            }}
          />

          {/* save button */}
          <View
            style={{
              backgroundColor: '#AC1C1C',
              marginTop: 40,
              borderRadius: 50,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: '#fff',
                padding: 10,
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Save
            </Text>
          </View>
          {/* End of save botton */}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 16,
    color: '#AC1C1C',
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: '#AC1C1C',
    color: '#AC1C1C',
    marginBottom: 10,
  },
  pickerItem: {backgroundColor: '#fff', color: '#000'},
});

export default AddTroubleTicketScreen;
