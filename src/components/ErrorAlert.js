import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import AwesomeAlert from 'react-native-awesome-alerts';

const CustomAlert = props => {
  const [status, setStatus] = useState(false);

  return (
    <AwesomeAlert
      show={props.status}
      title="AwesomeAlert"
      message="I have a message for you!"
      closeOnTouchOutside={false}
      closeOnHardwareBackPress={false}
      showCancelButton={true}
      showConfirmButton={false}
      cancelText="cancel"
      confirmText="Yes, delete it"
      confirmButtonColor="#DD6B55"
      cancelButtonColor="red"
      onCancelPressed={() => {
        props.showAlert(false);
      }}
      onConfirmPressed={() => {
        props.showAlert(false);
      }}
    />
  );
};

export default CustomAlert;
