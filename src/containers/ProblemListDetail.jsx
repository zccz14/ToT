import React, {Component} from "react";
import {connect} from "react-redux";

class ProblemListPage extends Component {
  render() {
    const {params, ProblemList} = this.props;
    const {id} = params;
    const items = ProblemList.get('items');
    const data = items.get(id);
    return (
      <div>
        <h1>{data ? data.title : '404'}</h1>
      </div>
    )
  }
}

function select(state) {
  return {
    ProblemList: state.ProblemList
  };
}

export default connect(select)(ProblemListPage);