import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PostStackScreen from './Post';
import ProfileStackScreen from './Profile';

const Tabs = createBottomTabNavigator();

export default () => (
  <Tabs.Navigator
    tabBarOptions={{
      style: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
    }}
  >
    <Tabs.Screen name='Home' component={PostStackScreen} />
    <Tabs.Screen name='Profile' component={ProfileStackScreen} />
  </Tabs.Navigator>
);
