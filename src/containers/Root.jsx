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
import URLs from "../url.json";
import CircularProgress from "material-ui/CircularProgress";

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
    const {dispatch} = this.props;
    co(function*() {
      const res = yield fetch(URLs.baseURL + '/session/user', {
        method: 'GET',
        credentials: 'include'
      });
      if (res.status === 200) {
        const data = yield res.json();
        dispatch({
          type: "SIGN_IN_SUCCESS",
          payload: data
        });
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
                  top: '50%'
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
        </div>
      </MuiThemeProvider>
    );
  }
}

function select(state) {
  return {
    Session: state.Session,
    isLoading: state.Session.get('network')
  };
}

export default connect(select)(Root);