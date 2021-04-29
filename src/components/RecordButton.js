import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SaveButton = ({...rest}) => {
  return (
    <TouchableOpacity style={[styles.buttonContainer]} {...rest}>
      <Ionicons name="mic" size={30} color={'#FFFFFF'} />
    </TouchableOpacity>
  );
};

export default SaveButton;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: '#ED1C24',
  },
});
