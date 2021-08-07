// import {configureStore, applyMiddleware} from '@reduxjs/toolkit';

import {createStore, applyMiddleware, combineReducers} from 'redux';
import counterReducer from '../reducer/counterSlice';

let middlewaresToApply = [];

if (__DEV__) {
  const createFlipperDebugger = require('redux-flipper').default;
  middlewaresToApply.push(createFlipperDebugger());
}

const middleware = applyMiddleware(...middlewaresToApply);

const reducer = combineReducers({counter: counterReducer});

export default createStore(reducer, middleware);
