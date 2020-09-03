import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

// Redux
import { connect } from 'react-redux';
import { getFeedLikes, createFeedLike, removeFeedLike } from '../actions/like';

const LikeAction = () => {
  const [isLiked, setIsLiked] = useState(false);

  //   const findFeedLiked = () =>
  //     item.likes.find((like) => like.owner === user._id)
  //       ? setIsLiked(true)
  //       : setIsLiked(false);

  return (
    <View style={styles.likeActionWrapper}>
      <TouchableOpacity onPress={(value) => setIsLiked((prev) => !prev)}>
        {isLiked ? (
          <AntDesign name='like1' size={28} color='dodgerblue' />
        ) : (
          <AntDesign name='like2' size={28} color='#333' />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default LikeAction;

const styles = StyleSheet.create({
  likeActionWrapper: {
    padding: 10,
    // backgroundColor: 'dodgerblue',
    marginRight: 5,
  },
});
