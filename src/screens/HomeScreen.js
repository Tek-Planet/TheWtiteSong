import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Message from '../components/Message';

function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={{backgroundColor: '#FFFFFF', flex:1}}>
      <ScrollView>
        {/* header */}   
        {/* <Message
          navigation={navigation}
          header={'Home > Menu'}
          showMsg="Use this Tools to start Writing your next Hit Song"
        /> */}
        <View style={{paddingBottom: 20}}>
          {/* first row */}
          <View style={styles.menuRow}>
            <View style={styles.menuBg}>
              <TouchableOpacity
                style={styles.imgBg}
                onPress={() => {
                  navigation.navigate('LyricsNav', {screen: 'Lyrics'});
                }}>
                <Image
                  resizeMode={'contain'}
                  style={styles.menuImg}
                  source={require('../assets/imgs/home/lyrics.png')}
                />
              </TouchableOpacity>
              <Text style={styles.menuText}>Lyrics Manager</Text>
            </View>

            <View style={styles.menuBg}>
              <TouchableOpacity
                style={styles.imgBg}
                onPress={() => {
                  navigation.navigate('LoopNav', {screen: 'Loop'});
                }}>
                <Image
                  resizeMode={'contain'}
                  style={styles.menuImg}
                  source={require('../assets/imgs/home/loop.png')}
                />
              </TouchableOpacity>
              <Text style={styles.menuText}>Loop Manager</Text>
            </View>
          </View>
          {/* second row */}
          <View style={styles.menuRow}>
            <View style={styles.menuBg}>
              <TouchableOpacity
                style={styles.imgBg}
                onPress={() => {
                  navigation.navigate('LoopNav', {screen: 'Loop'});
                }}>
                <Image
                  resizeMode={'contain'}
                  style={styles.menuImg}
                  source={require('../assets/imgs/home/melo.png')}
                />
              </TouchableOpacity>
              <Text style={styles.menuText}>Melodies</Text>
            </View>

            <View style={styles.menuBg}>
              <TouchableOpacity
                style={styles.imgBg}
                onPress={() => {
                  navigation.navigate('MetroNav', {screen: 'Metromones'});
                }}>
                <Image
                  resizeMode={'contain'}
                  style={styles.menuImg}
                  source={require('../assets/imgs/home/metro.png')}
                />
              </TouchableOpacity>
              <Text style={styles.menuText}>Metronomes</Text>
            </View>
          </View>
          {/* third row */}
          <View style={styles.menuRow}>
            <View style={styles.menuBg}>
              <TouchableOpacity
                style={styles.imgBg}
                onPress={() => {
                  navigation.navigate('RhymeLibraryNav');
                }}>
                <Image
                  resizeMode={'contain'}
                  style={styles.menuImg}
                  source={require('../assets/imgs/home/rhym.png')}
                />
              </TouchableOpacity>
              <Text style={styles.menuText}>Rhyming Tool</Text>
            </View>

            <View style={styles.menuBg}>
              <TouchableOpacity
                style={styles.imgBg}
                onPress={() => {
                  navigation.navigate('HarmoNav', {screen: 'Harmonize'});
                }}>
                <Image
                  resizeMode={'contain'}
                  style={styles.menuImg}
                  source={require('../assets/imgs/home/harmo.png')}
                />
              </TouchableOpacity>
              <Text style={styles.menuText}>Harmonize Tool</Text>
            </View>
          </View>
          {/* fourth row */}
          <View style={styles.menuRow}>
            {/* <View style={styles.menuBg}>
              <TouchableOpacity
                style={styles.imgBg}
                onPress={() => {
                  navigation.navigate('SongTempScreen');
                }}>
                <Image
                  resizeMode={'contain'}
                  style={styles.menuImg}
                  source={require('../assets/imgs/home/harmo.png')}
                />
              </TouchableOpacity>
              <Text style={styles.menuText}>Song Templates</Text>
            </View> */}

            <View style={styles.menuBg}>
              <TouchableOpacity
                style={styles.imgBg}
                onPress={() => {
                  navigation.navigate('BibleSearch');
                }}>
                <Image
                  resizeMode={'contain'}
                  style={styles.menuImg}
                  source={require('../assets/imgs/home/bible.png')}
                />
              </TouchableOpacity>
              <Text style={styles.menuText}>Bible Search</Text>
            </View>

            <View style={styles.menuBg}>
              <TouchableOpacity
                style={styles.imgBg}
                onPress={() => {
                  navigation.navigate('SongTempScreen');
                }}>
                <Image
                  resizeMode={'contain'}
                  style={styles.menuImg}
                  source={require('../assets/imgs/home/catch.png')}
                />
              </TouchableOpacity>
              <Text style={styles.menuText}>Catch Phrases</Text>
            </View>
          </View>
          {/* third row */}

          {/* fourth row */}

          {/* Fifth row */}
          <View style={styles.menuRow}>
            {/* <View style={styles.menuBg}>
              <TouchableOpacity
                style={styles.imgBg}
                onPress={() => {
                  navigation.navigate('BibleSearch');
                }}>
                <Image
                  resizeMode={'contain'}
                  style={styles.menuImg}
                  source={require('../assets/imgs/home/bible.png')}
                />
              </TouchableOpacity>
              <Text style={styles.menuText}>Bible Search</Text>
            </View> */}

            {/* <View style={styles.menuBg}>
            <Image
              style={styles.menuImg}
              source={require('../assets/imgs/menu/lyrics.png')}
            />
             <Text style={styles.menuText}>Melodies</Text>
          </View>       */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  headingBox: {
    padding: 10,
    backgroundColor: '#F8AE33',
  },
  headingText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subhHeadingText: {
    color: '#000',
    fontSize: 18,
    margin: 10,
    textAlign: 'center',
  },
  menuBg: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    height: 140,
    width: '50%',
    maxWidth: 160,
  },
  imgBg: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 2,
  },
  menuImg: {width: 70, height: 70, margin: 10},
  menuText: {color: '#000',  fontFamily: 'Montserrat-Bold', fontSize: 16, marginTop: 10},
  menuRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
});
