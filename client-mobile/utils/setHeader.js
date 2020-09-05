import axios from 'axios';

export default (token) => {
    if (token) {
        axios.defaults.headers.common['X-native-auth'] = token;
    } else {
        delete axios.defaults.headers.common['X-native-auth'];
    }
};