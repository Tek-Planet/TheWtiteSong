import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import AwesomeAlert from 'react-native-awesome-alerts';

const CustomAlert = props => {
  const [status, setStatus] = useState(false);

  return (
    <AwesomeAlert
      show={props.status}
      title={props.alertTitle}
      message={props.alertMsg}
      closeOnTouchOutside={false}
      closeOnHardwareBackPress={false}
      showCancelButton={true}
      showConfirmButton={false}
      cancelText={'Ok'}
      confirmText="Yes, delete it"
      confirmButtonColor="#DD6B55"
      cancelButtonColor={props.alertTitle === 'Error' ? 'red' : 'green'}
      onCancelPressed={() => {
        props.showAlert(false);
        props.alertTitle !== 'Error' && props.navigation.goBack();
      }}
      onConfirmPressed={() => {
        props.showAlert(false);
      }}
    />
  );
};

export default CustomAlert;
