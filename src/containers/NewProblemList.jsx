import React, {Component} from "react";
import {connect} from "react-redux";
import ProblemBuilder from "../components/ProblemListBuilder";
import * as SessionActions from "../redux/modules/session";
import * as ProblemListActions from "../redux/modules/problem_list";
import Fetch from "../utils/fetch";
import co from "co";

class NewProblemList extends Component {
  handleCreate = (args) => {
    const {dispatch} = this.props;
    co(function*() {
      dispatch(SessionActions.NetWork());
      const res = yield Fetch("POST")("/problemLists")(args);
      dispatch(SessionActions.NetWorkFinish());
      if (res.status === 200) {
        const data = yield res.json();
        dispatch(ProblemListActions.Create(data));
      }
    });
  };

  render() {
    return (
      <div>
        <ProblemBuilder onCreate={this.handleCreate}/>
      </div>
    )
  }
}

function select(state) {
  return {};
}

export default connect(select)(NewProblemList);