/**
 * Created by lqp on 2017/3/14.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import TextField from "material-ui/TextField";
import Paper from "material-ui/Paper";
import FlatButton from "material-ui/FlatButton";
import UserUtil from "../utils/user";

class BiogEdit extends Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const {user} = this.props;
    return (
      <div>
        <Paper
          style={{
            width: '95%',
            padding: 50,
            margin: "20px auto",
            position: "relative"
          }}
          zDepth={2}
        >
          <Paper
            style={{
              margin: "0 auto",
              height: 100,
              width: 100,
              overflow: "hidden"
            }}
            circle={true}
            zDepth={2}
          >
            <img src={UserUtil.getAvatar(user)} style={{width: "100%"}} role="presentation"/>
          </Paper>
          <TextField
            id="Nickname"
            floatingLabelText="Nickname"
            defaultValue={UserUtil.getNickname(user)}
          />
          <br />
          <TextField
            floatingLabelText="Biography"
            hintText="Biography"
            defaultValue={UserUtil.getBio(user)}
            multiLine={true}
            rows={2}
            rowsMax={8}
            fullWidth={true}
          />
          <br />
          <FlatButton
            label="Save"
            primary={true}
            keyboardFocused={true}
            onTouchTap={this.handleClose}
          />
          <FlatButton
            label="Cancel"
            secondary={true}
            onTouchTap={this.handleClose}
            onClick={() => this.props.router.goBack()}
          />
        </Paper>
      </div>
    )
  }

}

function select(state) {
  return {
    Session: state.Session,
    user: state.Session.get('user')
  }
}

export default connect(select)(BiogEdit);