import React, {Component} from 'react';
import {
  Button,
  PermissionsAndroid,
  TouchableOpacity,
  Platform,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import Slider from '@react-native-community/slider';
import {
  Player,
  Recorder,
  MediaStates,
} from '@react-native-community/audio-toolkit';
import Message from '../components/Message';
import SaveButton from '../components/SaveButton';
import MyPlayerBar from '../components/MyPlayerBarFull';
import Ionicons from 'react-native-vector-icons/Ionicons';

const filename = 'test.mp4';

export default class App extends Component {
  player = Player;
  recorder = Recorder;
  lastSeek = 0;
  _progressInterval = 0;

  constructor(props) {
    super(props);

    this.state = {
      playPauseButton: 'play',
      recordButton: 'mic',

      duration: 0,

      static: false,

      stopButtonDisabled: true,
      playButtonDisabled: true,
      recordButtonDisabled: true,

      loopButtonStatus: false,
      progress: 0,

      error: null,
    };
  }

  componentDidMount() {
    this.player = null;
    this.recorder = null;
    this.lastSeek = 0;

    this._reloadPlayer();
    this._reloadRecorder();
    clearInterval(
      setInterval(() => {
        if (this.player && this._shouldUpdateProgressBar()) {
          let currentProgress =
            Math.max(0, this.player.currentTime) / this.player.duration;
          if (isNaN(currentProgress)) {
            currentProgress = 0;
          }
          this.setState({progress: currentProgress});
        }
      }, 100),
    );
  }

  _shouldUpdateProgressBar() {
    // Debounce progress bar update by 200 ms
    return Date.now() - this.lastSeek > 200;
  }

  _millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    //ES6 interpolated literals/template literals
    //If seconds is less than 10 put a zero in front.
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  _updateState(err) {
    this.setState({
      static:
        (this.player && this.player.isPlaying) ||
        (this.recorder && this.recorder.isRecording)
          ? true
          : false,

      duration:
        this.player && this.player.isPlaying
          ? this._millisToMinutesAndSeconds(this.player.duration)
          : 0,
      playPauseButton: this.player && this.player.isPlaying ? 'pause' : 'play',
      recordButton: this.recorder && this.recorder.isRecording ? 'stop' : 'mic',

      stopButtonDisabled: !this.player || !this.player.canStop,
      playButtonDisabled:
        !this.player || !this.player.canPlay || this.recorder.isRecording,
      recordButtonDisabled:
        !this.recorder || (this.player && !this.player.isStopped),
    });
  }

  _playPause() {
    this.player.playPause((err, paused) => {
      if (err) {
        this.setState({
          error: err.message,
        });
      }
      this._updateState();
    });
  }

  _stop() {
    this.player.stop(() => {
      this._updateState();
    });
  }

  _seek(percentage) {
    if (!this.player) {
      return;
    }

    this.lastSeek = Date.now();

    let position = percentage * this.player.duration;

    this.player.seek(position, () => {
      this._updateState();
    });
  }

  _reloadPlayer() {
    if (this.player) {
      this.player.destroy();
    }

    this.player = new Player(filename, {
      autoDestroy: false,
    }).prepare(err => {
      if (err) {
        console.log('error at _reloadPlayer():');
        console.log(err);
      } else {
        this.player.looping = this.state.loopButtonStatus;
      }

      this._updateState();
    });

    this._updateState();

    this.player.on('ended', () => {
      this._updateState();
      console.log('ended');
      console.log(this.player.duration);
    });
    this.player.on('pause', () => {
      this._updateState();
      console.log('Paused');
      // console.log( this.player.duration)
    });
  }

  _reloadRecorder() {
    if (this.recorder) {
      this.recorder.destroy();
    }

    this.recorder = new Recorder(filename, {
      bitrate: 256000,
      channels: 2,
      sampleRate: 44100,
      quality: 'max',
    });

    this._updateState();
  }

  _toggleRecord() {
    if (this.player) {
      this.player.destroy();
    }

    let recordAudioRequest;
    if (Platform.OS == 'android') {
      recordAudioRequest = this._requestRecordAudioPermission();
    } else {
      recordAudioRequest = new Promise(function (resolve, reject) {
        resolve(true);
      });
    }

    recordAudioRequest.then(hasPermission => {
      if (!hasPermission) {
        this.setState({
          error: 'Record Audio Permission was denied',
        });
        return;
      }

      this.recorder.toggleRecord((err, stopped) => {
        if (err) {
          this.setState({
            error: err.message,
          });
        }
        if (stopped) {
          this._reloadPlayer();
          this._reloadRecorder();
        }

        this._updateState();
      });
    });
  }

  async _requestRecordAudioPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        {
          title: 'Microphone Permission',
          message:
            'ExampleApp needs access to your microphone to test react-native-audio-toolkit.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  _toggleLooping(value) {
    this.setState({
      loopButtonStatus: value,
    });
    if (this.player) {
      this.player.looping = value;
    }
  }

  render() {
    const {navigation, route} = this.props;
    const {songInfo, element} = route.params;

    return (
      <View style={{justifyContent: 'space-between', flex: 1}}>
        <View>
          <Message
            navigation={navigation}
            showBackBtn={true}
            header={'Lyrics Manager > Record'}
          />
          <View>
            <View style={styles.userInfoSection}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={[styles.headerText, {fontWeight: 'bold'}]}>
                    Song Title:
                  </Text>
                  <Text style={styles.headerText}>{songInfo.title}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={[styles.headerText, {fontWeight: 'bold'}]}>
                    Genre:
                  </Text>
                  <Text style={styles.headerText}>{songInfo.genre}</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                }}></View>
              <Text style={[styles.headerText, {fontWeight: 'bold'}]}>
                {element.title}
              </Text>
              <Text style={[styles.headerText, {textAlign: 'justify'}]}>
                {element.body}
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={[styles.headerText, {fontWeight: 'bold'}]}>
            Play Time: {this.state.duration}
          </Text>
          <MyPlayerBar static={this.state.static} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 10,
            }}>
            <TouchableOpacity
              onPress={() => this._toggleRecord()}
              style={styles.iconBg}>
              <Ionicons
                name={this.state.recordButton}
                size={25}
                color="#AC1C1C"
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 10,
            }}>
            <TouchableOpacity
              onPress={() => this._playPause()}
              style={styles.iconBg}>
              <Ionicons
                name={this.state.playPauseButton}
                size={25}
                color="#AC1C1C"
              />
            </TouchableOpacity>

            <TouchableOpacity
              disabled={this.state.stopButtonDisabled}
              onPress={() => this._stop()}
              style={styles.iconBg}>
              <Ionicons name="stop" size={25} color="#AC1C1C" />
            </TouchableOpacity>
          </View>

          {/* <View style={styles.slider}>
            <Slider
              step={0.0001}
              disabled={this.state.playButtonDisabled}
              onValueChange={percentage => this._seek(percentage)}
              value={this.state.progress}
            />
          </View> */}

          {this.state.error && (
            <View>
              <Text style={styles.errorMessage}>{this.state.error}</Text>
            </View>
          )}
          <SaveButton buttonTitle={'Save'} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slider: {
    height: 10,
    margin: 10,
    marginBottom: 50,
  },
  settingsContainer: {
    alignItems: 'center',
  },
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
  },
  errorMessage: {
    fontSize: 15,
    textAlign: 'center',
    padding: 10,
    color: 'red',
  },

  headerText: {
    color: '#000',
    margin: 5,
    fontSize: 14,
  },

  heading: {
    fontSize: 16,
    color: '#AC1C1C',
    marginTop: 10,
    fontWeight: 'bold',
  },

  userInfoSection: {
    margin: 5,
    paddingStart: 10,
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 10,
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
});
