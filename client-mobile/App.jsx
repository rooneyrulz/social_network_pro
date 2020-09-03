import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';

import getToken from './utils/getToken';
import RootNavigation from './routes/Root';

getToken();

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

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
