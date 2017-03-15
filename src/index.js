import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {Router, Route, IndexRedirect, hashHistory} from "react-router";
import Root from "./containers/Root";
import Index from "./containers/IndexLayout";
import store from "./redux/store";
import DashBoard from "./containers/DashBoardLayout";
import NewProblem from "./containers/NewProblem";
import NewProblemList from "./containers/NewProblemList";
import ViewProblem from "./containers/ViewProblem";
import {Provider} from "react-redux";
import Problems from "./containers/Problems";
import BiogEdit from "./containers/BiogEdit";

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Root}>
        <IndexRedirect to="/index"/>
        <Route path="/index" component={Index}/>
        <Route path="/dashboard" component={DashBoard}>
          <Route path="problems" component={Problems}/>
          <Route path="problems/new" component={NewProblem}/>
          <Route path="problem-lists/new" component={NewProblemList}/>
          <Route path="problem/view" component={ViewProblem}/>
          <Route path="biography/edit" component={BiogEdit}/>
          <Route path="publicproblemlist" component={PublicProblemList}/>
        </Route>
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
