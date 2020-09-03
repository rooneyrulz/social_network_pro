import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

// Redux
import { connect } from 'react-redux';
import { getFeedLikes, createFeedLike, removeFeedLike } from '../actions/like';

const LikeAction = ({
  item,
  auth: { user },
  like: { feedLikes, likeLoading },
  getFeedLikes,
  createFeedLike,
  removeFeedLike,
}) => {
  useEffect(() => {
    getFeedLikes(item._id);
  }, [getFeedLikes, likeLoading]);

  const likeAction = React.useMemo(
    () => ({
      removeLike: (id) => removeFeedLike(id),
      createLike: (id) => createFeedLike(id),
    }),
    []
  );

  return (
    <View style={styles.likeActionWrapper}>
      {feedLikes.find(
        (like) => like.owner === user._id && like.post._id === item._id
      ) ? (
        <TouchableOpacity onPress={(e) => likeAction.removeLike(item._id)}>
          <AntDesign name='like1' size={28} color='dodgerblue' />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={(e) => likeAction.createLike(item._id)}>
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
    padding: 10,
    // backgroundColor: 'dodgerblue',
    marginRight: 5,
  },
});
