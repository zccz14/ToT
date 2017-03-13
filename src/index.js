import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {Router, Route, IndexRedirect, hashHistory} from "react-router";
import Root from "./containers/Root";
import Index from "./containers/IndexLayout";
import store from "./redux/store";
import DashBoard from "./containers/DashBoardLayout";
import NewProblem from "./containers/NewProblem";
import ProblemListEditor from "./containers/ProblemListEditor";
import {Provider} from "react-redux";

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Root}>
        <IndexRedirect to="/index"/>
        <Route path="/index" component={Index}/>
        <Route path="/dashboard" component={DashBoard}>
          <Route path="problem/new" component={NewProblem}/>
          <Route path="problemlist/new" component={ProblemListEditor}/>
        </Route>
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
