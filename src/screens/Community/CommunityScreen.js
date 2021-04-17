import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Message from '../../components/Message';
import Feed from '../../components/Feed';
import DropDownPicker from 'react-native-dropdown-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CommunityScreen = ({navigation}) => {
  const [selectedStatus, setSelectedStatus] = useState();
  return (
    <ScrollView>
      <Message header="Home > Community" />
      <View
        style={{
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>User Online</Text>
          <Image
            style={{width: 30, height: 30, marginLeft: 10}}
            source={require('../../assets/imgs/icons/online-icon.png')}
          />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 16, marginRight: 5}}>
            My Status:
          </Text>
          <DropDownPicker
            items={[
              {label: 'Away', value: 'away'},
              {label: 'Gospel', value: 'gospel'},
              {label: 'Jazz', value: 'jazz'},
              {label: 'Pop', value: 'pop'},
            ]}
            defaultValue={selectedStatus}
            placeholder="Away"
            containerStyle={{width: 120, height: 40}}
            style={{
              backgroundColor: '#fafafa',
              borderWidth: 1,
              borderColor: '#000',
            }}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            onChangeItem={item => setSelectedStatus(item.value)}
          />
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <TextInput
          placeholder="Search Topics"
          placeholderTextColor="#AC1C1C"
          style={{
            borderWidth: 1,
            flex: 0.9,
            borderColor: '#AC1C1C',
            borderRadius: 30,
            height: 40,
            textAlign: 'center',
            color: '#AC1C1C',
          }}
        />
        <TouchableOpacity>
          <Ionicons name="search-circle-outline" size={40} color="#AC1C1C" />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
          <Text style={{fontSize: 16}}>Select Date</Text>
          <View style={{marginLeft: 10, flexDirection: 'row'}}>
            <TextInput
              style={{
                borderWidth: 1,
                width: 150,
                borderColor: '#000',
                padding: 0,
                paddingLeft: 5,
                color: '#000',
              }}
            />
            <TouchableOpacity style={{backgroundColor: '#eceff4'}}>
              <Ionicons name="calendar-outline" size={30} />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 30,
          }}>
          <TouchableOpacity
            style={{alignItems: 'center', flex: 0.25}}
            onPress={() => navigation.navigate('NewTopic')}>
            <View
              style={{
                backgroundColor: '#F8AE33',
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{width: 50, height: 50}}
                source={require('../../assets/imgs/icons/new-topic-icon.png')}
              />
            </View>
            <Text>New Topic</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{alignItems: 'center', flex: 0.25}}
            onPress={() => navigation.navigate('MyTopic')}>
            <View
              style={{
                backgroundColor: '#F8AE33',
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{width: 50, height: 50}}
                source={require('../../assets/imgs/icons/my-topic-icon.png')}
              />
            </View>
            <Text>My Topic</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={navigation.navigate('MyGroups')}
            style={{alignItems: 'center', flex: 0.25}}>
            <View
              style={{
                backgroundColor: '#F8AE33',
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{width: 50, height: 50}}
                source={require('../../assets/imgs/icons/my-groups-icon.png')}
              />
            </View>
            <Text>My Groups</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{alignItems: 'center', flex: 0.25}}>
            <View
              style={{
                backgroundColor: '#F8AE33',
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{width: 50, height: 50}}
                source={require('../../assets/imgs/icons/popular-topic-icon.png')}
              />
            </View>
            <Text>Popular Topic(s)</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 16,
            color: '#AC1C1C',
            marginBottom: 20,
          }}>
          Latest Feeds
        </Text>
        <Feed />
        <Feed />
        <Feed />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginBottom: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
  },
});

export default CommunityScreen;
