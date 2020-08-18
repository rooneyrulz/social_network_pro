import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigation from './routes/Auth';
import HomeNavigation from './routes/Home';

const App = () => {
  return (
    <NavigationContainer>
      <AuthNavigation />
      <StatusBar style='auto' />
    </NavigationContainer>
  );
};

export default App;
