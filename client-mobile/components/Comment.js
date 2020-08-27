import React, { useState } from 'react';
import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from 'react-native';

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
        <Text style={styles.btnCommentText}>Comment</Text>
      </TouchableOpacity>
      <CommentModal isOpen={isOpen} setVisible={setVisible} />
    </View>
  );
};

const styles = StyleSheet.create({
  btnComment: {
    padding: 10,
    backgroundColor: 'dodgerblue',
    marginRight: 10,
    borderRadius: 5,
  },
  btnCommentText: {
    color: '#fff',
  },
});

export default Comment;
