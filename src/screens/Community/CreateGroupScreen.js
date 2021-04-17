import React, {useState} from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  Switch,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Message from '../../components/Message';

const CreateGroupScreen = ({navigation}) => {
  const [selectedGenre, setSelectedGenre] = useState();
  const [selectedModerators, setSelectedModerators] = useState();

  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <Message
        navigation={navigation}
        header="Home > Create Group"
        showBackBtn
      />
      {/* Main Container */}
      <View style={styles.container}>
        {/* Group Name Container */}
        <View>
          <Text style={styles.heading}>Group Name*</Text>
          <TextInput
            placeholder="Enter the Group Name"
            placeholderTextColor="grey"
            style={styles.inputBox}
          />
        </View>
        {/* End of Group Name Container */}

        {/* Group Description Container */}
        <View>
          <Text style={styles.heading}>Group Description*</Text>
          <TextInput
            placeholder="Enter the Group Description"
            placeholderTextColor="grey"
            style={styles.inputBox}
          />
        </View>
        {/* End of Group Description Container */}

        {/* Music Genre Container */}
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Text style={styles.heading}>Age*</Text>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: '#AC1C1C',
              }}>
              <Picker
                selectedAge={selectedGenre}
                style={{width: '100%'}}
                mode="dropdown"
                dropdownIconColor="#AC1C1C"
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedGenre(itemValue)
                }>
                <Picker.Item
                  style={styles.pickerItem}
                  label="-Select-"
                  value=""
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="Rock"
                  value="rock"
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="Jazz"
                  value="jazz"
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="Pop"
                  value="pop"
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="Hip-Pop"
                  value="hip-pop"
                />
              </Picker>
            </View>
          </View>
        </View>
        {/* End of Music Genre Container */}

        {/* Moderators Container */}
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Text style={styles.heading}>Select Moderators*</Text>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: '#AC1C1C',
              }}>
              <Picker
                selectedState={selectedModerators}
                style={{width: '100%'}}
                mode="dropdown"
                dropdownIconColor="#AC1C1C"
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedModerators(itemValue)
                }>
                <Picker.Item
                  style={styles.pickerItem}
                  label="-Select-"
                  value=""
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="Abiola"
                  value=""
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="Shefiu"
                  value=""
                />
                <Picker.Item style={styles.pickerItem} label="Test" value="" />
              </Picker>
            </View>
          </View>
        </View>
        {/* End of Moderators Container */}

        {/* Enable Sharing Container */}
        <View style={styles.sharingContainer}>
          <Text style={styles.heading}>Enable Sharing:</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingBottom: 20,
              paddingTop: 20,
              paddingLeft: 10,
              paddingRight: 10,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Switch
                value={true}
                trackColor={{false: 'grey', true: 'green'}}
              />
              <Image
                style={{width: 30, height: 30, marginLeft: 10}}
                source={require('../../assets/imgs/icons/facebook-icon.png')}
              />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Switch
                value={true}
                trackColor={{false: 'grey', true: 'green'}}
              />
              <Image
                style={{width: 30, height: 30, marginLeft: 10}}
                source={require('../../assets/imgs/icons/instagram-icon.png')}
              />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Switch
                value={true}
                trackColor={{false: 'grey', true: 'green'}}
              />
              <Image
                style={{width: 30, height: 30, marginLeft: 10}}
                source={require('../../assets/imgs/icons/twitter-icon.png')}
              />
            </View>
          </View>
        </View>
        {/* End of Enable Sharing Container */}

        {/* save botton */}
        <View
          style={{
            backgroundColor: '#AC1C1C',
            marginTop: 40,
            borderRadius: 50,
            padding: 10,
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
      {/* End of Main Container */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 16,
    color: '#AC1C1C',
    marginTop: 10,
    fontWeight: 'bold',
  },
  inputBox: {
    borderTopWidth: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: '#AC1C1C',
    color: '#000',
  },
  pickerItem: {backgroundColor: '#fff', color: '#000'},
  sharingContainer: {
    padding: 10,
    borderColor: 'grey',
    borderRadius: 5,
    marginTop: 20,
    elevation: 2,
  },
});

export default CreateGroupScreen;
