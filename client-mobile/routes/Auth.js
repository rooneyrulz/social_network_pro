import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Register from '../screens/auth/Register';
import Login from '../screens/auth/Login';

const AuthStack = createStackNavigator();

export default () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name='Login'
      component={Login}
      options={{
        title: 'Sign In',
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: 'tomato' },
        headerTitleStyle: { fontSize: 22 },
        animationEnabled: false,
      }}
    />
    <AuthStack.Screen
      name='Register'
      component={Register}
      options={{
        title: 'Sign Up',
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: 'tomato' },
        headerTitleStyle: { fontSize: 22 },
        animationEnabled: false,
      }}
    />
  </AuthStack.Navigator>
);
