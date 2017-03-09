import React, {Component} from "react";
import {connect} from "react-redux";
import {Tabs, Tab} from "material-ui/Tabs";
import Paper from "material-ui/Paper";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import {SignInAction} from "../redux/modules/session";
import "./index.css";
class Index extends Component {
  render() {
    return (
      <div>
        <AppBar title="ToT - XJTU Online Judge System" showMenuIconButton={false}/>
        <div className="container">
          <Paper className="aaaa">
            <Tabs>
              <Tab label="Sign In">
                <div className="center">
                  <TextField
                    floatingLabelText="Your Username"
                    ref="usernameSignIn"
                  />
                  <TextField
                    floatingLabelText="Your Password"
                    type="password"
                    ref="passwordSignIn"
                  />
                  <br/>
                  <RaisedButton
                    label="Sign In"
                    primary={true}
                    className="sign-in-button"
                    onClick={() => {
                      this.props.dispatch(SignInAction(this.refs.usernameSignIn.input.value, this.refs.passwordSignIn.input.value))
                    }}/>
                </div>
              </Tab>
              <Tab label="Sign Up">
                <div className="center">
                  <TextField floatingLabelText="Pick a username"/>
                  <TextField floatingLabelText="Your email address"/>
                  <TextField
                    floatingLabelText="Create a password"
                    hintText="letter and numeral"
                    type="password"
                  />
                  <br/>
                  <RaisedButton label="Sign Up" primary={true} className="sign-up-button"/>
                </div>
              </Tab>
            </Tabs>
          </Paper>
        </div>

      </div>
    )
  }
}

function select(state) {
  return {
    Session: state.Session
  }
}

export default connect(select)(Index);