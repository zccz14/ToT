import React, {Component} from "react";
import {connect} from "react-redux";
import ProblemEditor from "../components/ProblemEditor";

class NewProblem extends Component {
  onCreate = (args) => {
    console.log(args);
  };
  onCancel = () => {
    this.props.router.push('/dashboard');
  };

  render() {
    return (
      <div>
        <ProblemEditor
          onCreate={this.onCreate}
          onCancel={this.onCancel}
        />
      </div>
    );
  }
}

function select(state) {
  return {}
}

export default connect(select)(NewProblem);