import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

import AuthNavigation from './routes/Auth';
import HomeNavigation from './routes/Home';

import AuthContext from './contexts/AuthContext';
import AuthProvider from './providers/AuthProvider';

const App = () => {
  const { authenticated } = useContext(AuthContext);
  console.log(authenticated);
  return (
    <AuthProvider>
      <NavigationContainer>
        {!authenticated ? <AuthNavigation /> : <HomeNavigation />}
        <StatusBar style='auto' />
      </NavigationContainer>
    </AuthProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
