import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// Root Reducer
import RootReducer from '../reducers';

const middleware = [thunk];
const initialState = {};

export default createStore(
    RootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);