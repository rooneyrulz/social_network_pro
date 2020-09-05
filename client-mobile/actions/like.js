import axios from 'axios';
import {
    GET_FEED_LIKES,
    CREATE_FEED_LIKE,
    REMOVE_FEED_LIKE,
    FEED_LIKE_ERROR,
    GET_COMMENT_LIKES,
    CREATE_COMMENT_LIKE,
    REMOVE_COMMENT_LIKE,
    COMMENT_LIKE_ERROR,
    GET_REPLY_LIKES,
    CREATE_REPLY_LIKE,
    REMOVE_REPLY_LIKE,
    REPLY_LIKE_ERROR,
    SET_LIKES_LOADING,
} from './types';

const URI = 'http://192.168.43.200:5000/api/like';

// Get All Feed Likes
export const getFeedLikes = (id) => async(dispatch) => {
    const config = {
        'Content-Type': 'application/json',
    };

    try {
        const { data } = await axios.get(`${URI}/${id}`, config);
        dispatch({ type: GET_FEED_LIKES, payload: data });
    } catch (error) {
        console.log(error);
        dispatch({ type: FEED_LIKE_ERROR, payload: error.response.data });
    }
};

// Create Feed Like
export const createFeedLike = (id) => async(dispatch) => {
    const config = {
        'Content-Type': 'application/json',
    };

    dispatch({ type: SET_LIKES_LOADING });

    try {
        const { data } = await axios.get(`${URI}/${id}/create`, config);
        dispatch({ type: CREATE_FEED_LIKE, payload: data });
    } catch (error) {
        console.log(error.response.data);
        dispatch({ type: FEED_LIKE_ERROR, payload: error.response.data });
    }
};

// Remove Feed Like
export const removeFeedLike = (postID) => async(dispatch) => {
    const config = {
        'Content-Type': 'application/json',
    };

    dispatch({ type: SET_LIKES_LOADING });

    try {
        const { data } = await axios.get(`${URI}/${postID}/remove`, config);
        dispatch({ type: REMOVE_FEED_LIKE, payload: data._id });
    } catch (error) {
        console.log(error.response.data);
        dispatch({ type: FEED_LIKE_ERROR, payload: error.response.data });
    }
};