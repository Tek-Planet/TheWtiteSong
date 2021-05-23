import React, {createContext, useState} from 'react';

// Prepares the dataLayer
export const AuthContext = createContext();

// Wrap our app and provide the Data layer
export const AuthProvider = ({children}) => {
  const [partialResults, setPartialResults] = useState([]);
  const [edit, setEdit] = useState(false);
  const [mySongs, setMySongs] = useState(false);

  const fetchSongs = async () => {
    const value = await AsyncStorage.getItem('songs');
    if (value !== null) {
      const songs = JSON.parse(jsonValue);
      setMySongs(songs)
    }
    else console.log('no son')
  };

  return (
    <AuthContext.Provider
      value={{
        partialResults,
        setPartialResults,
        edit,
        setEdit,
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
