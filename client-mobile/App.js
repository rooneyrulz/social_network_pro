import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

import { AuthNavigation } from './routes';

const App = () => {
  return (
    <NavigationContainer>
      <AuthNavigation />
      <StatusBar style='auto' />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
