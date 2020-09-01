import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Moment from 'moment';

const CommentItem = ({ item }) => {
  return (
    <View style={styles.commentItemContainer}>
      {/* <View style={styles.commentItemHeader}>
        <Text style={styles.commentItemTitle}>{}</Text>
      </View> */}
      <View style={styles.commentItemBody}>
        <Text>{item.text}</Text>
      </View>
      <View style={styles.commentItemFooter}>
        <View style={styles.commentItemAction}>
          <TouchableOpacity
            style={styles.btnLike}
            onPress={(value) => Alert.alert('todo!')}
          >
            <Text style={styles.btnLikeText}>Like</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnReply}
            onPress={(value) => Alert.alert('todo!')}
          >
            <Text style={styles.btnReplyText}>Reply</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.commentItemSubTitle}>
          {Moment(new Date().toISOString()).calendar()}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commentItemContainer: {
    width: '90%',
    backgroundColor: '#ddd',
    marginVertical: 5,
    marginHorizontal: '5%',
    padding: 10,
    justifyContent: 'center',
    borderRadius: 20,
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
    backgroundColor: 'dodgerblue',
    marginRight: 5,
    borderRadius: 5,
  },
  btnLikeText: {
    color: '#fff',
  },
  btnReply: {
    padding: 5,
    backgroundColor: 'dodgerblue',
    marginRight: 10,
    borderRadius: 5,
  },
  btnReplyText: {
    color: '#fff',
  },
});

export default CommentItem;
