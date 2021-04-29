import {HeaderStyleInterpolators} from '@react-navigation/stack';
import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Modal,
  Alert,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Message from '../../components/Message';
import Rhyme from './Rhyme';

const RhymeLibraryScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ScrollView>
      <Message
        header={modalVisible ? 'Rhyme Library > View' : 'Rhyme Library'}
        showBackBtn
        navigation={navigation}
      />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={styles.modalContainer}>
            <Text style={[styles.textStyle, styles.modalHeading]}>
              Rhyme View Details
            </Text>
            <View style={styles.modalView}>
              <View style={{flexDirection: 'row', marginBottom: 20}}>
                <View
                  style={{
                    alignItems: 'flex-start',
                    marginRight: 20,
                  }}>
                  <Text style={[styles.textStyle, styles.addMarginBottom]}>
                    Hello World!
                  </Text>
                  <Text style={[styles.textStyle, styles.addMarginBottom]}>
                    Date Modified
                  </Text>
                  <Text style={styles.textStyle}>Song Projects Used:</Text>
                </View>
                <View
                  style={{
                    alignItems: 'flex-start',
                    flex: 1,
                  }}>
                  <Text style={[styles.addMarginBottom, {color: '#000'}]}>
                    Loren ipsum
                  </Text>
                  <Text style={[styles.addMarginBottom, {color: '#000'}]}>
                    03/15/2020
                  </Text>
                  <Text style={{color: '#000'}}>03</Text>
                </View>
              </View>

              {/* The View for the Details */}
              <View
                style={{
                  marginBottom: 20,
                }}>
                <Text style={[styles.textStyle, {textAlign: 'left'}]}>
                  Details:
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet, amet congue forensibus at cum,
                  ipsum maiestatis necessitatibus ei vel, suas
                </Text>
              </View>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 20,
          marginBottom: 20,
        }}>
        <TextInput
          placeholder="Search Rhymes & Catch Phrases"
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

      <Rhyme
        title="Lorem ipsum dolor sit amet,elit,tempor."
        showModal={setModalVisible}
      />
      <Rhyme
        title="Lorem ipsum dolor sit amet,elit,tempor."
        showModal={setModalVisible}
      />
      <Rhyme
        title="Lorem ipsum dolor sit amet,elit,tempor."
        showModal={setModalVisible}
      />
      <Rhyme
        title="Lorem ipsum dolor sit amet,elit,tempor."
        showModal={setModalVisible}
      />
      <Rhyme
        title="Lorem ipsum dolor sit amet,elit,tempor."
        showModal={setModalVisible}
      />
      <Rhyme
        title="Lorem ipsum dolor sit amet,elit,tempor."
        showModal={setModalVisible}
      />
      <Rhyme
        title="Lorem ipsum dolor sit amet,elit,tempor."
        showModal={setModalVisible}
      />
      <Rhyme
        title="Lorem ipsum dolor sit amet,elit,tempor."
        showModal={setModalVisible}
      />
      <Rhyme
        title="Lorem ipsum dolor sit amet,elit,tempor."
        showModal={setModalVisible}
      />

      <View
        style={{
          marginTop: 10,
          borderTopWidth: 1,
          borderTopColor: '#AC1C1C',
          padding: 15,
          paddingTop: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 16}}>Next</Text>
          <Ionicons name="chevron-forward" size={30} color={'#000'} />
        </TouchableOpacity>

        <Text
          style={{
            color: '#AC1C1C',
            fontSize: 16,
            padding: 5,
            borderRightWidth: 1,
            borderRightColor: '#AC1C1C',
            fontWeight: 'bold',
          }}>
          1
        </Text>
        <Text
          style={{
            color: '#AC1C1C',
            fontSize: 16,
            padding: 5,
            borderRightWidth: 1,
            borderRightColor: '#AC1C1C',
            fontWeight: 'bold',
          }}>
          2
        </Text>
        <Text
          style={{
            color: '#AC1C1C',
            fontSize: 16,
            padding: 5,
            borderRightWidth: 1,
            borderRightColor: '#AC1C1C',
            fontWeight: 'bold',
          }}>
          3
        </Text>
        <Text
          style={{
            color: '#AC1C1C',
            fontSize: 16,
            padding: 5,
            borderRightWidth: 1,
            borderRightColor: '#AC1C1C',
            fontWeight: 'bold',
          }}>
          4
        </Text>
        <Text
          style={{
            color: '#AC1C1C',
            fontSize: 16,
            padding: 5,
            fontWeight: 'bold',
          }}>
          5
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  modalContainer: {
    backgroundColor: '#AC1C1C',
    width: '85%',
    height: '40%',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#F8AE33',
    width: 100,
    height: 40,
    alignSelf: 'center',
  },
  textStyle: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalHeading: {
    color: '#fff',
    fontSize: 16,
    padding: 10,
  },
  addMarginBottom: {
    marginBottom: 20,
  },
});

export default RhymeLibraryScreen;
