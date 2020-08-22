import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const FeedItem = ({ item }) => {
  return (
    <View style={styles.feedItemContainer}>
      <View style={styles.feedItem}>
        <Text style={styles.feedItemTitle}>{item.title}</Text>
        <Image
          resizeMode='contain'
          source={require('../assets/images/Koala.jpg')}
          style={{ width: '100%', height: 300 }}
        />
        <View style={styles.feedItemButtonWrapper}>
          <Button title='Like' />
          <Button title='Comment' />
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
    fontSize: 15,
    marginBottom: 20,
  },
  feedItemButtonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default FeedItem;
