import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

const FeedItem = ({ item }) => {
  return (
    <View style={styles.feedItemContainer}>
      <View style={styles.feedItem}>
        <Text style={styles.feedItemTitle}>{item.title}</Text>
        <Image
          resizeMode='contain'
          source={require('../assets/images/Penguins.jpg')}
          style={{ width: '100%', height: 300 }}
        />
        <View style={styles.feedItemButtonWrapper}>
          <TouchableOpacity
            style={styles.btnLike}
            onPress={(value) => Alert.alert('todo!')}
          >
            <Text style={styles.btnLikeText}>Like</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnComment}
            onPress={(value) => Alert.alert('todo!')}
          >
            <Text style={styles.btnCommentText}>Comment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  feedItemContainer: {},
  feedItem: {
    width: '100%',
    backgroundColor: '#fff',
    marginVertical: 5,
    padding: 20,
  },
  feedItemTitle: {
    fontSize: 18,
    marginBottom: 5,
    color: '#333',
  },
  feedItemButtonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnLike: {
    padding: 10,
    backgroundColor: 'dodgerblue',
    marginRight: 5,
    borderRadius: 5,
  },
  btnLikeText: {
    color: '#fff',
  },
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

export default FeedItem;
