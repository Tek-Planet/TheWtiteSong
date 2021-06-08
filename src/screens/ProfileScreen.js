import React, {useState} from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';

const ProfileScreen = () => {
  // RadioButton State for Gender
  const [gender, setGender] = useState('male');

  const [selectedAge, setSelectedAge] = useState();
  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedState, setSelectedState] = useState();
  const [selectedCity, setSelectedCity] = useState();
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <ScrollView>
      {/* Main Container */}
      <View style={styles.container}>
        {/* Add Profile Picture Container */}
        <View style={styles.profilePicContainer}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.avatarContainer}>
              <Image
                style={{width: 60, height: 60}}
                source={require('../assets/imgs/icons/profile-icon.png')}
              />
            </View>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: '#F8AE33',
                alignSelf: 'flex-end',
                marginLeft: -30,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{width: 20, height: 20}}
                source={require('../assets/imgs/icons/black-pen-icon.png')}
              />
            </TouchableOpacity>
          </View>
          <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 10}}>
            Add Profile Picture
          </Text>
        </View>
        {/* End of Add Profile Picture Container */}

        {/* Gender Container */}
        <View>
          <Text style={styles.heading}>Gender</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingTop: 10,
              paddingBottom: 20,
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
              onPress={() => setGender('male')}>
              <RadioButton
                color="#AC1C1C"
                value="male"
                status={gender === 'male' ? 'checked' : 'unchecked'}
                onPress={() => setGender('male')}
              />
              <Text style={{fontSize: 16}}>Male</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
              onPress={() => setGender('female')}>
              <RadioButton
                color="#AC1C1C"
                value="female"
                status={gender === 'female' ? 'checked' : 'unchecked'}
                onPress={() => setGender('female')}
              />
              <Text style={{fontSize: 16}}>Female</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* End of Gender Container */}

        {/* First Name Container */}
        <View>
          <Text style={styles.heading}>First Name*</Text>
          <TextInput
            placeholder="Enter Your First Name"
            placeholderTextColor="grey"
            style={styles.inputBox}
          />
        </View>
        {/* End of First Name Container */}

        {/* Last / Surname Name Container */}
        <View>
          <Text style={styles.heading}>Last / Surname*</Text>
          <TextInput
            placeholder="Enter Your Last / Surname"
            placeholderTextColor="grey"
            style={styles.inputBox}
          />
        </View>
        {/* End of Last / Surname Name Container */}

        {/* Age and Country Container */}
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 0.4}}>
            <Text style={styles.heading}>Age*</Text>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: '#AC1C1C',
              }}>
              <Picker
                selectedValue={selectedAge}
                style={{width: '100%'}}
                mode="dropdown"
                dropdownIconColor="#AC1C1C"
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedAge(itemValue)
                }>
                <Picker.Item style={styles.pickerItem} label="16" value="16" />
                <Picker.Item style={styles.pickerItem} label="17" value="17" />
                <Picker.Item style={styles.pickerItem} label="18" value="18" />
                <Picker.Item style={styles.pickerItem} label="19" value="19" />
                <Picker.Item style={styles.pickerItem} label="20" value="20" />
              </Picker>
            </View>
          </View>
          <View style={{flex: 0.6, marginLeft: 50}}>
            <Text style={styles.heading}>Country*</Text>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: '#AC1C1C',
              }}>
              <Picker
                selectedCountry={selectedCountry}
                style={{width: '100%'}}
                mode="dropdown"
                dropdownIconColor="#AC1C1C"
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedCountry(itemValue)
                }>
                <Picker.Item
                  style={styles.pickerItem}
                  label="Country"
                  value="country"
                />
              </Picker>
            </View>
          </View>
        </View>
        {/* End of Age and Country Container */}

        {/* Email Container */}
        <View>
          <Text style={styles.heading}>Email*</Text>
          <TextInput
            placeholder="Enter Your Email Address"
            placeholderTextColor="grey"
            style={styles.inputBox}
          />
        </View>
        {/* End of Email Container */}

        {/* State and City Container */}
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 0.5}}>
            <Text style={styles.heading}>State*</Text>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: '#AC1C1C',
              }}>
              <Picker
                selectedState={selectedState}
                style={{width: '100%'}}
                mode="dropdown"
                dropdownIconColor="#AC1C1C"
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedState(itemValue)
                }>
                <Picker.Item
                  style={styles.pickerItem}
                  label="State"
                  value="state"
                />
              </Picker>
            </View>
          </View>
          <View style={{flex: 0.5, marginLeft: 30}}>
            <Text style={styles.heading}>City*</Text>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: '#AC1C1C',
              }}>
              <Picker
                selectedCity={selectedCity}
                style={{width: '100%'}}
                mode="dropdown"
                dropdownIconColor="#AC1C1C"
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedCity(itemValue)
                }>
                <Picker.Item
                  style={styles.pickerItem}
                  label="City"
                  value="city"
                />
              </Picker>
            </View>
          </View>
        </View>
        {/* End of State and City Container */}

        {/* Zip/Postal Code Container */}
        <View>
          <Text style={styles.heading}>Zip / Postal Code*</Text>
          <TextInput
            placeholder="Enter Zip / Postal Code"
            placeholderTextColor="grey"
            style={styles.inputBox}
          />
        </View>
        {/* End of Zip/Postal Code Container */}

        {/* Address 1 Container */}
        <View>
          <Text style={styles.heading}>Address 1</Text>
          <TextInput
            placeholder="Enter Address 1"
            placeholderTextColor="grey"
            style={styles.inputBox}
          />
        </View>
        {/* End of Address 1 Container */}

        {/* Address 2 Container */}
        <View>
          <Text style={styles.heading}>Address 2</Text>
          <TextInput
            placeholder="Enter Address 2"
            placeholderTextColor="grey"
            style={styles.inputBox}
          />
        </View>
        {/* End of Address 2 Container */}

        {/* Select Language Container */}
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 0.6}}>
            <Text style={styles.heading}>Select Language</Text>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: '#AC1C1C',
              }}>
              <Picker
                selectedLanguage={selectedLanguage}
                style={{width: '100%'}}
                mode="dropdown"
                dropdownIconColor="#AC1C1C"
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage(itemValue)
                }>
                <Picker.Item
                  style={styles.pickerItem}
                  label="Select Language"
                  value="select language"
                />
              </Picker>
            </View>
          </View>
        </View>
        {/* End of Select Language Container */}

        {/* save botton */}
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
      {/* End of Main Container */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  avatarContainer: {
    backgroundColor: '#AC1C1C',
    borderRadius: 50,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 16,
    color: '#AC1C1C',
    marginTop: 10,
    fontWeight: 'bold',
  },
  profilePicContainer: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    margin: 30,
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
});

export default ProfileScreen;
