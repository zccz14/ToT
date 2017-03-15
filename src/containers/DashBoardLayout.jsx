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
import UserUtil from "../utils/user";
import Guidance from "../containers/Guidance";

class DashBoardLayout extends Component {
  state = {
    openAvatar: false,
    openBio: false
  };
  handleToggle = () => this.props.dispatch(SessionActions.DrawerToggle());
  handleClose = () => this.props.dispatch(SessionActions.DrawerClose());
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
    const {user, dispatch} = this.props;
    const messagesCount = UserUtil.getMessagesCount(user);
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
                src={UserUtil.getAvatar(user)}
                onClick={this.handleTouchTag}
              />
              {
                messagesCount === 0 ?
                  <IconButton
                    tooltip="通知"
                    style={{padding: 0, top: -12}}
                  >
                    <NotificationsIcon color={'#ffffff'}/>
                  </IconButton>
                  :
                  <Badge
                    style={{padding: 0, top: -8}}
                    badgeContent={messagesCount}
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

              }
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
              title={UserUtil.getUsername(user)}
              subtitle={UserUtil.getEmail(user)}
              avatar={UserUtil.getAvatar(user)}
            />
            <CardTitle title={UserUtil.getNickname(user)} subtitle="Biography"/>
            <CardText>
              {UserUtil.getBio(user)}
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
          open={this.props.isDrawerOpen}
          onRequestChange={(open) => dispatch(SessionActions.DrawerChange(open))}
          onRequestClose={() => dispatch(SessionActions.DrawerClose())}
          username={UserUtil.getNickname(user)}
          avatar={UserUtil.getAvatar(user)}
          onProblem={() => this.props.router.push('/dashboard/problems')}
          onSignOut={this.onSignOut}
        />
        <Guidance/>
      </div>
    )
  }

}

function select(state) {
  return {
    Session: state.Session,
    user: state.Session.get('user'),
    isDrawerOpen: state.Session.get('isDrawerOpen')
  }
}

export default connect(select)(DashBoardLayout);