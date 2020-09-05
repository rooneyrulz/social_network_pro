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
  }, [getFeedLikes, feedID]);

  React.useEffect(() => {
    setIsLiked((prev) =>
      !likeLoading &&
      feedLikes.filter(
        (like) =>
          like.post._id === feedID &&
          isAuthenticated &&
          like.owner === user._id &&
          like.kind === 'post'
      ).length
        ? true
        : false
    );
  }, [getFeedLikes, likeLoading]);

  return (
    <View style={styles.likeActionWrapper}>
      {likeLoading ? (
        <></>
      ) : isLiked ? (
        <TouchableOpacity onPress={(e) => isLiked && removeFeedLike(feedID)}>
          <AntDesign name='like1' size={28} color='dodgerblue' />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={(e) => !isLiked && createFeedLike(feedID)}>
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
