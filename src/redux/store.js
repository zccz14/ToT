import {createStore, compose, combineReducers, applyMiddleware} from "redux";
import promiseMiddleware from "redux-promise";
import Session from "./modules/session";

const reducer = combineReducers({
  Session
});

const enhancer = compose(
  applyMiddleware(promiseMiddleware),
  (window.devToolsExtension ? window.devToolsExtension() : f => f)
);

const store = createStore(reducer, enhancer);

export default store;