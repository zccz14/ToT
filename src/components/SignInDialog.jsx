import React, {Component} from "react";
import FlatButton from "material-ui/FlatButton";
import Dialog from "material-ui/Dialog";
import TextField from "material-ui/TextField";

class SignInDialog extends Component {
  render() {
    const {onSignIn} = this.props;
    const actions = [
      <FlatButton
        key={0}
        label="登录"
        primary={true}
        onTouchTap={() => {
          onSignIn(this.refs.username.input.value, this.refs.password.input.value)
        } }
      />
    ];
    return (
      <Dialog
        title="ToT - 登录"
        open={true}
        modal={true}
        actions={actions}
      >
        <TextField
          type="text"
          floatingLabelText="账户"
          ref="username"
        />
        <br/>
        <TextField
          type="password"
          floatingLabelText="密码"
          ref="password"
        />
      </Dialog>
    )
  }
}

export default SignInDialog;