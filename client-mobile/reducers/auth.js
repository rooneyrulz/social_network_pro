import { AsyncStorage } from 'react-native';
import {
    USER_LOADED,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    AUTH_ERROR,
    LOGOUT,
} from '../actions/types';

const initialState = {
    userLoading: true,
    token: AsyncStorage.getItem('X-native-token')
        .then((token) => (token ? token : null))
        .catch((error) => null),
    user: {},
    isAuthenticated: null,
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_LOADED:
            return {
                ...state,
                userLoading: false,
                user: payload,
                isAuthenticated: true,
            };

        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            AsyncStorage.setItem('X-native-token', payload.token);
            return {
                ...state,
                ...payload,
                userLoading: false,
                isAuthenticated: true,
            };

        case LOGIN_FAIL:
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGOUT:
            AsyncStorage.removeItem('X-native-token');
            return {
                ...state,
                userLoading: false,
                token: null,
                user: {},
                isAuthenticated: false,
            };

        default:
            return state;
    }
};