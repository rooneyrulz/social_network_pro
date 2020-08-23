import { AsyncStorage } from 'react-native';
import axios from 'axios';
import {
  FEED_LOADING,
  GET_FEEDS,
  GET_FEED,
  CREATE_FEED,
  UPDATE_FEED,
  REMOVE_FEED,
  FEED_ERROR,
} from './types';

const URI = 'http://192.168.43.200:5000/api/post';

// Get All Feeds
export const getFeeds = () => async (dispatch) => {
  const token = await AsyncStorage.getItem('token')
    .then((token) => token)
    .catch((err) => console.log('Could not get the token..'));

  const config = {
    header: {
      'Content-Type': 'application/json',
      Authorization: token ? token : null,
    },
  };

  try {
    const { data } = await axios.get(`${URI}`, config);
  } catch (error) {
    console.log(error);
  }
};
