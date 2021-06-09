import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Message from '../../components/Message';
import MySongsHeader from '../../components/MySongsHeader';
import SaveButton from '../../components/SaveButton';

function PrintPage({navigation, route}) {
  const {songInfo} = route.params;
  console.log(songInfo);

  const listItem = (item, index) => {
    return (
      <View key={index} style={{marginTop: 10}}>
        {/* row one */}
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.titleText}>Element: </Text>
          <Text style={[styles.text, {fontFamily: 'Montserrat-Bold'}]}>
            {item.title}
          </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={styles.titleText}>Text: </Text>
          <Text style={[styles.text, {fontWeight: 'normal'}]}>{item.body}</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Message
        showBackBtn={true}
        navigation={navigation}
        header={'Print Preview'}
        showMsg={false}
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View
          style={{
            height: 30,
            margin: 10,
            marginTop: 15,
            backgroundColor: '#F8AE33',
            width: 150,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontWeight: 'bold'}}>Show / Hide Element</Text>
        </View>
        <Image
          style={{width: 100, height: 60}}
          source={require('../../assets/imgs/logo.png')}
        />
      </View>

      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#3D2BB0',
        }}>
        Lyrical Project Sheet
      </Text>

      <MySongsHeader songInfo={songInfo} />

      <View
        style={{
          backgroundColor: '#F4F4F4',
          margin: 5,
          borderRadius: 10,
          elevation: 5,
        }}>
        {/* <View style={styles.row}>
        
            <View style={styles.subRow}>
              <Text style={styles.titleText}>Song Title: </Text>
              <Text style={styles.text}>The Song</Text>
            </View>

          
            <View style={styles.subRow}>
              <Text style={styles.titleText}>Writer(s):</Text>
              <Text style={styles.text}>TekChef</Text>
            </View>
          </View> */}

        {/* <View style={styles.row}>
         
            <View style={styles.subRow}>
              <Text style={styles.titleText}>Choose Genre: </Text>
              <Text style={styles.text}>Gospel</Text>
            </View>

           
            <View style={styles.subRow}>
              <Text style={styles.titleText}>Date Updated:</Text>
              <Text style={styles.text}>25/01/2020</Text>
            </View>
          </View> */}
      </View>

      <ScrollView
        style={{
          backgroundColor: '#F4F4F4',
          margin: 5,
          borderRadius: 10,
          elevation: 5,
        }}>
        {songInfo.element.length > 0 ? (
          songInfo.element.map((item, index) => {
            return listItem(item, index);
          })
        ) : (
          <Text
            style={{
              color: '#000',
              fontSize: 16,
              fontFamily: 'Montserrat-Bold',
              margin: 10,
              textAlign: 'center',
            }}>
            {' '}
            No Element found{' '}
          </Text>
        )}
      </ScrollView>

      {/* <Text style={styles.printText}>Page: 1</Text> */}

      <SaveButton buttonTitle={'Print'} />
    </SafeAreaView>
  );
}

export default PrintPage;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    margin: 5,
    justifyContent: 'space-evenly',
  },
  subRow: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  titleText: {
    textAlign: 'right',
    width: 100,
    fontFamily: 'Montserrat-Bold',
    fontSize: 12,
    color: '#AE1F1F',
  },
  text: {
    flex: 1,
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
  },
});
