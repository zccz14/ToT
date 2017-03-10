/**
 * Created by zccz14 on 2017/3/7.
 */
import React, {Component} from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import * as Color from "material-ui/styles/colors";
import co from "co";
import {connect} from "react-redux";

injectTapEventPlugin();
const muiTheme = getMuiTheme(Object.assign({}, {
  palette: {
    primary1Color: Color.teal700
  },
  appBar: {
    height: 64
  },
  inkBar: {
    backgroundColor: Color.amber700
  }
}));

class Root extends Component {
  componentWillMount() {
    const {dispatch, router} = this.props;
    co(function*() {
      const res = yield fetch('http://localhost:8080/session/user', {
        method: 'GET',
        credentials: 'include'
      });
      if (res.status === 200) {
        const data = yield res.json();
        dispatch({
          type: "SIGN_IN_SUCCESS",
          payload: data
        });
        router.push('/dashboard');
      }
    });
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        {this.props.children}
      </MuiThemeProvider>
    );
  }
}

function select(state) {
  return {
    Session: state.Session
  };
}

export default connect(select)(Root);