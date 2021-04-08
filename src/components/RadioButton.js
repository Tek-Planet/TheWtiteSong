import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const RadioButton = ({onPress, selected, children}) => {
  return (
    <View style={styles.radioButtonContainer}>
      <TouchableOpacity onPress={onPress} style={styles.radioButton}>
        {selected ? <View style={styles.radioButtonIcon} /> : null}
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.radioButtonText}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 45,
  },
  radioButton: {
    height: 24,
    width: 24,
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonIcon: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#0ca678',
    borderColor: '#0ca678',
    borderWidth: 2,
  },
  radioButtonText: {
    fontSize: 16,
    marginLeft: 16,
  },
});

export default RadioButton;
