import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import Message from '../../components/Message';
import {Picker} from '@react-native-picker/picker';

const NewTopicScreen = () => {
  const [selectedGroup, setSelectedGroup] = useState();
  return (
    <ScrollView>
      <Message header="Home > Create New Topic" showBackBtn={true} />
      <View style={{padding: 20, backgroundColor: '#fff'}}>
        <View>
          <Text style={styles.heading}>Topic Name:</Text>
          <TextInput
            placeholder="Enter the Topic Name"
            placeholderTextColor="grey"
            theme={{colors: {primary: '#AC1C1C', background: '#fff'}}}
            style={styles.input}
          />
        </View>
        <View>
          <Text style={styles.heading}>Subject:</Text>
          <TextInput
            placeholder="Enter the Subject Title"
            placeholderTextColor="grey"
            theme={{colors: {primary: '#AC1C1C', background: '#fff'}}}
            style={styles.input}
          />
        </View>

        <View>
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
        </View>
        <View>
          <Text style={styles.heading}>Select Group:</Text>
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
              <Picker.Item style={styles.pickerItem} label="IOS" value="ios" />
            </Picker>
          </View>
        </View>
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

export default NewTopicScreen;
