import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';

import ScreenContainer from './ScreenContainer';
import FeedItem from '../components/FeedItem';
import globalStyle from '../styles/styles';

const Post = ({ navigation }) => {
  const [posts, setPosts] = useState([
    {
      key: Math.random().toString(),
      title: 'post one',
    },
    {
      key: Math.random().toString(),
      title: 'post two',
    },
    {
      key: Math.random().toString(),
      title: 'post three',
    },
    {
      key: Math.random().toString(),
      title: 'post four',
    },
    {
      key: Math.random().toString(),
      title: 'post five',
    },
  ]);
  return (
    <ScreenContainer>
      <View>
        <FlatList
          data={posts}
          renderItem={({ item }) => <FeedItem item={item} />}
        />
      </View>
    </ScreenContainer>
  );
};

export default Post;
