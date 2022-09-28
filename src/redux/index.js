import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./store";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../sagas";

const saga = createSagaMiddleware();
const initialState = {};
const composeFunc = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;
const composeEnhancers = composeFunc(applyMiddleware(saga))
export const store = createStore(rootReducer(), initialState, composeEnhancers);
saga.run(rootSaga)