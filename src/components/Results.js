import React, {useContext} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {AuthContext} from '../context/AuthProvider';

function Results() {
  const {partialResults} = useContext(AuthContext);
  return (
    <View>
      <Text>Not all Men {partialResults[0]}</Text>
    </View>
  );
}

export default Results;
