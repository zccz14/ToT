import React, {Component} from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class SignInBox extends Component {
  submit = () => {
    this.props.onSignIn(this.refs.username.input.value, this.refs.password.input.value)
  };

  onKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.submit();
    }
  };

  render() {
    return (
      <div className="center">
        <TextField
          floatingLabelText="Your Username"
          ref="username"
          onKeyDown={this.onKeyDown}
        />
        <br/>
        <TextField
          floatingLabelText="Your Password"
          type="password"
          ref="password"
          onKeyDown={this.onKeyDown}
        />
        <br/>
        <RaisedButton
          label="Sign In"
          primary={true}
          className="sign-in-button"
          onClick={this.submit}
        />
      </div>
    );
  }
}

export default SignInBox;