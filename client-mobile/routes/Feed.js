import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Feed from '../screens/Feed';
import FeedDetail from '../screens/FeedDetail';
import NewFeed from '../screens/NewFeed';

const FeedStack = createStackNavigator();
const NewFeedStack = createStackNavigator();

export const FeedStackScreen = () => (
  <FeedStack.Navigator>
    <FeedStack.Screen name='Feed' component={Feed} />
    <FeedStack.Screen name='FeedDetail' component={FeedDetail} />
  </FeedStack.Navigator>
);

export const NewFeedStackScreen = () => (
  <NewFeedStack.Navigator>
    <NewFeedStack.Screen name='NewFeed' component={NewFeed} />
  </NewFeedStack.Navigator>
);
