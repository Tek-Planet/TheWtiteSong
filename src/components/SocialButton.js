import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SocialButton = ({
  buttonTitle,
  btnType,
  iconBg,
  backgroundColor,
  ...rest
}) => {
  let bgColor = backgroundColor;
  let bgColorIcon = iconBg;
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, {backgroundColor: bgColor}]}
      {...rest}>
      <View style={[styles.iconWrapper, {backgroundColor: bgColorIcon}]}>
        <FontAwesome
          name={btnType}
          style={styles.icon}
          size={18}
          color={'#fff'}
        />
      </View>
      <View style={styles.btnTxtWrapper}>
        <Text style={[styles.buttonText]}>{buttonTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: 170,
    height: 30,
    margin: 10,
    flexDirection: 'row',
    borderRadius: 3,
  },
  iconWrapper: {
    width: 25,
    elevation: 5,
    backgroundColor: '#04316F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontWeight: 'bold',
  },
  btnTxtWrapper: {
    flex: 1,
  },
  buttonText: {
    fontSize: 13,
    margin: 5,
    color: '#fff',
  },
});
