import { AsyncStorage } from 'react-native';
import {
  FEED_LOADING,
  GET_FEEDS,
  GET_FEED,
  CREATE_FEED,
  UPDATE_FEED,
  REMOVE_FEED,
  FEED_ERROR,
} from '../actions/types';

const initialState = {
  feedLoading: true,
  feeds: [],
  feed: {},
  userFeeds: [],
  feedError: null,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
};
