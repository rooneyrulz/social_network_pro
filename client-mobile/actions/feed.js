import axios from 'axios';
import {
    GET_FEEDS,
    GET_FEED,
    CREATE_FEED,
    UPDATE_FEED,
    REMOVE_FEED,
    FEED_ERROR,
} from './types';

const URI = 'http://192.168.43.200:5000/api/post';

// Get All Feeds
export const getFeeds = () => async(dispatch) => {
    const config = {
        header: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const { data } = await axios.get(`${URI}`, config);
        dispatch({ type: GET_FEEDS, payload: data });
    } catch (error) {
        console.log(error);
        dispatch({ type: FEED_ERROR, payload: error.response.data });
    }
};

// Get Feed
export const getFeed = (id) => async(dispatch) => {
    const config = {
        header: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const { data } = await axios.get(`${URI}/${id}`, config);
        dispatch({ type: GET_FEED, payload: data });
    } catch (error) {
        console.log(error);
        dispatch({ type: FEED_ERROR, payload: error.response.data });
    }
};

// Create Feed
export const createFeed = (payload) => async(dispatch) => {
    const config = {
        header: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const { data } = await axios.post(`${URI}/create`, payload, config);
        dispatch({ type: CREATE_FEED, payload: data });
    } catch (error) {
        console.log(error);
        dispatch({ type: FEED_ERROR, payload: error.response.data });
    }
};

// Update Feed
export const updateFeed = (payload, id) => async(dispatch) => {
    const config = {
        header: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const { data } = await axios.put(`${URI}/${id}/update`, payload, config);
        dispatch({ type: UPDATE_FEED, payload: data });
    } catch (error) {
        console.log(error);
        dispatch({ type: FEED_ERROR, payload: error.response.data });
    }
};

// Remove Feed
export const removeFeed = (id) => async(dispatch) => {
    const config = {
        header: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const { data } = await axios.delete(`${URI}/${id}/delete`, config);
        dispatch({ type: REMOVE_FEED, payload: id });
    } catch (error) {
        console.log(error);
        dispatch({ type: FEED_ERROR, payload: error.response.data });
    }
};