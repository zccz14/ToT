/**
 * Created by zccz14 on 2017/3/7.
 */
import React, {Component} from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import * as Color from "material-ui/styles/colors";

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
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        {this.props.children}
      </MuiThemeProvider>
    );
  }
}

export default Root;