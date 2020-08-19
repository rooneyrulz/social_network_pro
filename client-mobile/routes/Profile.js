import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from '../screens/Profile';
import ProfileDetail from '../screens/ProfileDetail';

const ProfileStack = createStackNavigator();

export default () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name='Profile' component={Profile} />
    <ProfileStack.Screen name='ProfileDetail' component={ProfileDetail} />
  </ProfileStack.Navigator>
);
