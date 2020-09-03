import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import Moment from 'moment';

// Components
import Comment from './comment/Comment';
import LikeAction from './LikeAction';

const FeedItem = ({ item }) => {
  return (
    <View style={styles.feedItemContainer}>
      <View style={styles.feedItemHeader}>
        <Text style={styles.feedItemTitle}>{item.text}</Text>
        <Text style={styles.feedItemSubTitle}>
          {Moment(item.date).calendar()}
        </Text>
      </View>
      <View style={styles.feedItemBody}>
        <Image
          resizeMode='contain'
          source={require('../assets/images/Penguins.jpg')}
          style={{ width: '100%', height: 300 }}
        />
        <View style={styles.count}>
          <Text style={styles.likeCount}>Likes: {item.likes.length}</Text>
          <Text style={styles.commentCount}>
            Comments: {item.comments.length}
          </Text>
        </View>
      </View>
      <View style={styles.feedItemFooter}>
        <LikeAction />
        <Comment />
      </View>
    </View>
  );
};

export default FeedItem;

const styles = StyleSheet.create({
  feedItemContainer: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: 8,
    padding: 20,
  },
  feedItemHeader: {
    marginBottom: 5,
  },
  feedItemTitle: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  feedItemSubTitle: {
    fontSize: 12,
    color: '#333',
  },
  feedItemFooter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#555',
    paddingTop: 5,
  },

  count: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 10,
  },
  likeCount: {
    marginRight: 10,
    color: '#333',
  },
  commentCount: {
    color: '#333',
  },
});
