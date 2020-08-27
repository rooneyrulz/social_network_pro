import React from 'react';
import {
  View,
  Text,
  Alert,
  Modal,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

// New Comment
import NewComment from './NewComment';

const CommentModal = ({ isOpen, setVisible }) => {
  return (
    <Modal visible={isOpen} style={styles.modal}>
      <View style={styles.modalHeader}>
        <TouchableOpacity
          style={styles.modalClose}
          onPress={() => setVisible()}
        >
          <Text style={styles.modalCloseText}>X</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.modalBody}>
        <Text>Modal Body</Text>
      </View>
      <View style={styles.modalFooter}>
        <NewComment />
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
    backgroundColor: 'gold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBody: {
    flex: 12,
    backgroundColor: 'dodgerblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalFooter: {
    flex: 2,
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CommentModal;
