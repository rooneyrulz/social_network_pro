import React from 'react';
import { connect } from 'react-redux';

import AuthStackNavigation from './Auth';
import HomeTabNavigation from './Home';

const Root = ({ auth: { isAuthenticated } }) =>
  isAuthenticated ? <HomeTabNavigation /> : <AuthStackNavigation />;

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Root);
