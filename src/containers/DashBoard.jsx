
/**
 * Created by lqp on 2017/3/9.
 */
import React,{Component} from "react"
import {connect} from "react-redux"
import AppBar from "material-ui/AppBar"
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Avatar from "material-ui/Avatar"


class DashBoard extends Component {
  state = {
    open: false
  };
  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <AppBar
          title="ToT - XJTU Online Judge System"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    )
  }
}

function select(state) {
  return {
    Session: state.session
  }
}

export default connect(select)(DashBoard);