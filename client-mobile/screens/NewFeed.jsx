import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

// Redux
import { connect } from 'react-redux';
import { createFeed } from '../actions/feed';

const NewFeed = ({ createFeed }) => {
  const [newFeed, setNewFeed] = useState({ text: '' });
  console.log(newFeed);
  return (
    <View style={styles.newFeedContainer}>
      <View style={styles.inputFieldWrapper}>
        <TextInput
          multiline
          placeholder='What are you thinking about..'
          style={styles.inputField}
          onChangeText={(value) => setNewFeed({ ...newFeed, text: value })}
        />
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={(e) => console.log(newFeed)}
      >
        <Text style={styles.btnText}>POST</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  newFeedContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  inputField: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 20,
    borderRadius: 6,
  },
  inputFieldWrapper: {
    marginBottom: 15,
  },
  btn: {
    width: '100%',
    backgroundColor: 'dodgerblue',
    padding: 15,
    borderRadius: 5,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default connect(null, { createFeed })(NewFeed);
