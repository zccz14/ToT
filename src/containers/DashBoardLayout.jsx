/**
 * Created by lqp on 2017/3/9.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import Divider from "material-ui/Divider";
import {ListItem} from "material-ui/List";
import ActionGrade from "material-ui/svg-icons/action/grade";
import ContentSend from "material-ui/svg-icons/content/send";
import LightBulbOutline from "material-ui/svg-icons/action/lightbulb-outline";
import Sort from "material-ui/svg-icons/content/sort";
import List from "material-ui/svg-icons/action/list";
import ContentCopy from "material-ui/svg-icons/content/content-copy";
import Done from "material-ui/svg-icons/action/done";
import Schedule from "material-ui/svg-icons/action/schedule";
import Favorite from "material-ui/svg-icons/action/favorite";
import Avatar from "material-ui/Avatar";

class DashBoardLayout extends Component {
  state = {
    open: false
  };
  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <AppBar
          title="ToT"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <div>
          {this.props.children}
        </div>
        <Drawer
          docked={false}
          width={270}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <ListItem
            style={{height: 80}}
            disabled={true}
            leftAvatar={
              <Avatar
                style={{top: 40}}
                src="https://www.gravatar.com/avatar/"
              />
            }
          >
            <br/>
            <br/>
            Image Avatar
          </ListItem>
          <Divider />
          <ListItem
            primaryText="Problem List"
            leftIcon={<List />}
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <ListItem
                key={1}
                primaryText="Public"
                leftIcon={<Sort />}
                onTouchTap={this.handleClose}
              />,
              <ListItem
                key={2}
                primaryText="Created"
                leftIcon={<ActionGrade />}
                onTouchTap={this.handleClose}
              />,
              <ListItem
                key={3}
                primaryText="Participant"
                leftIcon={<ContentSend />}
                onTouchTap={this.handleClose}
              />,
            ]}
          />
          <ListItem
            primaryText="Problem"
            leftIcon={<LightBulbOutline />}
            onTouchTap={this.handleClose}
          />
          <ListItem
            primaryText="Submission"
            leftIcon={<ContentCopy/>}
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <ListItem
                key={1}
                primaryText="Tested"
                leftIcon={<Done />}
                onTouchTap={this.handleClose}
              />,
              <ListItem
                key={2}
                primaryText="Pending"
                leftIcon={<Schedule />}
                onTouchTap={this.handleClose}
              />
            ]}
          />
          <Divider/>
          <ListItem
            primaryText="Favorite"
            leftIcon={<Favorite />}
            initiallyOpen={true}
            primaryTogglesNestedList={true}
            nestedItems={[
              <ListItem
                key={1}
                primaryText="Problem"
                onTouchTap={this.handleClose}
              />,
              <ListItem
                key={2}
                primaryText="Problem List"
                onTouchTap={this.handleClose}
              />
            ]}
          />
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

export default connect(select)(DashBoardLayout);