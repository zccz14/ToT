/**
 * Created by lqp on 2017/3/9.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import AppBar from "material-ui/AppBar";
import Divider from "material-ui/Divider";
import Avatar from "material-ui/Avatar";
import QuickStart from "../components/QuickStart";
import TheDrawer from "../components/TheDrawer";
import Popover from "material-ui/Popover";
import Badge from "material-ui/Badge";
import {amber700} from "material-ui/styles/colors";
import IconButton from "material-ui/IconButton";
import NotificationsIcon from "material-ui/svg-icons/social/notifications";
import {Card, CardHeader, CardTitle, CardText} from "material-ui/Card";
import * as SessionActions from "../redux/modules/session";
import FlatButton from "material-ui/FlatButton";
import co from "co";
import Fetch from "../utils/fetch";
import Config from "../config";

class DashBoardLayout extends Component {
  state = {
    open: false,
    openAvatar: false,
    openBio: false
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
  onNewProblemList = () => this.props.router.push('/dashboard/problem-lists/new');
  onNewProblem = () => this.props.router.push('/dashboard/problems/new');
  onSignOut = () => {
    const {dispatch, router} = this.props;
    co(function*() {
      dispatch(SessionActions.SignOut());
      const res = yield Fetch("GET")("/users/sign-out")();
      if (res.status === 204) {
        dispatch(SessionActions.SignOutSuccess());
        router.push('/index');
      }
    });
  };

  componentWillMount() {
    if (!this.props.Session.get('user')) {
      this.props.router.push('/index');
    }
  }

  render() {
    const {user} = this.props;
    return (
      <div>
        <AppBar
          title="ToT"
          onLeftIconButtonTouchTap={this.handleToggle}
          iconElementRight={
            <div>
              <Avatar
                size={50}
                style={{marginRight: 10}}
                src={DashBoardLayout.getAvatar(user)}
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
        <QuickStart
          onNewProblem={this.onNewProblem}
          onNewProblemList={this.onNewProblemList}
        />
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
              title={DashBoardLayout.getUsername(user)}
              subtitle={DashBoardLayout.getEmail(user)}
              avatar={DashBoardLayout.getAvatar(user)}
            />
            <CardTitle title={DashBoardLayout.getNickname(user)} subtitle="Biography"/>
            <CardText>
              {DashBoardLayout.getBio(user)}
            </CardText>
            <Divider />
            <FlatButton
              style={{margin: 5}}
              label="Sign Out"
              onTouchTap={() => {
                this.handleRequestClose();
                this.onSignOut();
              }}
            />
            <FlatButton
              label="Edit"
              onClick={() => {
                this.handleClose();
                this.handleRequestClose();
                this.props.router.push('/dashboard/biography/edit');
              }}
            />
          </Card>
        </Popover>
        <TheDrawer
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
          onRequestClose={() => this.setState({open: false})}
          username={DashBoardLayout.getNickname(user)}
          avatar={DashBoardLayout.getAvatar(user)}
          onProblem={() => this.props.router.push('/dashboard/problems/new')}
          onSignOut={this.onSignOut}
        />
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
                onClick={() => {
                  this.props.router.push('/dashboard/publicproblemlist')
                }}
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
            onTouchTap={() => {
              this.handleClose();
              this.props.router.push('/dashboard/problems');
            }}
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
            onTouchTap={() => {
              this.handleClose();
              this.onSignOut();
            }}
          />
        </Drawer>
      </div>
    )
  }

  static getNickname(user) {
    if (!user) {
      return "Guest";
    }
    return user.get('profile').get('nickname') || user.get('username');
  }

  static getBio(user) {
    if (!user) {
      return "Welcome to XJTUOJ";
    }
    return user.get('profile').get('bio') || "Boring";
  }

  static getAvatar(user) {
    if (!user) {
      return Config.avatarURL;
    }
    return user.get('profile').get('avatar') || Config.avatarURL;
  }

  static getEmail(user) {
    if (!user) {
      return "guest@funcxy.com";
    }
    return user.get('email');
  }

  static getUsername(user) {
    if (!user) {
      return "guest";
    }
    return user.get('username');
  }
}

function select(state) {
  return {
    Session: state.Session,
    user: state.Session.get('user')
  }
}

export default connect(select)(DashBoardLayout);