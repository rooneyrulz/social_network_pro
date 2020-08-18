import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import React, { useState, useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigation from './routes/Auth';
import HomeNavigation from './routes/Home';

import AuthContext from './contexts/AuthContext';
import AuthProvider from './providers/AuthProvider';

const loadFonts = () =>
  Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    // 'nunito-sans-regular': require('./assets/fonts/NunitoSans-Regular.ttf'),
    // 'nunito-sans-bold': require('./assets/fonts/NunitoSans-Bold.ttf'),
  });

const App = () => {
  const [authenticated, setAuthenticated] = useState(true);
  const [fontLoaded, setFontLoaded] = useState(false);
  // const context = useContext(AuthContext);
  // console.log(context.value);

  if (fontLoaded) {
    return (
      <AuthProvider>
        <NavigationContainer>
          {!authenticated ? <AuthNavigation /> : <HomeNavigation />}
          <StatusBar style='auto' />
        </NavigationContainer>
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
