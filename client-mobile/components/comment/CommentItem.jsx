import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import Moment from 'moment';

const CommentItem = ({ item }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <View style={styles.commentItemContainer}>
      <View style={styles.commentItemBody}>
        <Text>{item.text}</Text>
        <Text style={styles.commentItemSubTitle}>
          {Moment(new Date().toISOString()).calendar()}
        </Text>
      </View>
      <View style={styles.commentItemFooter}>
        <View style={styles.commentItemAction}>
          <TouchableOpacity
            style={styles.btnLike}
            onPress={(e) => setIsLiked((prev) => !prev)}
          >
            {isLiked ? (
              <AntDesign name='like1' size={20} color='dodgerblue' />
            ) : (
              <AntDesign name='like2' size={20} color='#333' />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnReply}
            onPress={(value) => Alert.alert('todo!')}
          >
            <FontAwesome
              style={styles.replyIcon}
              name='comment-o'
              size={20}
              color='#333'
            />
            <Text style={styles.btnReplyText}>Reply</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.count}>
          <Text style={styles.likeCount}>Likes: 0</Text>
          <Text style={styles.replyCount}>Comments: 0</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commentItemContainer: {
    width: '94%',
    borderRadius: 20,
    marginVertical: 5,
    marginHorizontal: '3%',
    padding: 10,
    justifyContent: 'center',
  },
  commentItemHeader: {
    marginBottom: 5,
  },
  commentItemTitle: {
    fontSize: 16,
    color: '#333',
  },
  commentItemSubTitle: {
    fontSize: 12,
    color: '#333',
  },
  commentItemBody: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  commentItemFooter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  commentItemAction: {
    display: 'flex',
    flexDirection: 'row',
  },
  btnLike: {
    padding: 5,
    // backgroundColor: 'dodgerblue',
    marginRight: 5,
  },
  btnLikeText: {
    color: '#fff',
  },
  btnReply: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    marginRight: 10,
  },
  replyIcon: {
    marginRight: 5,
  },
  btnReplyText: {
    color: '#333',
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
  replyCount: {
    color: '#333',
  },
});

export default CommentItem;
