import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import commentSaga from "../../saga/commentSaga";
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from '../slice/counterSlice';
import productReducer from '../slice/productSlice';

const rootReducer = combineReducers({
    counter: counterReducer,
    product: productReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(commentSaga);

export default store;