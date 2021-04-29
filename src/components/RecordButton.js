import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SaveButton = ({...rest}) => {
  return (
    <TouchableOpacity
      style={{backgroundColor: '#fff', borderRadius: 100, elevation: 2}}
      {...rest}>
      <View style={[styles.buttonContainer]}>
        <Ionicons name="mic" size={30} color={'#FFFFFF'} />
      </View>
    </TouchableOpacity>
  );
};

export default SaveButton;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: '#ED1C24',
    margin: 5,
  },
});
