import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Switch,
  TouchableOpacity,
  Image,
} from 'react-native';

import {RadioButton} from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import {Picker} from '@react-native-picker/picker';

import Message from '../components/Message';

const SetttingsScreen = () => {
  // Toggle Switch State
  const [is2FAEnabled, setIs2FAEnabled] = useState(true);
  // ToggleSwitch handler
  const toggleSwitch = () => setIs2FAEnabled(previousState => !previousState);

  // RadioButton State for Notify Container
  const [notify, setNotify] = useState('text');

  // Picker State for the Platform
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [selectedFrequency, setSelectedFrequency] = useState('');

  return (
    <ScrollView>
      <Message header="Home > Details" />

      {/* First Container */}
      <View style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.heading}>Subscriber ID:</Text>
          <Text style={[styles.textLight, {marginLeft: 30}]}>US2394-212</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.heading}>Music Genre:</Text>
          <Text style={styles.textLight}>Gospel</Text>
          <Text style={styles.heading}>Genre Mode:</Text>
          <Text style={styles.textLight}>Single</Text>
        </View>
      </View>

      {/* Second Container */}
      <View style={styles.container}>
        <Text style={styles.heading}>Security Settings</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={[styles.textLight, {color: 'black'}]}>
            Pin Code Login
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Switch
              value={is2FAEnabled}
              trackColor={{false: 'grey', true: 'green'}}
              onValueChange={toggleSwitch}
            />
            <Switch
              style={{marginLeft: 30}}
              value={false}
              trackColor={{false: 'grey', true: 'green'}}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={[styles.textLight, {color: 'black'}]}>
            2-Factor Authentication
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingTop: 10,
              paddingBottom: 10,
            }}>
            <Switch value={true} trackColor={{false: 'grey', true: 'green'}} />
            <Switch
              style={{marginLeft: 30}}
              value={false}
              trackColor={{false: 'grey', true: 'green'}}
            />
          </View>
        </View>
      </View>
      {/* Third Container */}
      <View style={styles.container}>
        <Text style={styles.heading}>Music Settings</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={[styles.textLight, {color: 'black'}]}>
            Allow Exploit Language
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Switch value={true} trackColor={{false: 'grey', true: 'green'}} />
            <Switch
              style={{marginLeft: 30}}
              value={false}
              trackColor={{false: 'grey', true: 'green'}}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 15,
            marginBottom: 10,
            marginLeft: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={{marginRight: 5, width: 20, height: 20}}
            source={require('../assets/imgs/icons/red-pen-icon.png')}
          />
          <Text style={[styles.textLight, {color: 'black'}]}>
            Edit Word List
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={[styles.textLight, {color: 'black'}]}>Song Sharing</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingTop: 10,
              paddingBottom: 10,
            }}>
            <Switch value={true} trackColor={{false: 'grey', true: 'green'}} />
            <Switch
              style={{marginLeft: 30}}
              value={false}
              trackColor={{false: 'grey', true: 'green'}}
            />
          </View>
        </View>
        <View style={{paddingLeft: 30, paddingRight: 30}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={{marginRight: 5, width: 20, height: 20}}
                source={require('../assets/imgs/icons/local-contact-icon.png')}
              />
              <Text style={[styles.textLight, {color: 'black'}]}>
                Local contact
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={{marginRight: 5, width: 20, height: 20}}
                source={require('../assets/imgs/icons/fb-icon.png')}
              />
              <Text style={[styles.textLight, {color: 'black'}]}>
                Facebook Friends
              </Text>
            </View>
          </View>
          <View style={{marginTop: 10}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={{marginRight: 5, width: 20, height: 20}}
                source={require('../assets/imgs/icons/youtube-icon.png')}
              />
              <Text style={[styles.textLight, {color: 'black'}]}>Youtube</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={[styles.textLight, {color: 'black'}]}>Bible Helper</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingTop: 10,
              paddingBottom: 10,
            }}>
            <Switch value={true} trackColor={{false: 'grey', true: 'green'}} />
            <Switch
              style={{marginLeft: 30}}
              value={false}
              trackColor={{false: 'grey', true: 'green'}}
            />
          </View>
        </View>
      </View>
      {/* End of Third Container */}

      {/* Storage Settings Container */}
      <View style={styles.container}>
        <Text style={styles.heading}>Storage Settings</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={[styles.textLight, {color: 'black'}]}>
            Save Songs to Device
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Switch value={true} trackColor={{false: 'grey', true: 'green'}} />
            <Switch
              style={{marginLeft: 30}}
              value={false}
              trackColor={{false: 'grey', true: 'green'}}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={[styles.textLight, {color: 'black'}]}>
            Save Songs to Web Portal
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingTop: 10,
              paddingBottom: 10,
            }}>
            <Switch value={true} trackColor={{false: 'grey', true: 'green'}} />
            <Switch
              style={{marginLeft: 30}}
              value={false}
              trackColor={{false: 'grey', true: 'green'}}
            />
          </View>
        </View>
      </View>
      {/* End of Storage Settings Container */}
      {/* Alert Settings Container */}
      <View style={styles.container}>
        <Text style={styles.heading}>Alert Settings</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={[styles.textLight, {color: 'black'}]}>
            Storage Space Low
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Switch value={true} trackColor={{false: 'grey', true: 'green'}} />
            <Switch
              style={{marginLeft: 30}}
              value={false}
              trackColor={{false: 'grey', true: 'green'}}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={[styles.textLight, {color: 'black'}]}>
            Suspicious Song Sharing
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingTop: 10,
              paddingBottom: 10,
            }}>
            <Switch value={true} trackColor={{false: 'grey', true: 'green'}} />
            <Switch
              style={{marginLeft: 30}}
              value={false}
              trackColor={{false: 'grey', true: 'green'}}
            />
          </View>
        </View>
      </View>
      {/* End of Alert Settings Container */}
      {/* Notify Settings Container */}
      <View style={styles.container}>
        <Text style={styles.heading}>Notify Settings</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={[styles.textLight, {color: 'black'}]}>
            Storage Limit
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Switch value={true} trackColor={{false: 'grey', true: 'green'}} />
            <Switch
              style={{marginLeft: 30}}
              value={false}
              trackColor={{false: 'grey', true: 'green'}}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={[styles.textLight, {color: 'black'}]}>
            Subscription Billing
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingTop: 10,
              paddingBottom: 10,
            }}>
            <Switch value={true} trackColor={{false: 'grey', true: 'green'}} />
            <Switch
              style={{marginLeft: 30}}
              value={false}
              trackColor={{false: 'grey', true: 'green'}}
            />
          </View>
        </View>
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
            onPress={() => setNotify('text')}>
            <RadioButton
              value="text"
              status={notify === 'text' ? 'checked' : 'unchecked'}
              onPress={() => setNotify('text')}
            />
            <Text style={[styles.textLight, {fontSize: 16}]}>By Text</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
            onPress={() => setNotify('email')}>
            <RadioButton
              value="email"
              status={notify === 'email' ? 'checked' : 'unchecked'}
              onPress={() => setNotify('email')}
            />
            <Text style={[styles.textLight, {fontSize: 16}]}>By Email</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* End of Notify Settings Container */}

      {/* General Settings Container */}
      <View style={styles.container}>
        <Text style={styles.heading}>General Setting</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            borderColor: '#F8AE33',
            borderWidth: 1,
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 20,
            paddingBottom: 20,
            borderRadius: 10,
            marginTop: 10,
            marginBottom: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
            }}>
            <Text style={[styles.textLight, {color: 'black', fontSize: 13}]}>
              Enable Music Sharing
            </Text>
            <Switch value={true} trackColor={{false: 'grey', true: 'green'}} />
          </View>
          <View>
            <Text style={[styles.textLight, {fontSize: 13}]}>
              Restrict these Platforms
            </Text>
            <View
              style={{
                borderBottomWidth: 3,
                borderBottomColor: '#AC1C1C',
              }}>
              <Picker
                selectedCity={selectedPlatform}
                style={{width: '100%'}}
                mode="dropdown"
                dropdownIconColor="#AC1C1C"
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedPlatform(itemValue)
                }>
                <Picker.Item
                  style={styles.pickerItem}
                  label="-Select-"
                  value=""
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="Android"
                  value="android"
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="IOS"
                  value="ios"
                />
              </Picker>
            </View>
          </View>
        </View>
      </View>
      {/* End of General Settings Container */}

      {/* Sync Settings Container */}
      <View style={styles.container}>
        <Text style={styles.heading}>Sync Setting</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            borderColor: '#F8AE33',
            borderWidth: 1,
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 20,
            paddingBottom: 20,
            borderRadius: 10,
            marginTop: 10,
            marginBottom: 20,
          }}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={[styles.textLight, {color: 'black', flexBasis: 100}]}>
                Sync Music Files to Cloud Accounts
              </Text>
              <Switch
                value={true}
                trackColor={{false: 'grey', true: 'green'}}
              />
            </View>
            <View>
              <Text style={[styles.textLight, {marginTop: 20}]}>Frequency</Text>
              <View
                style={{
                  borderBottomWidth: 3,
                  borderBottomColor: '#AC1C1C',
                }}>
                <Picker
                  selectedCity={selectedFrequency}
                  style={{width: '100%'}}
                  mode="dropdown"
                  dropdownIconColor="#AC1C1C"
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedFrequency(itemValue)
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
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={[styles.textLight, {color: 'black', flexBasis: 100}]}>
              Sync Music Files to Cloud Accounts
            </Text>
            <Switch value={true} trackColor={{false: 'grey', true: 'green'}} />
          </View>
        </View>
      </View>
      {/* End of Sync Settings Container */}

      {/* save botton */}
      <View
        style={{
          backgroundColor: '#AC1C1C',
          margin: 20,
          borderRadius: 50,
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: '#fff',
            padding: 10,
            fontSize: 16,
            fontFamily: 'Montserrat-Bold',
          }}>
          Save
        </Text>
      </View>
      {/* End of save botton */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // elevation: 5,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  heading: {
    paddingTop: 10,
    paddingBottom: 10,
    color: '#AE1F1F',
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
  },
  textLight: {
    fontFamily: 'Montserrat-Light',
  },
  dropdown: {
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  pickerItem: {backgroundColor: '#fff', color: '#000'},
});

export default SetttingsScreen;
