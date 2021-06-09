import React, {createContext, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Prepares the dataLayer
export const AuthContext = createContext();

// Wrap our app and provide the Data layer
export const AuthProvider = ({children}) => {
  const [mySongs, setMySongs] = useState(null);
  const newSong = {
    title: 'Select',
    genre: '',
    author: '',
    contributor: '',
    createdAt: 'null',
    element: [],
  };

  const fetchSongs = async () => {
    const value = await AsyncStorage.getItem('songs');
    if (value !== null) {
      const songs = JSON.parse(value);
      songs.unshift(newSong);
      setMySongs(songs);
    } else setMySongs([]);
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
