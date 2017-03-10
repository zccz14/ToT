import {createStore, compose, combineReducers, applyMiddleware} from "redux";
import promiseMiddleware from "redux-promise";
import Session from "./modules/session";
import Problem from "./modules/problem";
import User from "./modules/user";
import ProblemList from "./modules/problem_list";
import Submission from "./modules/submission";

const reducer = combineReducers({
  Session,
  User,
  Problem,
  ProblemList,
  Submission
});

const enhancer = compose(
  applyMiddleware(promiseMiddleware),
  (window.devToolsExtension ? window.devToolsExtension() : f => f)
);

const store = createStore(reducer, enhancer);

export default store;