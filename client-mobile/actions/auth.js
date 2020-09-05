import axios from 'axios';
import { AsyncStorage } from 'react-native';
import {
    USER_LOADED,
    LOGIN_SUCCESS,
    REGISTER_SUCCESS,
    LOGIN_FAIL,
    REGISTER_FAIL,
    AUTH_ERROR,
} from './types';
import getToken from '../utils/getToken';
import setHeader from '../utils/setHeader';

const URI = 'http://192.168.43.200:5000/api/auth';

// Load User
export const loadUser = () => async(dispatch) => {
    AsyncStorage.getItem('X-native-token')
        .then((token) => token && setHeader(token))
        .catch((error) => {
            throw new Error('Fucking error happening here..');
        });

    const config = {
        header: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const { data } = await axios.get(`${URI}/user`, config);
        dispatch({ type: USER_LOADED, payload: data });
    } catch (error) {
        console.log(error);
        dispatch({ type: AUTH_ERROR });
    }
};

// Login User
export const loginUser = (formData) => async(dispatch) => {
    dispatch(loadUser());

    const config = {
        header: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const { data } = await axios.post(`${URI}/login`, formData, config);
        dispatch({ type: LOGIN_SUCCESS, payload: data });
    } catch (error) {
        console.log(error);
        dispatch({ type: LOGIN_FAIL });
    }
};

// Register User
export const registerUser = (formData) => async(dispatch) => {
    dispatch(loadUser());

    const config = {
        header: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const { data } = await axios.post(`${URI}/register`, formData, config);
        console.log(data);
        dispatch({ type: REGISTER_SUCCESS, payload: data });
    } catch (error) {
        console.log(error);
        dispatch({ type: REGISTER_FAIL });
    }
};