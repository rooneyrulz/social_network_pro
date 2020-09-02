import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Feather, Entypo } from '@expo/vector-icons';

import { FeedStackScreen, NewFeedStackScreen } from './Feed';
import ProfileStackScreen from './Profile';

const Tabs = createBottomTabNavigator();

export default () => (
  <Tabs.Navigator
    tabBarOptions={{
      activeTintColor: 'dodgerblue',
      inactiveTintColor: '#333',
      style: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'dodgerblue',
      },
    }}
  >
    <Tabs.Screen
      name='Home'
      component={FeedStackScreen}
      options={{
        title: '',
        tabBarIcon: ({ focused, tintColor }) => (
          <AntDesign
            name='home'
            size={30}
            focused={focused}
            color={focused ? 'dodgerblue' : '#333'}
          />
        ),
      }}
    />
    <Tabs.Screen
      name='NewFeed'
      component={NewFeedStackScreen}
      options={{
        title: '',
        tabBarIcon: ({ focused, tintColor }) => (
          <Feather
            name='edit'
            size={30}
            focused={focused}
            color={focused ? 'dodgerblue' : '#333'}
          />
        ),
      }}
    />
    <Tabs.Screen
      name='Profile'
      component={ProfileStackScreen}
      options={{
        title: '',
        tabBarIcon: ({ focused, tintColor }) => (
          <Feather
            name='users'
            size={30}
            focused={focused}
            color={focused ? 'dodgerblue' : '#333'}
          />
        ),
      }}
    />
  </Tabs.Navigator>
);
