import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Register from '../screens/auth/Register';
import Login from '../screens/auth/Login';

const AuthStack = createStackNavigator();

export const AuthNavigation = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen name='Register' component={Register} />
        <AuthStack.Screen name='Login' component={Login} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};
