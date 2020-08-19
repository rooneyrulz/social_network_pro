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

import setAuthToken from '../utils/setHeader';

// Load User
export const loadUser = () => async (dispatch) => {
  if (await AsyncStorage.getItem('token'))
    setAuthToken(await AsyncStorage.getItem('token'));

  const config = {
    header: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const { data } = await axios.get(
      'http://localhost:5000/api/auth/user',
      config
    );
    console.log(data);
    dispatch({ type: USER_LOADED, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: AUTH_ERROR });
  }
};
