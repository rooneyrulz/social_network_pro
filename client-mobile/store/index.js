import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Root Reducer
import RootReducer from '../reducers';

const middleware = [thunk];
const initialState = {};

export default createStore(
  RootReducer,
  initialState,
  applyMiddleware(...middleware)
);
