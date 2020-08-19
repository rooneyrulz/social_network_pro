import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

// Redux
import { connect, Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';

import AuthNavigation from './routes/Auth';
import HomeNavigation from './routes/Home';

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <HomeNavigation />
        <StatusBar style='auto' />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
