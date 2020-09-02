import React, { useState } from 'react';
import {
  View,
  Text,
  Alert,
  Modal,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import Swipeout from 'react-native-swipeout';
import { AntDesign, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

// New Comment
import NewComment from './NewComment';
import CommentItem from './CommentItem';

const CommentModal = ({ isOpen, setVisible }) => {
  const [comments, setComments] = useState([
    {
      key: Math.random().toString(),
      text: 'nice',
    },
    {
      key: Math.random().toString(),
      text: 'wow amazing',
    },
    {
      key: Math.random().toString(),
      text: 'hey man nice',
    },
    {
      key: Math.random().toString(),
      text: 'great',
    },
    {
      key: Math.random().toString(),
      text: 'nice',
    },
    {
      key: Math.random().toString(),
      text: 'wow amazing',
    },
    {
      key: Math.random().toString(),
      text: 'hey man nice',
    },
    {
      key: Math.random().toString(),
      text: 'great',
    },
  ]);

  const swipeButtons = [
    {
      component: (
        <View style={styles.btnEdit}>
          <Entypo name='edit' size={17} color='black' />
        </View>
      ),
      onPress: (e) => Alert.alert('todo'),
    },
    {
      component: (
        <View style={styles.btnDelete}>
          <MaterialCommunityIcons name='delete-sweep' size={25} color='black' />
        </View>
      ),
      onPress: (e) => Alert.alert('todo'),
    },
  ];

  const pushNewComment = (comment) =>
    setComments([
      { key: Math.random().toString(), text: comment },
      ...comments,
    ]);

  return (
    <Modal visible={isOpen} style={styles.modal}>
      <View style={styles.modalHeader}>
        <TouchableOpacity
          style={styles.modalClose}
          onPress={() => setVisible()}
        >
          <AntDesign name='down' size={28} color='black' />
        </TouchableOpacity>
      </View>
      <View style={styles.modalBody}>
        <FlatList
          data={comments}
          renderItem={({ item }) => (
            <Swipeout
              style={{ backgroundColor: '#fff' }}
              rowId={item.key}
              right={swipeButtons}
            >
              <CommentItem item={item} />
            </Swipeout>
          )}
        />
      </View>
      <View style={styles.modalFooter}>
        <NewComment addComment={pushNewComment} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
  modalHeader: {
    flex: 1,
    // backgroundColor: 'gold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCloseText: {
    fontSize: 28,
    color: '#333',
  },
  modalBody: {
    flex: 12,
    // backgroundColor: 'dodgerblue',
    justifyContent: 'center',
  },
  modalFooter: {
    flex: 2,
    backgroundColor: 'dodgerblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnDelete: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  btnEdit: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default CommentModal;
