import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {Router, Route, IndexRedirect, hashHistory} from "react-router";
import Root from "./containers/Root";
import Index from "./containers/IndexLayout";
import SignIn from "./containers/SignIn";
import store from "./redux/store";
import DashBoard from "./containers/DashBoard"
import {Provider} from "react-redux";

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Root}>
        <IndexRedirect to="/index"/>
        <Route path="/index" component={Index}/>
        <Route path="/sign-in" component={SignIn}/>
        <Route path="/dashboard" component={DashBoard}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
