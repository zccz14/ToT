import React, {Component} from "react";
import SignInDialog from "../components/SignInDialog";

class SignIn extends Component {
  render() {
    return (
      <div>
        <SignInDialog onSignIn={console.log}/>
      </div>
    )
  }
}

export default SignIn;