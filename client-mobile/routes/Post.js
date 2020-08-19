import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Post from '../screens/Post';
import PostDetail from '../screens/PostDetail';

const PostStack = createStackNavigator();

export default () => (
  <PostStack.Navigator>
    <PostStack.Screen name='Post' component={Post} />
    <PostStack.Screen name='PostDetail' component={PostDetail} />
  </PostStack.Navigator>
);
