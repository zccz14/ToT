/**
 * Created by zccz14 on 2017/3/7.
 */
import React, {Component} from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import * as Color from "material-ui/styles/colors";
import {amber700} from "material-ui/styles/colors";
import co from "co";
import {connect} from "react-redux";
import Fetch from "../utils/fetch";
import CircularProgress from "material-ui/CircularProgress";
import * as SessionActions from "../redux/modules/session";
import Snackbar from "material-ui/Snackbar";
import UserUtil from "../utils/user";

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
      dispatch(SessionActions.MessageAppend("Welcome to ToT - XJTU Online Judge"));
      const res = yield Fetch("GET")("/session/user")();
      if (res.status === 200) { // has signed in
        const user = UserUtil.fromJS(yield res.json());
        dispatch(SessionActions.SignInSuccess(user));
        dispatch(SessionActions.MessageAppend(`Welcome back, ${UserUtil.getNickname(user)}`));
        if (router.getCurrentLocation().pathname === '/index') {
          router.push('/dashboard');
        }
      } else if (res.status === 403) { // has not signed in
        dispatch(SessionActions.SignInFailed(yield res.json()));
        dispatch(SessionActions.MessageAppend("Sign in to read more"));
        if (router.getCurrentLocation().pathname !== '/index') {
          router.push('/index');
        }
      }
    });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          {this.props.children}
          {
            this.props.isLoading ?
              <div
                style={{
                  position: 'fixed',
                  height: 80,
                  width: '100%',
                  top: '50%',
                  zIndex: 10
                }}
              >
                <CircularProgress
                  size={80}
                  thickness={5}
                  style={{
                    margin: '-40px auto 0 auto',
                    display: 'block',
                    zIndex: 100
                  }}
                  color={amber700}
                />
              </div>
              :
              null
          }
          <Snackbar
            open={this.props.isBarOpen}
            onRequestClose={() => this.props.dispatch(SessionActions.BarClose())}
            autoHideDuration={3000}
            message={this.props.currentMessage}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

function select(state) {
  return {
    Session: state.Session,
    isLoading: state.Session.get('network'),
    isBarOpen: state.Session.get('isBarOpen'),
    currentMessage: state.Session.get('currentMessage')
  };
}

export default connect(select)(Root);