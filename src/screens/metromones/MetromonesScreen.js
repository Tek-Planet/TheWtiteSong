import React, {Component} from 'react';
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
import SaveButton from '../../components/SaveButton';

function MetromonesScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <Message
          navigation={navigation}
          showBackBtn={true}
          header={'Program Metronome'}
        />
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              fontFamily: 'Montserrat-Bold',
              fontSize: 13,
              marginTop: 10,
            }}>
            Existing Metronome Programes:
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="chevron-back" size={25} color={'#F8AE33'} />
            <Text style={styles.textLight}>Sample 1</Text>
            <View style={styles.verticalSeperator} />
            <Text style={styles.textLight}>Sample 2</Text>
            <View style={styles.verticalSeperator} />
            <Text style={styles.textLight}>Sample 3</Text>
            <View style={styles.verticalSeperator} />
            <Text style={styles.textLight}>Sample 4</Text>
            <Ionicons name="chevron-forward" size={25} color={'#F8AE33'} />
          </View>
        </View>
        {/* the box side */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* volume side */}
          <View style={{marginStart: 10, alignItems: 'flex-end'}}>
            {/* up volue */}
            <TouchableOpacity style={styles.volume}>
              <Text style={styles.volumeText}>Volume Up</Text>
              <Ionicons name="volume-off" size={25} color={'#089006'} />
              <Ionicons
                style={{marginStart: -8}}
                name="add-outline"
                size={15}
                color={'#089006'}
              />
            </TouchableOpacity>

            {/* down volume */}
            <TouchableOpacity style={[styles.volume, {marginTop: 20}]}>
              <Text style={styles.volumeText}>Volume Down</Text>
              <Ionicons name="volume-off" size={25} color={'#089006'} />
              <Ionicons
                style={{marginStart: -8}}
                name="remove-outline"
                size={15}
                color={'#089006'}
              />
            </TouchableOpacity>
          </View>
          {/* player side */}
          <View
            style={{
              flex: 1,
              backgroundColor: '#B7B7B7',
              marginEnd: 20,
              marginStart: 10,
              height: 115,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingStart: 10,
                paddingEnd: 10,
              }}>
              <Text style={styles.playerText}>Vol</Text>
              <Text style={styles.playerText}>1/4</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={{fontSize: 50, fontFamily: 'Montserrat-Bold'}}>
                100
              </Text>
              <Text
                style={{
                  position: 'absolute',
                  right: 40,
                  bottom: 12,
                  fontSize: 10,
                  fontFamily: 'Montserrat-Bold',
                }}>
                bpm
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingStart: 10,
                paddingEnd: 10,
              }}>
              <Text></Text>
              <Ionicons name="volume-high" size={25} color={'#FA0D0D'} />
            </View>
            {/* the bars below player section */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.editMenuText}>Half</Text>
              <View style={[styles.editMenuItem, {marginEnd: 5}]} />
              <View style={[styles.editMenuItem]} />
              <Text style={styles.editMenuText}>Double</Text>
            </View>
            {/* tap button section */}
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 30,
            width: 220,
            alignSelf: 'flex-end',
            paddingEnd: 20,
            justifyContent: 'space-between',
          }}>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity style={styles.tapBtn}>
              <Text style={{color: '#fff', fontFamily: 'Montserrat-Medium'}}>
                Tap
              </Text>
            </TouchableOpacity>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <TouchableOpacity style={[styles.iconBg, {marginEnd: 20}]}>
                <Ionicons name="play" size={25} color="#AC1C1C" />
              </TouchableOpacity>

              <TouchableOpacity style={styles.iconBg}>
                <Ionicons name="stop" size={25} color="#AC1C1C" />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text
              style={{
                fontFamily: 'Montserrat-Bold',
                fontSize: 13,
                marginTop: -5,
              }}>
              Speed
            </Text>
            <View
              style={{
                borderRadius: 100,
                height: 40,
                width: 40,
                backgroundColor: '#AC1C1C',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <Ionicons
                style={{alignSelf: 'center'}}
                name="caret-up"
                size={30}
                style={{marginBottom: -15}}
                color="#fff"
              />
              <Ionicons
                style={{alignSelf: 'center'}}
                name="caret-down"
                size={30}
                color="#fff"
              />
            </View>
          </View>
        </View>

        {/* change tempo section */}
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <View style={styles.horizontalSeperator} />
          <Text
            style={{
              margin: 5,
              color: '#AC1C1C',
              fontFamily: 'Montserrat-Medium',
            }}>
            Change Tempo
          </Text>
          <View style={styles.horizontalSeperator} />
        </View>
        <View>
          <View>
            {/* the meter row */}
            <View style={styles.row}>
              <Ionicons
                style={{alignSelf: 'center'}}
                name="ellipse"
                size={30}
                color="#B7B7B7"
              />
              <Text style={styles.textTitle}>Meter</Text>
              <View style={[styles.middleColumn, {width: 95}]}>
                <Text
                  style={{
                    color: '#000',
                    marginTop: 20,
                    fontFamily: 'Montserrat-Medium',
                    fontSize: 13,
                  }}>
                  Time Signature
                </Text>
                <Text
                  style={{
                    color: '#000',
                    fontFamily: 'Montserrat-Medium',
                    fontSize: 13,
                  }}>
                  3/4
                </Text>
              </View>
              <View style={[styles.middleColumn, {width: 80}]}>
                <Text
                  style={{
                    color: '#000',
                    marginTop: 20,
                    fontFamily: 'Montserrat-Medium',
                    fontSize: 13,
                  }}>
                  Adago
                </Text>
                <Text
                  style={{
                    color: '#000',
                    fontFamily: 'Montserrat-Medium',
                    fontSize: 13,
                  }}>
                  Andante
                </Text>
              </View>
              <View style={[styles.middleColumn, {paddingTop: 20}]}>
                <Text style={styles.textRangeNum}>66-76</Text>
                <Text style={styles.textRangeNum}>76-108</Text>
              </View>
            </View>

            {/* the Tuplet row */}
            <View style={[styles.row, {marginTop: -20}]}>
              <Ionicons
                style={{alignSelf: 'center'}}
                name="ellipse"
                size={30}
                color="#B7B7B7"
              />
              <Text style={styles.textTitle}>Tuplet</Text>
              <View style={[styles.middleColumn, {width: 95}]}>
                <Text
                  style={{
                    color: '#000',
                    fontFamily: 'Montserrat-Medium',
                    fontSize: 13,
                  }}>
                  6/8
                </Text>
              </View>
              <View style={[styles.middleColumn, {width: 80}]}>
                <Text
                  style={{
                    color: '#000',
                    marginTop: 20,
                    fontFamily: 'Montserrat-Medium',
                    fontSize: 13,
                  }}>
                  Largo
                </Text>
                <Text
                  style={{
                    color: '#000',
                    fontFamily: 'Montserrat-Medium',
                    fontSize: 13,
                  }}>
                  Largetto
                </Text>
              </View>
              <View style={[styles.middleColumn, {paddingTop: 20}]}>
                <Text style={[styles.textRangeNum]}>40-60</Text>
                <Text style={styles.textRangeNum}>60-68</Text>
              </View>
            </View>
            {/* click row */}
            <View style={[styles.row, {marginTop: -20}]}>
              <Ionicons
                style={{alignSelf: 'center'}}
                name="ellipse"
                size={30}
                color="#B7B7B7"
              />
              <Text style={styles.textTitle}>Click</Text>
              <View style={[styles.middleColumn, {width: 95}]}></View>
              <View style={[styles.middleColumn, {width: 80}]}>
                <Text
                  style={{
                    color: '#000',
                    marginTop: 20,
                    fontFamily: 'Montserrat-Medium',
                    fontSize: 13,
                  }}>
                  Moderator
                </Text>
                <Text
                  style={{
                    color: '#000',
                    fontFamily: 'Montserrat-Medium',
                    fontSize: 13,
                  }}>
                  Allergo
                </Text>
              </View>
              <View style={[styles.middleColumn, {paddingTop: 20}]}>
                <Text style={[styles.textRangeNum]}>108-120</Text>
                <Text style={styles.textRangeNum}>120-168</Text>
              </View>
            </View>
            {/* tAMBOURINE ROW */}
            <View style={[styles.row, {marginTop: -20}]}>
              <Ionicons
                style={{alignSelf: 'center'}}
                name="ellipse"
                size={30}
                color="#B7B7B7"
              />
              <Text style={styles.textTitle}>Tambourine</Text>
              <View style={[styles.middleColumn, {width: 95}]}></View>
              <View style={[styles.middleColumn, {width: 80}]}>
                <Text
                  style={{
                    color: '#000',
                    marginTop: 20,
                    fontFamily: 'Montserrat-Medium',
                    fontSize: 13,
                  }}>
                  Presto
                </Text>
                <Text
                  style={{
                    color: '#000',
                    fontFamily: 'Montserrat-Medium',
                    fontSize: 13,
                  }}>
                  Allergo
                </Text>
              </View>
              <View style={[styles.middleColumn, {paddingTop: 20}]}>
                <Text style={[styles.textRangeNum]}>168-200</Text>
                <Text style={styles.textRangeNum}>200-208</Text>
              </View>
            </View>
          </View>
        </View>
        <SaveButton
          buttonTitle="Save"
          btnType="facebook"
          color="#4867aa"
          backgroundColor="#e6eaf4"
          onPress={() => alert('hello')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default MetromonesScreen;

const styles = StyleSheet.create({
  verticalSeperator: {borderWidth: 1, height: 10, margin: 5},
  volume: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  volumeText: {
    fontSize: 10,
    fontFamily: 'Montserrat-Medium',
  },
  playerText: {color: '#000', fontFamily: 'Montserrat-Bold'},
  editMenuItem: {
    flexDirection: 'row',
    backgroundColor: '#F8AE33',
    alignItems: 'center',
    borderRadius: 10,
    height: 10,
    width: 60,
  },
  editMenuText: {
    color: '#000',
    fontFamily: 'Montserrat-Bold',
    fontSize: 13,
    margin: 5,
  },
  tapBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AC1C1C',
    height: 40,
    borderRadius: 10,
    width: 80,
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
  horizontalSeperator: {
    borderWidth: 1,
    width: '25%',
    borderColor: '#F8AE33',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: 10,
  },
  textTitle: {
    color: '#000',
    fontFamily: 'Montserrat-Bold',
    fontSize: 13,
    marginStart: 5,
    width: 50,
  },
  textRangeNum: {color: '#000', fontFamily: 'Montserrat-Bold', fontSize: 13},
  middleColumn: {margin: 5, alignItems: 'center'},
  // textMedium: {fontFamily: 'Montserrat-Medium'},
  textMedium: {fontFamily: 'Montserrat-Light', fontSize: 13},
});
