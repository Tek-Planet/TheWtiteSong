import React, {useState} from 'react';
import {Text, View, ScrollView, StyleSheet, Switch} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import RadioButton from '../components/RadioButton';

import Message from '../components/Message';

const SetttingsScreen = () => {
  const [is2FAEnabled, setIs2FAEnabled] = useState(true);
  const toggleSwitch = () => setIs2FAEnabled(previousState => !previousState);
  // RadioButton State
  const [isLiked, setIsLiked] = useState([
    {id: 1, value: 'text', name: 'By Text', selected: true},
    {id: 2, value: 'email', name: 'By Email', selected: false},
  ]);

  const onRadioBtnClick = item => {
    let updatedState = isLiked.map(isLikedItem =>
      isLikedItem.id === item.id
        ? {...isLikedItem, selected: true}
        : {...isLikedItem, selected: false},
    );
    setIsLiked(updatedState);
  };

  return (
    <ScrollView>
      <Message header="Home > Details" />

      {/* First Container */}
      <View style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.heading}>Subscriber ID:</Text>
          <Text style={{marginLeft: 30}}>US2394-212</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.heading}>Music Genre:</Text>
          <Text>Gospel</Text>
          <Text style={styles.heading}>Genre Mode:</Text>
          <Text>Single</Text>
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
          <Text style={{color: 'black'}}>Pin Code Login</Text>
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
          <Text style={{color: 'black'}}>2-Factor Authentication</Text>
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
          <Text style={{color: 'black'}}>Allow Exploit Language</Text>
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
        <View style={{marginTop: 15, marginBottom: 10, marginLeft: 20}}>
          <Text style={{color: 'black'}}>Edit Word List</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: 'black'}}>Song Sharing</Text>
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
            <Text>Local Contact</Text>
            <Text>Facebook Friends</Text>
          </View>
          <View>
            <Text>Youtube</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: 'black'}}>Bible Helper</Text>
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
          <Text style={{color: 'black'}}>Save Songs to Device</Text>
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
          <Text style={{color: 'black'}}>Save Songs to Web Portal</Text>
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
          <Text style={{color: 'black'}}>Storage Space Low</Text>
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
          <Text style={{color: 'black'}}>Suspicious Song Sharing</Text>
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
          <Text style={{color: 'black'}}>Storage Limit</Text>
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
          <Text style={{color: 'black'}}>Subscription Billing</Text>
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
          {isLiked.map(item => (
            <RadioButton
              onPress={() => onRadioBtnClick(item)}
              selected={item.selected}
              key={item.id}>
              {item.name}
            </RadioButton>
          ))}
        </View>
      </View>
      {/* End of Notify Settings Container */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 5,
    padding: 5,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  heading: {
    paddingTop: 10,
    paddingBottom: 10,
    color: '#AE1F1F',
    fontWeight: 'bold',
  },
});

export default SetttingsScreen;
