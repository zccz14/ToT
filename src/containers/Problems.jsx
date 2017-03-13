import React, {Component} from "react";
import {connect} from "react-redux";
import co from "co";
import Fetch from "../utils/fetch";
import * as ProblemActions from "../redux/modules/problem";
import ProblemCard from "../components/ProblemCard";

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
        {this.props.Problem.get('items').map((v, i) => (
          <ProblemCard key={i} data={v} onLoading={console.log}/>
        ))}
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