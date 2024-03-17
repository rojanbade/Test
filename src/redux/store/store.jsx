import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'


import counterReducer from "../slice/counter";
import postReducer from "../slice/postSlice";
import postSaga from "../../saga/postSaga";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    counter: counterReducer,
    posts: postReducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(postSaga)

export default store;