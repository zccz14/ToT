/**
 * Created by lqp on 2017/3/15.
 */
import React, {Component} from "react";
import ActionInfo from "material-ui/svg-icons/action/info";
import Popover from "material-ui/Popover";
import Menu from "material-ui/Menu";
import MenuItem from "material-ui/MenuItem";
import Divider from "material-ui/Divider";

class GuidanceEditIcon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
        <ActionInfo
          onClick={this.handleTouchTap}
          style={{display: "inlineBlock", right: 20, position: "absolute"}}
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem primaryText="Edit"/>
            <Divider />
            <MenuItem primaryText="Delete"/>
          </Menu>
        </Popover>
      </div>
    )
  }
}

export default GuidanceEditIcon;