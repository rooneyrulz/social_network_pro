import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import ScreenContainer from './ScreenContainer';
import FeedItem from '../components/FeedItem';

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
      <View style={styles.feedContainer}>
        <View style={styles.feedListContainer}>
          <FlatList
            data={posts}
            renderItem={({ item }) => <FeedItem item={item} />}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  feedContainer: {
    flex: 1,
  },
  feedListContainer: {},
});

export default Post;
