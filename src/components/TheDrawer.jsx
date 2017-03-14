import React, {Component} from "react";
import Drawer from "material-ui/Drawer";
import {ListItem} from "material-ui/List";
import Avatar from "material-ui/Avatar";
import Divider from "material-ui/Divider";
// Icons
import ActionGrade from "material-ui/svg-icons/action/grade";
import ContentSend from "material-ui/svg-icons/content/send";
import LightBulbOutline from "material-ui/svg-icons/action/lightbulb-outline";
import Sort from "material-ui/svg-icons/content/sort";
import List from "material-ui/svg-icons/action/list";
import ContentCopy from "material-ui/svg-icons/content/content-copy";
import Done from "material-ui/svg-icons/action/done";
import Schedule from "material-ui/svg-icons/action/schedule";
import Favorite from "material-ui/svg-icons/action/favorite";
import PowerSettingsNew from "material-ui/svg-icons/action/power-settings-new";


class TheDrawer extends Component {

  onProblem = () => {
    this.props.onRequestClose();
    this.props.onProblem();
  };

  onSignOut = () => {
    this.props.onRequestClose();
    this.props.onSignOut();
  };

  render() {
    return (
      <Drawer
        docked={false}
        width={270}
        open={this.props.open}
        onRequestChange={this.props.onRequestClose}
      >
        <ListItem
          style={{height: 80}}
          disabled={true}
          leftAvatar={
            <Avatar
              style={{top: 40}}
              src={this.props.avatar}
            />
          }
        >
          <br/>
          <br/>
          {this.props.username}
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
              onTouchTap={this.props.onRequestClose}
            />,
            <ListItem
              key={2}
              primaryText="Created"
              leftIcon={<ActionGrade />}
              onTouchTap={this.props.onRequestClose}
            />,
            <ListItem
              key={3}
              primaryText="Participant"
              leftIcon={<ContentSend />}
              onTouchTap={this.props.onRequestClose}
            />,
          ]}
        />
        <ListItem
          primaryText="Problem"
          leftIcon={<LightBulbOutline />}
          onTouchTap={this.onProblem}
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
              onTouchTap={this.props.onRequestClose}
            />,
            <ListItem
              key={2}
              primaryText="Pending"
              leftIcon={<Schedule />}
              onTouchTap={this.props.onRequestClose}
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
              onTouchTap={this.props.onRequestClose}
            />,
            <ListItem
              key={2}
              primaryText="Problem List"
              onTouchTap={this.props.onRequestClose}
            />
          ]}
        />
        <Divider/>
        <ListItem
          primaryText="Sign Out"
          leftIcon={<PowerSettingsNew />}
          onTouchTap={this.onSignOut}
        />
      </Drawer>
    );
  }
}

export default TheDrawer;