import { createStore } from 'redux';

import initialState from './initialState';
import userReducer from './reducers/userReducer';

const store = createStore(userReducer, initialState);

export default store;
