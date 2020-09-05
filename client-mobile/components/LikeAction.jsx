import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

// Redux
import { connect } from 'react-redux';
import { getFeedLikes, createFeedLike, removeFeedLike } from '../actions/like';

const LikeAction = ({
  feedID,
  auth: { user, isAuthenticated },
  like: { likeLoading, feedLikes },
  getFeedLikes,
  createFeedLike,
  removeFeedLike,
}) => {
  const [isLiked, setIsLiked] = React.useState(false);

  React.useEffect(() => {
    getFeedLikes(feedID);
  }, [getFeedLikes, feedID, createFeedLike, removeFeedLike]);

  return (
    <View style={styles.likeActionWrapper}>
      {isLiked ? (
        <TouchableOpacity onPress={(e) => removeFeedLike(feedID)}>
          <AntDesign name='like1' size={28} color='dodgerblue' />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={(e) => createFeedLike(feedID)}>
          <AntDesign name='like2' size={28} color='#333' />
        </TouchableOpacity>
      )}
    </View>
  );
};

const mapStateToProps = (state) => ({
  like: state.like,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  getFeedLikes,
  createFeedLike,
  removeFeedLike,
})(LikeAction);

const styles = StyleSheet.create({
  likeActionWrapper: {
    marginRight: 8,
    padding: 5,
  },
});
