import React, {createContext, useState} from 'react';

// Prepares the dataLayer
export const AuthContext = createContext();

// Wrap our app and provide the Data layer
export const AuthProvider = ({children}) => {
  const [partialResults, setPartialResults] = useState([]);
  const [edit, setEdit] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        partialResults,
        setPartialResults,
        edit,
        setEdit,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
