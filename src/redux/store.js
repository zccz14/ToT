import {createStore, compose, combineReducers} from "redux";
import App from "./modules/app";

const reducer = combineReducers({App});

const enhancer = compose(window.devToolsExtension ? window.devToolsExtension() : f => f);

const store = createStore(reducer, enhancer);

export default store;