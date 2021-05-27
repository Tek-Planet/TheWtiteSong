import React, {createContext, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Prepares the dataLayer
export const AuthContext = createContext();

// Wrap our app and provide the Data layer
export const AuthProvider = ({children}) => {
  const [partialResults, setPartialResults] = useState([]);
  const [edit, setEdit] = useState(false);
  const [mySongs, setMySongs] = useState([]);

  const fetchSongs = async () => {
    const value = await AsyncStorage.getItem('songs');
    if (value !== null) {
      const songs = JSON.parse(value);
      setMySongs(songs);
    } else console.log('no songs');
  };

  return (
    <AuthContext.Provider
      value={{
        mySongs,
        setMySongs,
        fetchSongs: () => {
          fetchSongs();
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
