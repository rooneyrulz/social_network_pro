import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FeedStackScreen, NewFeedStackScreen } from './Feed';
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
    <Tabs.Screen name='Home' component={FeedStackScreen} />
    <Tabs.Screen name='NewFeed' component={NewFeedStackScreen} />
    <Tabs.Screen name='Profile' component={ProfileStackScreen} />
  </Tabs.Navigator>
);
