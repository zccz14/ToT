import React, {Component} from "react";
import {connect} from "react-redux";
import co from "co";
import Fetch from "../utils/fetch";
import * as ProblemActions from "../redux/modules/problem";

class Problems extends Component {
  componentDidMount() {
    const {dispatch} = this.props;
    co(function*() {
      const res = yield Fetch("GET")(`/problems?pageSize=${15}&pageNumber=${0}`)();

      if (res.status === 200) {
        const data = yield res.json();
        dispatch(ProblemActions.Load(data.content));
      }
    });
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

function select(state) {
  return {
    Session: state.Session,
    Problem: state.Problem
  }
}

export default connect(select)(Problems);