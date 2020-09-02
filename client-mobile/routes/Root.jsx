import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { connect } from 'react-redux';

import AuthStackNavigation from './Auth';
import HomeTabNavigation from './Home';

const Root = ({ auth: { isAuthenticated, userLoading } }) =>
  userLoading ? (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size='large' />
    </View>
  ) : isAuthenticated ? (
    <HomeTabNavigation />
  ) : (
    <AuthStackNavigation />
  );

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Root);
