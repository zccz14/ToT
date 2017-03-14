/**
 * Created by lqp on 2017/3/14.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import TextField from "material-ui/TextField";
import Paper from "material-ui/Paper";
import FlatButton from "material-ui/FlatButton";

class BiogEdit extends Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    return (
      <div>
        <Paper
          style={{height: 500, width: 700, padding: 50, margin: "20px auto", position: "relative"}}
          zDepth={2}
        >
          <Paper
            style={{margin: "0 auto", textAline: 'center', height: 100, width: 100, overflow: "hidden"}}
            circle={true}
            zDepth={2}
          >
            <img src="https://www.gravatar.com/avatar/" alt="你又看不见，活该" style={{width: "100%"}}/>
          </Paper>
          <TextField
            id="Nickname"
            floatingLabelText="Nickname"
            defaultValue="小侠女"
          /><br />
          <TextField
            hintText="Biography"
            defaultValue="帅若天仙"
            floatingLabelText="Biography"
            multiLine={true}
            rows={2}
            rowsMax={8}
            fullWidth={true}
          /><br />
          <FlatButton
            label="Cancel"
            primary={true}
            onTouchTap={this.handleClose}
            style={{bottom: 10, marginRight: 10, marginLeft: 380, position: "absolute"}}
            onClick={() => this.props.router.push('/dashboard')}
          />
          <FlatButton
            label="Submit"
            primary={true}
            keyboardFocused={true}
            onTouchTap={this.handleClose}
            style={{bottom: 10, position: "absolute", marginLeft: 480}}
          />
        </Paper>
      </div>
    )
  }
}

function select(state) {
  return {
    Session: state.session
  }
}

export default connect(select)(BiogEdit);