import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const SaveButton = ({buttonTitle, ...rest}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default SaveButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#AC1C1C',
    margin: 10,
    borderRadius: 50,
  },

  buttonText: {
    textAlign: 'center',
    color: '#fff',
    margin: 5,
    padding: 5,
    fontSize: 20,
  },
});
