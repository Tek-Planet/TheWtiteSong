import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Switch,
  StyleSheet,
  Image,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {TextInput as PaperTextInput} from 'react-native-paper';
import Message from '../../components/Message';

const SongRhymingToolScreen = ({navigation}) => {
  const [selectedTest, setSelectedTest] = useState('');
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <Message
        header="Song Writing Palette > Song Rhyming Tool"
        showMsg="Use This Tool to Generate Song Lyrics"
        showBackBtn
        navigation={navigation}
      />
      {/* SongLibrary and Verse Chorus Select Container */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        {/* My Song Library Select Conatainer */}
        <View>
          <Text style={styles.textHeading}>Select From My Song Library</Text>
          <View
            style={{
              borderBottomWidth: 3,
              borderBottomColor: '#AC1C1C',
            }}>
            <Picker
              selectedTest={selectedTest}
              style={{width: '100%'}}
              mode="dropdown"
              dropdownIconColor="#AC1C1C"
              onValueChange={(itemValue, itemIndex) =>
                setSelectedTest(itemValue)
              }>
              <Picker.Item
                style={styles.pickerItem}
                label="- Select -"
                value=""
              />
              <Picker.Item
                style={styles.pickerItem}
                label="Test"
                value="test"
              />
            </Picker>
          </View>
        </View>
        {/* End of My Song Library Select Conatainer */}

        {/* Verse or Chorus Select Conatainer */}
        <View>
          <Text style={styles.textHeading}>Choose Verse or Chorus</Text>
          <View
            style={{
              borderBottomWidth: 3,
              borderBottomColor: '#AC1C1C',
            }}>
            <Picker
              selectedTest={selectedTest}
              style={{width: '100%'}}
              mode="dropdown"
              dropdownIconColor="#AC1C1C"
              onValueChange={(itemValue, itemIndex) =>
                setSelectedTest(itemValue)
              }>
              <Picker.Item
                style={styles.pickerItem}
                label="- Select -"
                value=""
              />
              <Picker.Item
                style={styles.pickerItem}
                label="Test"
                value="test"
              />
            </Picker>
          </View>
        </View>
        {/* End of Verse or Chorus Select Conatainer */}
      </View>
      {/* End of SongLibrary and Verse Chorus Select Container */}

      <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
        <Text style={{fontFamily: 'Montserrat-Light', fontSize: 13}}>
          Enable Bible Tools for Christian / Gospel Music Genre:
        </Text>
        <Switch value={true} trackColor={{false: 'grey', true: 'green'}} />
      </View>

      <View style={{padding: 10, alignItems: 'center'}}>
        <Text
          style={{
            fontSize: 13,
            textAlign: 'center',
            color: '#AC1C1C',
            marginBottom: 15,
            fontFamily: 'Montserrat-Medium',
          }}>
          Enter <Text style={{fontWeight: 'bold'}}>Word or Phrases</Text> to
          include in a Song Verse or Chorus to Start Generating Content
        </Text>
        <TextInput
          placeholder="Enter Word or Phrases"
          placeholderTextColor="#AC1C1C"
          style={{
            borderWidth: 1,
            width: '100%',
            borderColor: '#AC1C1C',
            borderRadius: 20,
            height: 50,
            textAlign: 'center',
            color: '#AC1C1C',
            marginBottom: 15,
            fontFamily: 'Montserrat-Light',
          }}
        />
        <TouchableOpacity
          style={{
            width: '100%',
            backgroundColor: '#F8AE33',
            padding: 15,
            borderRadius: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Montserrat-Bold',
              color: '#AC1C1C',
              textAlign: 'center',
            }}>
            Generate Rhyme Suggestions
          </Text>
        </TouchableOpacity>
        <PaperTextInput
          placeholder="Results"
          multiline
          label="Results"
          numberOfLines={5}
          mode="outlined"
          theme={{colors: {primary: '#AC1C1C', background: '#fff'}}}
          style={{
            width: '100%',
            marginTop: 10,
            marginBottom: 10,
          }}
        />

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
          }}
          onPress={() => navigation.navigate('RhymeLibrary')}>
          <Image
            source={require('../../assets/imgs/icons/view.png')}
            style={{width: 20, height: 20, marginRight: 15}}
          />
          <Text style={{fontSize: 13, fontFamily: 'Montserrat-Medium'}}>
            View / Edit Rhyme Dictionary
          </Text>
        </TouchableOpacity>
      </View>
      {/* save botton */}
      <TouchableOpacity
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
      </TouchableOpacity>
      {/* End of save botton */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textHeading: {
    color: '#AC1C1C',
    fontFamily: 'Montserrat-Bold',
    fontSize: 13,
    marginBottom: 20,
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

export default SongRhymingToolScreen;
