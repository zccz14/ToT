import React, {Component} from "react";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import {connect} from "react-redux";
import {SignInAction} from "../redux/modules/session";
import FlatButton from "material-ui/FlatButton";
class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar title="ToT - XJTU Online Judge" iconElementRight={
          <div>
            <FlatButton label="登录"/>
          </div>
        }/>
        <RaisedButton label="登錄" primary={true} onClick={() => {
          this.props.dispatch(SignInAction("zccz14", "test1234"))
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