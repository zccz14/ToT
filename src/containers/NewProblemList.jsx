import React, {Component} from "react";
import {connect} from "react-redux";
import ProblemBuilder from "../components/ProblemListBuilder";
import * as SessionActions from "../redux/modules/session";
import * as ProblemListActions from "../redux/modules/problem_list";
import Fetch from "../utils/fetch";
import co from "co";

class NewProblemList extends Component {
  handleCreate = (args) => {
    const {dispatch, router} = this.props;
    co(function*() {
      dispatch(SessionActions.NetWork());
      const res = yield Fetch("POST")("/problemLists")(args);
      dispatch(SessionActions.NetWorkFinish());
      if (res.status === 200) {
        const data = yield res.json();
        dispatch(ProblemListActions.Create(data));
        dispatch(SessionActions.MessageAppend("Created Successfully"));
        router.goBack();
      } else {
        dispatch(SessionActions.MessageAppend("Created Failed"));
      }
    });
  };

  handleCancel = () => {
    this.props.router.goBack();
  };

  render() {
    return (
      <div>
        <ProblemBuilder
          onCreate={this.handleCreate}
          onCancel={this.handleCancel}
        />
      </div>
    )
  }
}

function select(state) {
  return {};
}

export default connect(select)(NewProblemList);