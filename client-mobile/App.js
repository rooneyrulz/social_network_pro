import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

// Redux
import { connect } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';

import AuthNavigation from './routes/Auth';
import HomeNavigation from './routes/Home';

const App = ({ auth, loadUser }) => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <NavigationContainer>
      <AuthNavigation />
      <StatusBar style='auto' />
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loadUser })(App);
