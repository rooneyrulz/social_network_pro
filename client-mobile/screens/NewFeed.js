import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const NewFeed = () => {
  return (
    <View style={styles.newFeedContainer}>
      <View style={styles.inputFieldWrapper}>
        <TextInput style={styles.inputField} />
      </View>
      <TouchableOpacity style={styles.btn}>
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

export default NewFeed;
