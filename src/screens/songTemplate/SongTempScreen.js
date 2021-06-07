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
import Message from '../../components/Message';
import Beat from './Beat';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SongTempScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* The Message Display */}
        <Message
          navigation={navigation}
          header="Song Templates"
          showMsg="Use This Section to View and Edit Song Templates"
          showBackBtn={true}
        />
        <View style={styles.outerContainer}>
          <View style={styles.innerContainer}>
            <Text style={styles.text}>Verse</Text>
            <Text style={styles.text}>Chorus</Text>
            <Text style={styles.text}>Bridge</Text>
          </View>
        </View>
        {/* The Individual Beat uploaded */}
        <Beat title="Beat Name 1" info="Last Updated: 01/15/2020 | 10MB" />
        <Beat title="Beat Name 1" info="Last Updated: 01/15/2020 | 10MB" />
        <Beat title="Beat Name 1" info="Last Updated: 01/15/2020 | 10MB" />
        <Beat title="Beat Name 1" info="Last Updated: 01/15/2020 | 10MB" />

        {/* The Player Screen */}
        <View style={styles.player}>
          <Image source={require('../../assets/imgs/lyrics/player.png')} />
        </View>
        {/* The Run Time Display */}
        <View style={styles.runTime}>
          <Text style={{color: '#AE1F1F', fontFamily: 'Montserrat-Bold'}}>
            Run Time:
          </Text>
          <View style={styles.runTimeMeter}>
            <Text style={{fontFamily: 'Montserrat-Medium'}}>03:00</Text>
            <Text style={{fontFamily: 'Montserrat-Medium'}}>MM|SS</Text>
          </View>
        </View>
        {/* The player Control Buttons */}
        <View style={styles.playerBtnOuterContainer}>
          <View style={styles.playerBtnInnerContainer}>
            <TouchableOpacity style={styles.iconBg}>
              <Ionicons name="play-back" size={25} color="#AC1C1C" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBg}>
              <Ionicons name="play-forward" size={25} color="#AC1C1C" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBg}>
              <Ionicons name="play" size={25} color="#AC1C1C" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBg}>
              <Ionicons name="pause" size={25} color="#AC1C1C" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBg}>
              <Ionicons name="stop" size={25} color="#AC1C1C" />
            </TouchableOpacity>
          </View>
        </View>
        {/* The Upload and Import Section */}
        <View style={styles.upimOuterContainer}>
          <View style={styles.upimInnerContainer}>
            <View style={styles.uploadContainer}>
              <Image
                style={{width: 30, height: 30}}
                source={require('../../assets/imgs/song_template/upload.png')}
              />
              <Text
                style={{
                  marginRight: 10,
                  marginLeft: 5,
                  fontFamily: 'Montserrat-Medium',
                  fontSize: 13,
                }}>
                Upload More Beats
              </Text>
            </View>
            <View style={styles.importContainer}>
              <Text
                style={{
                  marginRight: 10,
                  marginLeft: 10,
                  fontFamily: 'Montserrat-Medium',
                  fontSize: 13,
                }}>
                Import:
              </Text>
              <Image
                style={{width: 30, height: 30, marginLeft: 5}}
                source={require('../../assets/imgs/song_template/itune.png')}
              />
              <Image
                style={{width: 30, height: 30, marginLeft: 5}}
                source={require('../../assets/imgs/song_template/dropbox.png')}
              />
              <Image
                style={{width: 30, height: 30, marginLeft: 5}}
                source={require('../../assets/imgs/song_template/drive.png')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    paddingLeft: 40,
    paddingRight: 40,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#F8AE33',
    padding: 5,
    borderRadius: 10,
  },
  text: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },
  player: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },
  runTime: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  runTimeMeter: {
    backgroundColor: '#F8AE33',
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginLeft: 10,
  },
  iconBg: {
    margin: 5,
    borderRadius: 10,
    width: 40,
    height: 40,
    padding: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 5,
    alignContent: 'center',
  },
  playerBtnOuterContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    margin: 10,
  },
  playerBtnInnerContainer: {
    flexDirection: 'row',
  },
  importContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftColor: 'red',
    borderLeftWidth: 2,
  },
  uploadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  upimInnerContainer: {
    flexDirection: 'row',
  },
  upimOuterContainer: {
    width: '100%',
    alignItems: 'center',
  },
});

export default SongTempScreen;
