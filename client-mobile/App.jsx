import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';

import setAuthToken from './utils/setHeader';
import RootNavigation from './routes/Root';

AsyncStorage.getItem('token').then((value) => {
  if (value) setAuthToken(value);
});

const App = () => {
  // useEffect(() => {
  //   store.dispatch(loadUser());
  // }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigation />
        <StatusBar style='auto' />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
