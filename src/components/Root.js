/**
 * Created by zccz14 on 2017/3/7.
 */
import React from "react";
import App from "./App";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

const Root = () => (
  <MuiThemeProvider>
    <App/>
  </MuiThemeProvider>
);

export default Root;