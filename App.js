import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import MainNavigation from './src/navigations/MainNavigation';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './src/screens/SplashScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  if (isLoading) return <SplashScreen />;

  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}

export default App;

// react-native-sound-player
// this is a better version to the music player
