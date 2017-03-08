import React, {Component} from "react";
import SignInDialog from "../components/SignInDialog";
import {connect} from "react-redux";
import {SignInAction} from "../redux/modules/session";

class SignIn extends Component {
  render() {
    return (
      <div>
        <SignInDialog onSignIn={(user, pass) => {
          this.props.dispatch(SignInAction(user, pass))
        }}/>
      </div>
    )
  }
}

function select(state) {
  return {
    Session: state.Session
  };
}

export default connect(select)(SignIn);