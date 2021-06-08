import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import MainNavigation from './MainNavigation';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen';
import axios from 'axios';

axios.defaults.headers.common['api-key'] = 'c940fcc12c9f428dda52c4876441e77b';
function App() {
  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      background: '#ffffff',
    },
  };
  const theme = CustomDefaultTheme;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  if (isLoading) return <SplashScreen />;

  return (
    <NavigationContainer theme={theme}>
      <MainNavigation />
    </NavigationContainer>
  );
}

export default App;

// react-native-sound-player
// this is a better version to the music player
