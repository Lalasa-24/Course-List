// src/redux/store.js
import { createStore } from 'redux';
import { courseReducer } from './reducers';

const store = createStore(courseReducer);

export default store;
