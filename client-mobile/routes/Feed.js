import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Feed from '../screens/Feed';
import FeedDetail from '../screens/FeedDetail';

const FeedStack = createStackNavigator();

export default () => (
  <FeedStack.Navigator>
    <FeedStack.Screen name='Feed' component={Feed} />
    <FeedStack.Screen name='FeedDetail' component={FeedDetail} />
  </FeedStack.Navigator>
);
