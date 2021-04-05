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

function PrintPage({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView>
        <Message
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
        <View
          style={{
            backgroundColor: '#F4F4F4',
            margin: 5,
            borderRadius: 10,
            elevation: 5,
          }}>
          <View style={styles.row}>
            {/* row one */}
            <View style={styles.subRow}>
              <Text style={styles.titleText}>Song Title: </Text>
              <Text style={styles.text}>The Song</Text>
            </View>

            {/* rew twwo */}
            <View style={styles.subRow}>
              <Text style={styles.titleText}>Writer(s):</Text>
              <Text style={styles.text}>TekChef</Text>
            </View>
          </View>
          {/* row two */}
          <View style={styles.row}>
            {/* row one */}
            <View style={styles.subRow}>
              <Text style={styles.titleText}>Choose Genre: </Text>
              <Text style={styles.text}>Gospel</Text>
            </View>

            {/* rew twwo */}
            <View style={styles.subRow}>
              <Text style={styles.titleText}>Date Updated:</Text>
              <Text style={styles.text}>25/01/2020</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#F4F4F4',
            margin: 5,
            borderRadius: 10,
            elevation: 5,
          }}>
          <View style={{marginTop: 10}}>
            {/* row one */}
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.titleText}>Element: </Text>
              <Text style={styles.text}>Verse 1</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Text style={styles.titleText}>Text: </Text>
              <Text style={[styles.text, {fontWeight: 'normal'}]}>
                Premium designed icons for use in web, iOS, Android, and desktop
              </Text>
            </View>
          </View>

          <View style={{marginTop: 10}}>
            {/* row one */}
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.titleText}>Element: </Text>
              <Text style={styles.text}>Verse 1</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Text style={styles.titleText}>Text: </Text>
              <Text style={[styles.text, {fontWeight: 'normal'}]}>
                Premium designed icons for use in web, iOS, Android, and desktop
              </Text>
            </View>
          </View>

          <View style={{marginTop: 10}}>
            {/* row one */}
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.titleText}>Element: </Text>
              <Text style={styles.text}>Verse 1</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Text style={styles.titleText}>Text: </Text>
              <Text style={[styles.text, {fontWeight: 'normal'}]}>
                Premium designed icons for use in web, iOS, Android, and desktop
              </Text>
            </View>
          </View>
        </View>

        <Text style={styles.printText}>Page: 1</Text>

        <View style={styles.saveBtnBg}>
          <Text style={styles.saveBtnText}>Save</Text>
        </View>
      </ScrollView>
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
    fontWeight: 'bold',
    fontSize: 14,
    color: '#AE1F1F',
  },
  text: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 15,
  },
  printText: {
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#AE1F1F',
  },
  saveBtnBg: {
    backgroundColor: '#AC1C1C',
    margin: 10,
    borderRadius: 50,
  },

  saveBtnText: {
    textAlign: 'center',
    color: '#fff',
    padding: 5,
    fontSize: 20,
  },
});
