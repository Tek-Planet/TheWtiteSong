import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Message from '../../components/Message';
import Ionicons from 'react-native-vector-icons/Ionicons';

function SongStatistics({navigation}) {
  const [lyrics, setLyrics] = useState([
    {
      key: '001',
      title: 'Storage Space Low',
      date: '01-01-2020',
      author: 'Sheffy',
    },
    {
      key: '002',
      title: 'Storage Space Low',
      date: '01-01-2021',
      author: 'Biola',
    },
  ]);

  const [production, setProduction] = useState([
    {
      key: '004',
      title: 'Eni Duro',
      date: '01-02-2020',
      author: 'Sheffy',
    },
    {
      key: '005',
      title: 'The champions League Tune',
      date: '01-02-2020',
      author: 'Biola',
    },
    {
      key: '006',
      title: 'The champions League Tune',
      date: '01-02-2020',
      author: 'Biola',
    },
  ]);

  const templateListitem = item => {
    return (
      <View key={item.key.toString()} style={styles.userInfoSection}>
        <View style={{}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={[styles.text, {width: 170}]}>{item.title}</Text>
            </View>
            <View style={{flexDirection: 'row', width: 130}}>
              <Text style={styles.text}>{item.author}</Text>
              <Text style={styles.text}>{item.date}</Text>
            </View>

            <Ionicons
              name="arrow-forward-outline"
              size={20}
              color={'#FFF'}
              style={styles.iconStyle}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Message header={'Song Statistics'} />
        <Text style={styles.catTitle}>Alerts</Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#06E4DC',
            padding: 5,
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Ionicons
              name="alert-circle-outline"
              size={20}
              color={'#FFF'}
              style={[styles.iconStyle, {backgroundColor: '#AC1C1C'}]}
            />
            <Text style={styles.headerText}>High Priority Alerts</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={[styles.headerText, {marginEnd: 20}]}>(3)</Text>
            <Ionicons
              name="arrow-up-outline"
              size={20}
              color={'#06E4DC'}
              style={styles.iconStyle}
            />
            <Ionicons
              name="arrow-down-outline"
              size={20}
              color={'#06E4DC'}
              style={styles.iconStyle}
            />
          </View>
        </View>
        {/* Storage Space Low */}

        {lyrics.map(item => {
          return templateListitem(item);
        })}
        <Text style={styles.catTitle}>Notifications</Text>
        {production.map(item => {
          return templateListitem(item);
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

export default SongStatistics;

const styles = StyleSheet.create({
  catTitle: {fontWeight: 'bold', margin: 20, marginBottom: 5},
  headerText: {margin: 5, fontSize: 16},
  iconStyle: {
    padding: 2,
    margin: 5,
    height: 25,
    width: 25,
    alignSelf: 'center',
    backgroundColor: '#000',
    borderRadius: 100,
  },
  userInfoSection: {
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 5,
    padding: 3,
    backgroundColor: '#F5F5F5',
    elevation: 5,
    borderRadius: 5,
    margin: 5,
  },
  titleText: {
    margin: 5,
    fontWeight: 'bold',
    maxWidth: 70,
    textAlign: 'right',
  },
  text: {maxWidth: 120, margin: 5},
});
