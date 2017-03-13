import React, {Component} from "react";
import {connect} from "react-redux";
import ProblemBuilder from "../components/ProblemBuilder";
import co from "co";
import URLs from "../url.json";

class NewProblem extends Component {
  onCreate = (args) => {
    co(function*() {
      const res = yield fetch(URLs.baseURL + '/problems', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(args)
      });
    })
  };
  onCancel = () => {
    this.props.router.push('/dashboard');
  };

  render() {
    return (
      <div>
        <ProblemBuilder
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