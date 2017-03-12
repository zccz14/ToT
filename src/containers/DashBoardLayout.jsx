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
import QuickStart from "../components/QuickStart";
import PowerSettingsNew from "material-ui/svg-icons/action/power-settings-new";
import Popover from "material-ui/Popover";
// import MenuItem from "material-ui/MenuItem";
import Badge from "material-ui/Badge";
import {amber700} from "material-ui/styles/colors";
import IconButton from "material-ui/IconButton";
import NotificationsIcon from "material-ui/svg-icons/social/notifications";
import {Card, CardHeader, CardTitle, CardText} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

class DashBoardLayout extends Component {
  state = {
    open: false,
    openAvatar: false
  };
  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});
  handleTouchTag = (event) => {
    event.preventDefault();
    this.setState({
      openAvatar: true,
      anchorEl: event.currentTarget,
    });
  };
  handleRequestClose = () => {
    this.setState({
      openAvatar: false,
    });
  };
  onNewProblem = () => this.props.router.push('/dashboard/problem/new');

  render() {
    return (
      <div>
        <AppBar
          title="ToT"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleToggle}
          iconElementRight={
            <div>
              <Avatar
                size={50}
                style={{marginRight: 10}}
                src="https://www.gravatar.com/avatar/"
                onClick={this.handleTouchTag}
              />
              <Badge
                style={{padding: 0, top: -8}}
                badgeContent={'99+'}
                secondary={true}
                badgeStyle={{top: 0, right: 0, backgroundColor: amber700}}
              >
                <IconButton
                  tooltip="通知"
                  style={{paddingTop: 18, paddingBottom: 6}}
                >
                  <NotificationsIcon color={'#ffffff'}/>
                </IconButton>
              </Badge>
            </div>

          }

        />
        <div>
          {this.props.children}
        </div>
        <QuickStart onNewProblem={this.onNewProblem}/>
        <Popover
          open={this.state.openAvatar}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Card
            style={{width: 300}}>
            <CardHeader
              title="Username"
              subtitle="e-mail"
              avatar="https://www.gravatar.com/avatar/"
            />
            <CardTitle title="Nickname" subtitle="Biography"/>
            <CardText>
              Describe youself
            </CardText>
            <Divider />
            <FlatButton
              style={{margin: 5}}
              label="Sign Out"/>
            <FlatButton label="Action2"/>
          </Card>
        </Popover>
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
          <Divider/>
          <ListItem
            primaryText="Sign Out"
            leftIcon={<PowerSettingsNew />}
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