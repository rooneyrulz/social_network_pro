import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// Redux
import { connect } from 'react-redux';
import { getFeeds } from '../actions/feed';

import ScreenContainer from './ScreenContainer';
import FeedItem from '../components/FeedItem';

const Post = ({ feeds: { feeds, feedLoading }, getFeeds }) => {
  useEffect(() => {
    getFeeds();
  }, [getFeeds, feedLoading]);

  return feedLoading ? (
    <Text>Loading...</Text>
  ) : (
    <ScreenContainer>
      <View style={styles.feedContainer}>
        <View style={styles.feedListContainer}>
          <FlatList
            keyExtractor={(item) => item._id}
            data={feeds}
            renderItem={({ item }) => <FeedItem feedId={item._id} />}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

const mapStateToProps = (state) => ({
  feeds: state.feed,
});

const styles = StyleSheet.create({
  feedContainer: {
    flex: 1,
  },
  feedListContainer: {},
});

export default connect(mapStateToProps, {
  getFeeds,
})(Post);
