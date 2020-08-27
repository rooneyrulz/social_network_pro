import React from 'react';
import {
  View,
  Text,
  Alert,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const NewComment = () => {
  return (
    <View style={styles.newCommentContainer}>
      <TextInput
        multiline
        placeholder='Write your comment..'
        style={styles.inputField}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={(value) => Alert.alert('todo!')}
      >
        <Text style={styles.btnText}>POST</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  newCommentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 4,
  },
  inputField: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 20,
    borderRadius: 6,
    marginRight: 5,
  },
  btn: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
  },
  btnText: {
    color: '#111',
  },
});

export default NewComment;
