/**
 * Created by lqp on 2017/3/14.
 */
import React, {Component} from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";

class BioEdit extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.props.onOpen();
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Cancle"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div
        style={{display: "inline-block"}}
      >
        <FlatButton
          label="Edit"
          onClick={this.handleOpen}
        />
        <Dialog
          id="okok"
          key="00"
          title="Dialog With Actions"
          actions={actions}
          modal={true}
          open={this.state.open}

        >
          还是我！小侠女！
        </Dialog>
      </div>
    );
  }
}

export default BioEdit;