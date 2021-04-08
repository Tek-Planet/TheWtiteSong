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
import SongTempScreen from '../screens/songTemplate/SongTempScreen';
function HomeScreen({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* header */}
        <Message
          header={'Home > Menu'}
          showMsg="Use this Tools to start Writing your next Hit Song"
        />
        {/* first row */}
        <View style={styles.menuRow}>
          <View style={styles.menuBg}>
            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={() => {
                navigation.navigate('LyricsNav', {screen: 'Lyrics'});
              }}>
              <Image
                style={styles.menuImg}
                source={require('../assets/imgs/menu/lyrics.png')}
              />
              <Text style={styles.menuText}>Lyrics Manager</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.menuBg}>
            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={() => {
                navigation.navigate('SongTempScreen');
              }}>
              <Image
                style={styles.menuImg}
                source={require('../assets/imgs/menu/template.png')}
              />
              <Text style={styles.menuText}>Song Templates</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* second row */}
        <View style={styles.menuRow}>
          <View style={styles.menuBg}>
            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={() => {
                navigation.navigate('LoopNav', {screen: 'Lyrics'});
              }}>
              <Image
                style={styles.menuImg}
                source={require('../assets/imgs/menu/loop.png')}
              />
              <Text style={styles.menuText}>Loop Manager</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.menuBg}>
            <Image
              style={styles.menuImg}
              source={require('../assets/imgs/menu/catch.png')}
            />
            <Text style={styles.menuText}>Catch Phrases</Text>
          </View>
        </View>
        {/* third row */}
        <View style={styles.menuRow}>
          <View style={styles.menuBg}>
            <Image
              style={styles.menuImg}
              source={require('../assets/imgs/menu/metro.png')}
            />
            <Text style={styles.menuText}>Metronomes</Text>
          </View>

          <View style={styles.menuBg}>
            <Image
              style={styles.menuImg}
              source={require('../assets/imgs/menu/melo.png')}
            />
            <Text style={styles.menuText}>Melodies</Text>
          </View>
        </View>
        {/* fourth row */}
        <View style={styles.menuRow}>
          <View style={styles.menuBg}>
            <Image
              style={styles.menuImg}
              source={require('../assets/imgs/menu/rhym.png')}
            />
            <Text style={styles.menuText}>Rhyming Tool</Text>
          </View>

          <View style={styles.menuBg}>
            <Image
              style={styles.menuImg}
              source={require('../assets/imgs/menu/harmo.png')}
            />
            <Text style={styles.menuText}>Harmonize Tool</Text>
          </View>
        </View>

        {/* Fifth row */}
        <View style={styles.menuRow}>
          <View style={styles.menuBg}>
            <Image
              style={styles.menuImg}
              source={require('../assets/imgs/menu/bible.png')}
            />
            <Text style={styles.menuText}>Bible Search</Text>
          </View>

          {/* <View style={styles.menuBg}>
            <Image
              style={styles.menuImg}
              source={require('../assets/imgs/menu/lyrics.png')}
            />
             <Text style={styles.menuText}>Melodies</Text>
          </View>       */}
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
    backgroundColor: '#F8AE33',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    height: 140,
    width: '50%',
    maxWidth: 160,
  },
  menuImg: {width: 70, height: 70, margin: 10, borderRadius: 5},
  menuText: {color: '#AC1C1C', fontWeight: 'bold', fontSize: 18},
  menuRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
});
