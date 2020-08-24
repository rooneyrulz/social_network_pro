import {
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

  switch (type) {
    case GET_FEEDS:
      return {
        ...state,
        feeds: payload,
        feedLoading: false,
      };

    case GET_FEED:
      return {
        ...state,
        feed: payload,
        feedLoading: false,
      };

    case CREATE_FEED:
      return {
        ...state,
        feeds: [payload, ...state.feeds],
        feedLoading: false,
      };

    case UPDATE_FEED:
      return {
        ...state,
        feeds: state.feeds.map((feed) =>
          feed._id === payload.id ? payload.feed : feed
        ),
        feedLoading: false,
      };

    case REMOVE_FEED:
      return {
        ...state,
        feeds: state.feeds.filter((feed) => feed._id !== payload),
        feedLoading: false,
      };

    case FEED_ERROR:
      return {
        ...state,
        feedError: payload,
        feeds: [],
        feed: {},
        feedLoading: false,
      };

    default:
      return state;
  }
};
