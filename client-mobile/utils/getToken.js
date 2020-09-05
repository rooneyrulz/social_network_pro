import { AsyncStorage } from 'react-native';
import setAuthHeader from './setHeader';

export default async() => {
    try {
        const token = await AsyncStorage.getItem('X-native-token');
        if (token) return setAuthHeader(token);
    } catch (error) {
        throw error;
    }
};