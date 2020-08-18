import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import React, { useState, useContext, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigation from './routes/Auth';
import HomeNavigation from './routes/Home';

import AuthContext from './contexts/AuthContext';
import AuthProvider from './providers/AuthProvider';

import ScreenContainer from './screens/ScreenContainer';

const loadFonts = () =>
  Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    // 'nunito-sans-regular': require('./assets/fonts/NunitoSans-Regular.ttf'),
    // 'nunito-sans-bold': require('./assets/fonts/NunitoSans-Bold.ttf'),
  });

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoading((prev) => false), 3000);
  }, []);

  if (isLoading) {
    return (
      <ScreenContainer>
        <ActivityIndicator />
      </ScreenContainer>
    );
  }

  if (fontLoaded) {
    return (
      <AuthProvider>
        <AuthContext.Consumer>
          {({ authenticated }) => (
            <NavigationContainer>
              {!authenticated ? <AuthNavigation /> : <HomeNavigation />}
              <StatusBar style='auto' />
            </NavigationContainer>
          )}
        </AuthContext.Consumer>
      </AuthProvider>
    );
  } else {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontLoaded((prev) => true)}
      />
    );
  }
};

export default App;
