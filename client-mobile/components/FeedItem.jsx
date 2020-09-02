import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Moment from 'moment';

// Comment Modal
import Comment from './comment/Comment';

const FeedItem = ({ item }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <View style={styles.feedItemContainer}>
      <View style={styles.feedItemHeader}>
        <Text style={styles.feedItemTitle}>{item.title}</Text>
        <Text style={styles.feedItemSubTitle}>
          {Moment(new Date().toISOString()).calendar()}
        </Text>
      </View>
      <View style={styles.feedItemBody}>
        <Image
          resizeMode='contain'
          source={require('../assets/images/Penguins.jpg')}
          style={{ width: '100%', height: 300 }}
        />
        <View style={styles.count}>
          <Text style={styles.likeCount}>Likes: 0</Text>
          <Text style={styles.commentCount}>Comments: 0</Text>
        </View>
      </View>
      <View style={styles.feedItemFooter}>
        <TouchableOpacity
          style={styles.btnLike}
          onPress={(value) => setIsLiked((prev) => !prev)}
        >
          {isLiked ? (
            <AntDesign name='like1' size={28} color='dodgerblue' />
          ) : (
            <AntDesign name='like2' size={28} color='#333' />
          )}
        </TouchableOpacity>
        <Comment />
      </View>
    </View>
  );
};

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
  btnLike: {
    padding: 10,
    // backgroundColor: 'dodgerblue',
    marginRight: 5,
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

export default FeedItem;
