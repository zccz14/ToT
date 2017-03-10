import React, {Component} from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class SignInBox extends Component {
  render() {
    return (
      <div className="center">
        <TextField
          floatingLabelText="Your Username"
          ref="username"
        />
        <br/>
        <TextField
          floatingLabelText="Your Password"
          type="password"
          ref="password"
        />
        <br/>
        <RaisedButton
          label="Sign In"
          primary={true}
          className="sign-in-button"
          onClick={() => {
            this.props.onSignIn(this.refs.username.input.value, this.refs.password.input.value)
          }}
        />
      </div>
    );
  }
}

export default SignInBox;