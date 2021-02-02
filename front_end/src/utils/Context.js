import { createContext, useState } from 'react';

export const AuthContext = createContext();

const prevState = () => {
  if (localStorage.getItem("userStatus")) {
    return localStorage.getItem("userStatus") === "true" ? true : false
  } else {
    return false;
  }
};

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(prevState);

  return (
    <AuthContext.Provider value={{authenticated, setAuthenticated}}>
      {children}
    </AuthContext.Provider>
  );
};