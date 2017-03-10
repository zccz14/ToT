import React, {Component} from "react";
import {connect} from "react-redux";
import {Tabs, Tab} from "material-ui/Tabs";
import Paper from "material-ui/Paper";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import SignInBox from "../components/SignInBox";
import Badge from "material-ui/Badge";
import IconButton from "material-ui/IconButton";
import NotificationsIcon from "material-ui/svg-icons/social/notifications";
import {amber700} from "material-ui/styles/colors";
import ProblemListCard from "../components/ProblemListCard";
import URLs from "../url.json";
import "./index.css";
import co from "co";
class Index extends Component {
  componentWillMount() {
    if (this.props.Session.get('user')) {
      this.props.router.push('/dashboard');
    }
  }

  onSignIn = (username, password) => {
    const {dispatch, router} = this.props;
    co(function*() {
      const res = yield fetch(URLs.baseURL + '/users/sign-in', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        credentials: 'include',
        body: JSON.stringify({username, password})
      });
      dispatch({type: 'SIGN_IN'});
      if (res.status === 200) {
        const data = yield res.json();
        dispatch({type: 'SIGN_IN_SUCCESS', payload: data});
        router.push('/dashboard');
      } else if (res.status === 404) {
        const data = yield res.json();
        dispatch({type: 'SIGN_IN_FAILED', payload: data, error: true});
      } else if (res.status === 403) {
        const data = yield res.json();
        dispatch({type: 'SIGN_IN_FAILED', payload: data, error: true});
      }
    }).catch(console.log);
  };

  render() {
    return (
      <div>
        <Paper className="root-container" zDepth={3}>
          <AppBar title="ToT - XJTU Online Judge System" showMenuIconButton={false} iconElementRight={
            <Badge
              style={{padding: 0}}
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
          }/>
          <div className="container">
            <Paper className="sign-container">
              <Tabs>
                <Tab label="Sign In">
                  <SignInBox onSignIn={this.onSignIn}/>
                </Tab>
                <Tab label="Sign Up">
                  <div className="center">
                    <TextField floatingLabelText="Pick a username"/>
                    <br/>
                    <TextField floatingLabelText="Your email address"/>
                    <br/>
                    <TextField
                      floatingLabelText="Create a password"
                      hintText="letter and numeral"
                      type="password"
                    />
                    <br/>
                    <RaisedButton
                      label="Sign Up" primary={true} className="sign-up-button"/>
                  </div>
                </Tab>
              </Tabs>
            </Paper>
          </div>
        </Paper>
        <br/>
        <div className="flex-container">
          <ProblemListCard/>
          <ProblemListCard/>
          <ProblemListCard/>
          <ProblemListCard/>
          <ProblemListCard/>
          <ProblemListCard/>
          <ProblemListCard/>
          <ProblemListCard/>
          <ProblemListCard/>
          <ProblemListCard/>
          <ProblemListCard/>
          <ProblemListCard/>
          <ProblemListCard/>
          <ProblemListCard/>
          <ProblemListCard/>
          <ProblemListCard/>
          <ProblemListCard/>
        </div>
      </div>
    )
  }
}

function select(state) {
  return {
    Session: state.Session
  }
}

export default connect(select)(Index);