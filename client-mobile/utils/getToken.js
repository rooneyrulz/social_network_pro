import { AsyncStorage } from 'react-native';
import setAuthHeader from './setHeader';

export default async() => {
    try {
        const token = await AsyncStorage.getItem('token');
        if (token) setAuthHeader(token);
    } catch (error) {
        throw error;
    }
};