import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Moment from 'moment';

// Redux
import { connect } from 'react-redux';
import { getFeed } from '../actions/feed';
import { createFeedLike, removeFeedLike } from '../actions/like';

// Components
import Comment from './comment/Comment';

const FeedItem = ({
  feedId,
  feed: { feed, feedLoading },
  auth: { user, isAuthenticated },
  getFeed,
  createFeedLike,
  removeFeedLike,
}) => {
  const [isLiked, setIsLiked] = React.useState(false);

  const likeAction = React.useMemo(
    () => ({
      removeLike: (id) => removeFeedLike(id),
      createLike: (id) => createFeedLike(id),
    }),
    []
  );

  React.useEffect(() => {
    getFeed(feedId);
  }, [getFeed, feedId, feedLoading]);

  React.useEffect(() => {
    setIsLiked((prev) =>
      isAuthenticated &&
      feed.likes.find(
        (like) => like.owner === user._id && like.post === feed._id
      )
        ? true
        : false
    );
  }, [feed, user, feedLoading]);

  return feedLoading ? (
    <Text>Loading...</Text>
  ) : (
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
          <Text style={styles.likeCount}>Likes: {feed.likes.length}</Text>
          <Text style={styles.commentCount}>
            Comments: {feed.comments.length}
          </Text>
        </View>
      </View>
      <View style={styles.feedItemFooter}>
        <View style={styles.likeActionWrapper}>
          {isAuthenticated &&
          feed.likes.find(
            (like) => like.owner === user._id && like.post === feed._id
          ) ? (
            <TouchableOpacity onPress={(e) => likeAction.removeLike(feed._id)}>
              <AntDesign name='like1' size={28} color='dodgerblue' />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={(e) => likeAction.createLike(feed._id)}>
              <AntDesign name='like2' size={28} color='#333' />
            </TouchableOpacity>
          )}
        </View>
        <Comment />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  feed: state.feed,
});

export default connect(mapStateToProps, {
  getFeed,
  createFeedLike,
  removeFeedLike,
})(FeedItem);

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
