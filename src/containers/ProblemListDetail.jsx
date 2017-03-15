import React, {Component} from "react";
import {connect} from "react-redux";
import Divider from "material-ui/Divider";

class ProblemListPage extends Component {
  render() {
    const {params, ProblemList} = this.props;
    const {id} = params;
    const items = ProblemList.get('items');
    const data = items.get(id);
    if (!data) {
      return (<div>Not Available</div>)
    }
    return (
      <div>
        <h1>{data.title}</h1>
        <h2>包含 {data.problemIds.length} 题</h2>
        <h2>{data.userList.length} 人参与</h2>
        <h3>类型：{data.type}</h3>
        <Divider/>
        {JSON.stringify(data)}
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