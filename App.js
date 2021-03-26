import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <NavigationContainer>
        <Text> Application  </Text>
        </NavigationContainer>
       
      </View>
    );
  }
}

export default App;
