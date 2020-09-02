import React, { useState } from 'react';
import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// Comment Modal
import CommentModal from './CommentModal';

const Comment = () => {
  const [isOpen, setIsOpen] = useState(false);

  const setVisible = () => setIsOpen(false);

  return (
    <View style={styles.commentContainer}>
      <TouchableOpacity
        style={styles.btnComment}
        onPress={() => setIsOpen(true)}
      >
        <FontAwesome name='comment-o' size={25} color='#333' />
        <Text style={styles.btnCommentText}>Comment</Text>
      </TouchableOpacity>
      <CommentModal isOpen={isOpen} setVisible={setVisible} />
    </View>
  );
};

const styles = StyleSheet.create({
  btnComment: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    // backgroundColor: 'dodgerblue',
    marginRight: 10,
  },
  btnCommentText: {
    marginLeft: 5,
    color: '#333',
  },
});

export default Comment;
