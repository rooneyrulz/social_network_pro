import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Moment from 'moment';

// Components
import Comment from './comment/Comment';

const FeedItem = ({ feed }) => {
  const [isLiked, setIsLiked] = React.useState(false);

  const likeAction = React.useMemo(
    () => ({
      removeLike: () => setIsLiked(false),
      createLike: () => setIsLiked(true),
    }),
    []
  );

  return (
    <View style={styles.feedItemContainer}>
      <View style={styles.feedItemHeader}>
        <Text style={styles.feedItemTitle}>{feed.text}</Text>
        <Text style={styles.feedItemSubTitle}>
          {Moment(feed.date).calendar()}
        </Text>
      </View>
      <View style={styles.feedItemBody}>
        <Image
          resizeMode='contain'
          source={require('../assets/images/Penguins.jpg')}
          style={{ width: '100%', height: 300 }}
        />
        <View style={styles.count}>
          <Text style={styles.likeCount}>
            Likes: {feed.likes && feed.likes.length}
          </Text>
          <Text style={styles.commentCount}>
            Comments: {feed.comments && feed.likes.length}
          </Text>
        </View>
      </View>
      <View style={styles.feedItemFooter}>
        <View style={styles.likeActionWrapper}>
          {isLiked ? (
            <TouchableOpacity onPress={(e) => likeAction.removeLike()}>
              <AntDesign name='like1' size={28} color='dodgerblue' />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={(e) => likeAction.createLike()}>
              <AntDesign name='like2' size={28} color='#333' />
            </TouchableOpacity>
          )}
        </View>
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

  likeActionWrapper: {
    marginRight: 8,
    padding: 5,
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
