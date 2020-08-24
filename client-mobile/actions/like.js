import axios from 'axios';
import {
  GET_LIKES,
  CREATE_LIKE,
  GET_POST_LIKES,
  REMOVE_LIKE,
  LIKE_ERROR,
} from './types';

const URI = 'http://192.168.43.200:5000/api/like';

// Get All Likes
export const getLikes = () => async (dispatch) => {
  const config = {
    'Content-Type': 'application/json',
  };

  try {
    const { data } = await axios.get(`${URI}`, config);
    dispatch({ type: GET_LIKES, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: LIKE_ERROR, payload: error.response.data });
  }
};

// Get All Likes By Post
export const getPostLikes = (id) => async (dispatch) => {
  const config = {
    'Content-Type': 'application/json',
  };

  try {
    const { data } = await axios.get(`${URI}/${id}`, config);
    dispatch({ type: GET_POST_LIKES, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: LIKE_ERROR, payload: error.response.data });
  }
};

// Create Like
export const createLike = (id) => async (dispatch) => {
  const config = {
    'Content-Type': 'application/json',
  };

  try {
    const { data } = await axios.get(`${URI}/${id}/create`, config);
    dispatch({ type: CREATE_LIKE, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: LIKE_ERROR, payload: error.response.data });
  }
};

// Remove Like
export const removeLike = (id) => async (dispatch) => {
  const config = {
    'Content-Type': 'application/json',
  };

  try {
    const { data } = await axios.get(`${URI}/${id}/delete`, config);
    dispatch({ type: REMOVE_LIKE, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: LIKE_ERROR, payload: error.response.data });
  }
};
