import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

// Comment Modal
import Comment from './comment/Comment';

const FeedItem = ({ item }) => {
  return (
    <View style={styles.feedItemContainer}>
      <View style={styles.feedItemHeader}>
        <Text style={styles.feedItemTitle}>{item.title}</Text>
        <Text style={styles.feedItemSubTitle}>{new Date().toISOString()}</Text>
      </View>
      <View style={styles.feedItemBody}>
        <Image
          resizeMode='contain'
          source={require('../assets/images/Penguins.jpg')}
          style={{ width: '100%', height: 300 }}
        />
      </View>
      <View style={styles.feedItemFooter}>
        <TouchableOpacity
          style={styles.btnLike}
          onPress={(value) => Alert.alert('todo!')}
        >
          <Text style={styles.btnLikeText}>Like</Text>
        </TouchableOpacity>
        <Comment />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  feedItemContainer: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: 8,
    padding: 20,
  },
  feedItemHeader: {
    marginBottom: 5,
  },
  feedItemTitle: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  feedItemSubTitle: {
    fontSize: 12,
    color: '#333',
  },
  feedItemFooter: {
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
});

export default FeedItem;
