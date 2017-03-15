/**
 * Created by lqp on 2017/3/14.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import ProblemListCard from "../components/ProblemListCard";
import "../containers/ProblemList.css";

class ProblemList extends Component {
  render() {
    return (
      <div className="flex-container">
        {
          this.props.ProblemList.get('items').map((v, i) => (
            <ProblemListCard
              key={i}
              title={v.title}
              creatorName={v.creator}
              date={new Date(parseInt(i.slice(0, 8), 16) * 1000).toLocaleString()}
            />
          ))
        }
      </div>
    )
  }
}

function select(state) {
  return {
    Session: state.session
  }
}

export default connect(select)(ProblemList)