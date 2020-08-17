import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

import AuthNavigation from './routes/Auth';
import HomeNavigation from './routes/Home';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <NavigationContainer>
      {!authenticated ? <AuthNavigation /> : <HomeNavigation />}
      <StatusBar style='auto' />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
