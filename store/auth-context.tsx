import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthContextProps } from './types';

export const AuthContext = createContext<AuthContextProps>({
  token: '',
  isAuthenticated: false,
  authenticate: (token: string) => {},
  logout: () => {},
});

interface AuthContextProviderProps {
  children: React.ReactNode;
}

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [authToken, setAuthToken] = useState<string | null>('');

  const authenticate = (token: string) => {
    setAuthToken(token);
    AsyncStorage.setItem('token', token);
  };

  const logout = () => {
    setAuthToken(null);
    AsyncStorage.removeItem('token');
  };

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
