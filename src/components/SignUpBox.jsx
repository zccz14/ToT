import React, {Component} from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class SignUpBox extends Component {
  onSubmit = () => {
    this.props.onSignUp({
      username: this.refs.username.input.value,
      email: this.refs.email.input.value,
      password: this.refs.password.input.value
    });
  };

  onKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.onSubmit();
    }
  };

  render() {
    return (
      <div className="center">
        <TextField
          floatingLabelText="Pick a username"
          ref="username"
          onKeyDown={this.onKeyDown}
        />
        <br/>
        <TextField
          floatingLabelText="Your email address"
          ref="email"
          onKeyDown={this.onKeyDown}
        />
        <br/>
        <TextField
          ref="password"
          floatingLabelText="Create a password"
          hintText="letter and numeral"
          type="password"
          onKeyDown={this.onKeyDown}
        />
        <br/>
        <RaisedButton
          label="Sign Up"
          primary={true}
          className="sign-up-button"
          onClick={this.onSubmit}
        />
      </div>
    );
  }
}

export default SignUpBox;