import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const SaveButton = ({buttonTitle, testColor, bGcolor, ...rest}) => {
  let color = testColor ? testColor : '#fff';
  return (
    <TouchableOpacity style={[styles.buttonContainer]} {...rest}>
      <Text style={[styles.buttonText, {color: color}]}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default SaveButton;

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 10,
    borderRadius: 50,
    backgroundColor: '#AE1F1F',
  },

  buttonText: {
    textAlign: 'center',
    color: '#fff',
    margin: 5,
    padding: 5,
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
  },
});
