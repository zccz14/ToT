import React, {Component} from "react";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import {connect} from "react-redux";
import {SignIn} from "../redux/modules/session";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar title="ToT"/>
        <RaisedButton label="登錄" primary={true} onClick={() => {
          this.props.dispatch(SignIn("zccz14", "test1234"))
        }}/>
      </div>
    );
  }
}

function select(store) {
  return {
    App: store.App
  }
}

export default connect(select)(App);